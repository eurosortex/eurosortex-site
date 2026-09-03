const JSON_HEADERS = {
  'cache-control': 'no-store',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
};

const DEFAULT_KOMMO_SUBDOMAIN = 'anydayspl';
const DEFAULT_PIPELINE_ID = 14241439;
const MAX_BODY_LENGTH = 12_000;
const ATTRIBUTION_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id',
  'gclid', 'wbraid', 'gbraid', 'fbclid', 'msclkid', 'ttclid',
];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function positiveInteger(value) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

function contactFields(reply) {
  if (reply.includes('@')) {
    return [{ field_code: 'EMAIL', values: [{ value: reply, enum_code: 'WORK' }] }];
  }

  return [{ field_code: 'PHONE', values: [{ value: reply, enum_code: 'MOB' }] }];
}

function validReply(value) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone = /^[+()\d\s.-]{6,30}$/;
  return email.test(value) || phone.test(value);
}

function cleanAttributionTouch(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;

  const touch = {
    landing_page: clean(value.landing_page, 500),
    referrer: clean(value.referrer, 500),
    captured_at: clean(value.captured_at, 50),
  };

  ATTRIBUTION_KEYS.forEach((key) => {
    const field = clean(value[key], key.endsWith('clid') || key === 'wbraid' || key === 'gbraid' ? 500 : 300);
    if (field) touch[key] = field;
  });

  return Object.values(touch).some(Boolean) ? touch : undefined;
}

function attributionLines(label, touch) {
  if (!touch) return [`${label}: —`];

  return [
    `${label}:`,
    `  Страница входа: ${touch.landing_page || '—'}`,
    `  Referrer: ${touch.referrer || '—'}`,
    ...ATTRIBUTION_KEYS
      .filter((key) => touch[key])
      .map((key) => `  ${key}: ${touch[key]}`),
    `  Зафиксировано: ${touch.captured_at || '—'}`,
  ];
}

async function kommoRequest(url, token, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

async function handleInquiry({ request, env }) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');

  if (origin && origin !== requestUrl.origin) {
    return json({ ok: false, error: 'origin_not_allowed' }, 403);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_LENGTH) {
    return json({ ok: false, error: 'payload_too_large' }, 413);
  }

  let rawBody;
  try {
    rawBody = await request.text();
  } catch {
    return json({ ok: false, error: 'invalid_request' }, 400);
  }

  if (rawBody.length > MAX_BODY_LENGTH) {
    return json({ ok: false, error: 'payload_too_large' }, 413);
  }

  let input;
  try {
    const contentType = request.headers.get('content-type') || '';
    input = contentType.includes('application/json')
      ? JSON.parse(rawBody)
      : Object.fromEntries(new URLSearchParams(rawBody));
  } catch {
    return json({ ok: false, error: 'invalid_payload' }, 400);
  }

  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return json({ ok: false, error: 'invalid_payload' }, 400);
  }

  // Honeypot: bots receive a neutral success response without creating a lead.
  if (clean(input.website, 120)) {
    return json({ ok: true });
  }

  const name = clean(input.name, 120);
  const reply = clean(input.reply, 160);
  const product = clean(input.product, 160);
  const productId = clean(input.productId, 160);
  const message = clean(input.message, 2_000);
  const locale = ['pl', 'ru', 'uk', 'en'].includes(input.locale) ? input.locale : 'pl';
  const pagePath = clean(input.pagePath, 300);
  const quantity = Number(input.quantity);
  const firstTouch = cleanAttributionTouch(input.attribution?.first_touch);
  const lastTouch = cleanAttributionTouch(input.attribution?.last_touch);

  if (!name || !validReply(reply) || !product || !Number.isFinite(quantity) || quantity < 20 || quantity > 100_000) {
    return json({ ok: false, error: 'validation_failed' }, 400);
  }

  const token = clean(env.KOMMO_ACCESS_TOKEN, 8_000);
  const subdomain = clean(env.KOMMO_SUBDOMAIN, 80) || DEFAULT_KOMMO_SUBDOMAIN;
  const pipelineId = positiveInteger(env.KOMMO_PIPELINE_ID) || DEFAULT_PIPELINE_ID;
  const statusId = positiveInteger(env.KOMMO_STATUS_ID);

  if (!token || !/^[a-z0-9-]+$/i.test(subdomain)) {
    return json({ ok: false, error: 'service_not_configured' }, 503);
  }

  const baseUrl = `https://${subdomain}.kommo.com/api/v4`;
  const lead = {
    name: `Website · ${product}`,
    pipeline_id: pipelineId,
    ...(statusId ? { status_id: statusId } : {}),
    _embedded: {
      contacts: [
        {
          name,
          custom_fields_values: contactFields(reply),
        },
      ],
      tags: [{ name: 'eurosortex.com' }, { name: `site-${locale}` }],
    },
  };

  let leadResponse;
  try {
    leadResponse = await kommoRequest(`${baseUrl}/leads/complex`, token, [lead]);
  } catch {
    return json({ ok: false, error: 'kommo_unavailable' }, 502);
  }

  if (!leadResponse.ok) {
    console.error('Kommo lead creation failed', leadResponse.status);
    return json({ ok: false, error: 'kommo_rejected_request' }, 502);
  }

  const createdLeads = await leadResponse.json();
  const leadId = positiveInteger(createdLeads?.[0]?.id);

  if (!leadId) {
    return json({ ok: false, error: 'kommo_invalid_response' }, 502);
  }

  const noteText = [
    'Заявка с eurosortex.com',
    `Страница: ${pagePath || '/'}`,
    `Язык: ${locale.toUpperCase()}`,
    `Ассортимент: ${product}`,
    `ID ассортимента: ${productId || '—'}`,
    `Имя / компания: ${name}`,
    `Контакт: ${reply}`,
    `Количество: ${quantity} кг`,
    '',
    'Сообщение:',
    message || '—',
    '',
    'Маркетинговая атрибуция:',
    ...attributionLines('Первое касание', firstTouch),
    ...attributionLines('Последнее касание', lastTouch),
  ].join('\n');

  try {
    const noteResponse = await kommoRequest(`${baseUrl}/leads/${leadId}/notes`, token, [
      { note_type: 'common', params: { text: noteText } },
    ]);
    if (!noteResponse.ok) console.error('Kommo note creation failed', noteResponse.status);
  } catch {
    // The lead is already safely created; a missing note should not invite a duplicate resubmission.
    console.error('Kommo note creation failed: network error');
  }

  return json({ ok: true });
}

export function onRequest(context) {
  if (context.request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }

  return handleInquiry(context);
}
