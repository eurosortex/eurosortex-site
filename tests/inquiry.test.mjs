import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequest } from '../functions/api/inquiry.js';

const base = {
  name: 'Local test', reply: 'test@example.com', product: 'Urban Sweatshirts',
  productId: 'urban-sweatshirts', quantity: 50, locale: 'pl', pagePath: '/',
  message: 'Please quote delivery',
};
function request(payload) {
  return new Request('https://example.com/api/inquiry', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://example.com' },
    body: JSON.stringify(payload),
  });
}

test('quote keeps the selected product, delivery city and attribution in the CRM note', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls.push({ url, body: JSON.parse(options.body) });
    return Response.json(calls.length === 1 ? [{ id: 123 }] : {});
  });
  const response = await onRequest({ request: request({ ...base, city: '  Warszawa  ', attribution: { first_touch: { utm_source: 'local-test' } } }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
  assert.equal(response.status, 200);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].body[0].name, 'Website · Urban Sweatshirts');
  const note = calls[1].body[0].params.text;
  assert.match(note, /Город доставки: Warszawa/);
  assert.match(note, /ID ассортимента: urban-sweatshirts/);
  assert.match(note, /Количество: 50 кг/);
  assert.match(note, /utm_source: local-test/);
  assert.deepEqual(calls[0].body[0].custom_fields_values, [{ field_id: 772247, values: [{ value: 'local-test' }] }]);
  assert.deepEqual(await response.json(), { ok: true, lead_created: true, test_lead: false });
});

test('last-touch attribution is stored atomically with the lead, first touch remains in the note', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length === 1 ? [{ id: 123 }] : {});
  });
  const response = await onRequest({ request: request({ ...base, attribution: {
    first_touch: { utm_source: 'google', utm_medium: 'organic' },
    last_touch: { utm_source: 'partner', utm_medium: 'referral', utm_campaign: 'autumn', gclid: 'click-test', referrer: 'https://example.org/' },
  } }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
  assert.equal(response.status, 200);
  const fields = Object.fromEntries(calls[0][0].custom_fields_values.map(f => [f.field_id, f.values[0].value]));
  assert.deepEqual(fields, { 772247: 'partner', 772243: 'referral', 772245: 'autumn', 772257: 'click-test', 772253: 'https://example.org/' });
  assert.match(calls[1][0].params.text, /utm_source: google/);
  assert.match(calls[1][0].params.text, /utm_source: partner/);
});

test('missing consent attribution does not fabricate a direct source, other accounts get no foreign IDs', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length % 2 === 1 ? [{ id: 123 }] : {});
  });
  await onRequest({ request: request(base), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
  await onRequest({ request: request({ ...base, attribution: { last_touch: { utm_source: 'google' } } }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential', KOMMO_SUBDOMAIN: 'another-account' } });
  assert.equal(calls[0][0].custom_fields_values, undefined);
  assert.equal(calls[2][0].custom_fields_values, undefined);
});

test('reserved invalid-domain tests are marked and excluded from conversion reporting', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length === 1 ? [{ id: 123 }] : {});
  });
  const response = await onRequest({ request: request({ ...base, reply: 'seo-test@example.invalid' }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
  assert.match(calls[0][0].name, /^TEST · NIE OBSŁUGIWAĆ/);
  assert.ok(calls[0][0]._embedded.tags.some(tag => tag.name === 'website-test'));
  assert.deepEqual(await response.json(), { ok: true, lead_created: true, test_lead: true });
});

test('honeypot never creates or reports a lead', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected request'); });
  const response = await onRequest({ request: request({ ...base, website: 'spam' }), env: {} });
  assert.deepEqual(await response.json(), { ok: true, lead_created: false });
  assert.equal(fetch.mock.callCount(), 0);
});

test('older product forms without a city remain compatible', async (t) => {
  let count = 0;
  t.mock.method(globalThis, 'fetch', async () => Response.json(++count === 1 ? [{ id: 123 }] : {}));
  const response = await onRequest({ request: request(base), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
  assert.equal(response.status, 200);
  assert.equal(count, 2);
});

test('invalid quantity or missing assortment never creates a CRM lead', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected external request'); });
  for (const payload of [{ ...base, quantity: 49 }, { ...base, product: '' }]) {
    const response = await onRequest({ request: request(payload), env: {} });
    assert.equal(response.status, 400);
  }
  assert.equal(fetch.mock.callCount(), 0);
});

test('total weight must cover 50 kg for each selected product; unspecified weight is allowed', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length % 2 === 1 ? [{ id: 123 }] : {});
  });
  const products = [{ name: 'Urban Sweatshirts', id: 'urban-sweatshirts' }, { name: 'Kids Wear', id: 'kids-wear' }];
  for (const quantity of [20, 49, 50, 99]) {
    const response = await onRequest({ request: request({ ...base, products, quantityScope: 'total', quantity }), env: {} });
    assert.equal(response.status, 400);
  }
  assert.equal(calls.length, 0);
  for (const quantity of [100, null]) {
    const response = await onRequest({ request: request({ ...base, products, quantityScope: 'total', quantity }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
    assert.equal(response.status, 200);
  }
});

test('enquiries without a quantity keep it unspecified in the CRM note', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length % 2 === 1 ? [{ id: 123 }] : {});
  });
  for (const quantity of [null, undefined, '', '  ']) {
    const response = await onRequest({ request: request({ ...base, product: 'Do ustalenia', productId: '', quantity }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
    assert.equal(response.status, 200);
    assert.match(calls.at(-1)[0].params.text, /Количество: не указано — уточнить у клиента/);
    assert.match(calls.at(-1)[0].params.text, /Ассортимент: Do ustalenia/);
  }
});

test('malformed quantities and invalid reply contacts do not create a lead', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected external request'); });
  for (const quantity of [0, -1, 20, 49, 100001, 'abc']) {
    assert.equal((await onRequest({ request: request({ ...base, quantity }), env: {} })).status, 400);
  }
  for (const reply of ['......', '123', 'wrong@email', 'hello']) {
    assert.equal((await onRequest({ request: request({ ...base, reply }), env: {} })).status, 400);
  }
  assert.equal(fetch.mock.callCount(), 0);
});


test('multiple categories, total weight and contact preference reach the CRM note', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length % 2 === 1 ? [{ id: 123 }] : {});
  });
  const products = [{ name: 'Urban Sweatshirts', id: 'urban-sweatshirts' }, { name: 'Kids Wear', id: 'kids-wear' }];
  for (const [contactPreference, reply, expected] of [['whatsapp', '+48 123 456 789', 'WhatsApp — написать'], ['tel', '+48 123 456 789', 'Телефон — позвонить'], ['email', 'test@example.com', 'E-mail — написать']]) {
    const response = await onRequest({ request: request({ ...base, products, contactPreference, reply, quantity: 100, quantityScope: 'total', city: 'Poznań' }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
    assert.equal(response.status, 200);
    const note = calls.at(-1)[0].params.text;
    assert.match(note, /Ассортимент: Urban Sweatshirts, Kids Wear/);
    assert.match(note, /ID ассортимента: urban-sweatshirts, kids-wear/);
    assert.ok(note.includes(expected));
    assert.match(note, /общий вес заявки/);
    assert.match(note, /Количество: 100 кг/);
  }
});

test('minimal multi-category form allows help with choosing and unspecified weight', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length === 1 ? [{ id: 123 }] : {});
  });
  const response = await onRequest({ request: request({ ...base, products: [], quantity: null, contactPreference: 'email' }), env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' } });
  assert.equal(response.status, 200);
  assert.match(calls[1][0].params.text, /Ассортимент: Do ustalenia/);
  assert.match(calls[1][0].params.text, /Количество: не указано/);
});

test('invalid contact preferences and malformed category lists fail before CRM requests', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected external request'); });
  for (const fields of [{ contactPreference: 'fax' }, { contactPreference: 'whatsapp' }, { contactPreference: 'email', reply: '+48 123 456 789' }, { products: 'Kids Wear' }, { products: [null] }, { products: [{ name: 'Kids Wear' }] }]) {
    assert.equal((await onRequest({ request: request({ ...base, ...fields }), env: {} })).status, 400);
  }
  assert.equal(fetch.mock.callCount(), 0);
});


test('short product enquiry preserves product and reply channel without weight or city', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    calls.push(JSON.parse(options.body));
    return Response.json(calls.length === 1 ? [{ id: 123 }] : {});
  });
  const response = await onRequest({
    request: request({ ...base, quantity: null, city: '', contactPreference: 'email' }),
    env: { KOMMO_ACCESS_TOKEN: 'test-only-not-a-credential' },
  });
  assert.equal(response.status, 200);
  const note = calls[1][0].params.text;
  assert.match(note, /Ассортимент: Urban Sweatshirts/);
  assert.match(note, /ID ассортимента: urban-sweatshirts/);
  assert.match(note, /Количество: не указано — уточнить у клиента/);
  assert.match(note, /E-mail/);
});
