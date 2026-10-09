import { getLeadAttribution, pushAnalyticsEvent } from './analytics';

document.querySelectorAll<HTMLFormElement>('[data-inquiry-form]').forEach((form) => {
  if (form.dataset.inquiryBound) return;
  form.dataset.inquiryBound = 'true';
  const reply = form.querySelector<HTMLInputElement>('[name="reply"]');
  const replyModes = form.querySelectorAll<HTMLInputElement>('[data-reply-mode]');
  const replyDrafts: Record<string, string> = { tel: '', email: '' };
  let activeMode = 'tel';
  const productChoices = form.querySelectorAll<HTMLInputElement>('[name="products"]');
  const productHelp = form.querySelector<HTMLInputElement>('[name="productHelp"]');
  const quantity = form.querySelector<HTMLInputElement>('[name="quantity"]');
  const updateQuantityMinimum = () => {
    if (!quantity || form.querySelector<HTMLInputElement>('[name="quantityScope"]')?.value !== 'total') return;
    const selectedCount = Array.from(productChoices).filter((item) => item.checked).length;
    quantity.min = String(50 * Math.max(1, selectedCount));
  };
  const selectionStatus = form.querySelector<HTMLElement>('[data-selected-products]');
  const updateSelectionStatus = () => {
    if (!selectionStatus || selectionStatus.hidden) return;
    const labels = Array.from(productChoices).filter((item) => item.checked).map((item) => item.closest('label')?.textContent?.trim() || item.value);
    selectionStatus.hidden = labels.length === 0;
    selectionStatus.textContent = `${form.dataset.selectionPrefix} ${labels.join(', ')}. ${form.dataset.selectionSuffix}`;
  };
  productChoices.forEach((choice) => choice.addEventListener('change', () => {
    if (productHelp) productHelp.checked = !Array.from(productChoices).some((item) => item.checked);
    updateQuantityMinimum();
    updateSelectionStatus();
  }));
  productHelp?.addEventListener('change', () => {
    if (productHelp.checked) productChoices.forEach((choice) => { choice.checked = false; });
    updateQuantityMinimum();
    updateSelectionStatus();
  });
  document.querySelectorAll<HTMLAnchorElement>('[data-inquire-product]').forEach((link) => {
    const choice = Array.from(productChoices).find((item) => item.dataset.productId === link.dataset.inquireProduct);
    if (!choice) return;
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      choice.checked = true;
      if (selectionStatus) selectionStatus.hidden = false;
      choice.dispatchEvent(new Event('change', { bubbles: true }));
      form.querySelector<HTMLInputElement>('[name="name"]')?.focus({ preventScroll: true });
      form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    });
  });
  replyModes.forEach((radio) => radio.addEventListener('change', () => {
    if (!reply || !radio.checked) return;
    replyDrafts[activeMode] = reply.value;
    activeMode = radio.value === 'email' ? 'email' : 'tel';
    reply.type = activeMode;
    reply.setAttribute('aria-label', (radio.value === 'whatsapp' ? form.dataset.whatsappLabel : activeMode === 'email' ? form.dataset.emailLabel : form.dataset.phoneLabel) ?? '');
    reply.inputMode = activeMode;
    reply.autocomplete = activeMode === 'email' ? 'email' : 'tel';
    reply.placeholder = activeMode === 'email' ? 'jan@sklep.pl' : '+48 123 456 789';
    reply.value = replyDrafts[activeMode];
    reply.setCustomValidity('');
    reply.focus();
  }));
  reply?.addEventListener('input', () => reply.setCustomValidity(''));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (reply && form.dataset.replyError) {
      const value = reply.value.trim();
      const valid = reply.type === 'email'
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        : /^[+()\d\s.-]{6,30}$/.test(value) && value.replace(/\D/g, '').length >= 6;
      if (!valid) {
        reply.setCustomValidity(form.dataset.replyError);
        reply.reportValidity();
        return;
      }
    }
    const data = new FormData(form);
    const submit = form.querySelector<HTMLButtonElement>('.form-submit');
    const submitCopy = form.querySelector<HTMLElement>('[data-submit-copy]');
    const status = form.querySelector<HTMLElement>('[data-form-status]');

    if (!submit || !submitCopy || !status || submit.disabled) return;

    submit.disabled = true;
    submitCopy.textContent = form.dataset.sendingLabel ?? 'Sending…';
    form.setAttribute('aria-busy', 'true');
    status.hidden = false;
    status.dataset.state = 'pending';
    status.textContent = form.dataset.sendingLabel ?? 'Sending…';

    const selectedProducts = Array.from(productChoices).filter((item) => item.checked).map((item) => ({ name: item.value, id: item.dataset.productId ?? '' }));
    const payload = {
      product: productChoices.length ? selectedProducts.map((item) => item.name).join(', ') || 'Do ustalenia' : String(data.get('product') ?? ''),
      ...(productChoices.length ? { products: selectedProducts } : {}),
      contactPreference: String(data.get('replyType') ?? ''),
      quantityScope: String(data.get('quantityScope') ?? ''),
      productId: productChoices.length ? selectedProducts.map((item) => item.id).join(', ') : form.querySelector<HTMLSelectElement>('[data-product-select]')?.selectedOptions[0]?.dataset.productId ?? String(data.get('productId') ?? ''),
      locale: String(data.get('locale') ?? ''),
      website: String(data.get('website') ?? ''),
      name: String(data.get('name') ?? ''),
      reply: String(data.get('reply') ?? ''),
      quantity: String(data.get('quantity') ?? '').trim() === '' ? null : Number(data.get('quantity')),
      message: String(data.get('message') ?? ''),
      city: String(data.get('city') ?? ''),
      pagePath: window.location.pathname,
      attribution: getLeadAttribution(),
    };

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) throw new Error('Enquiry request failed');

      pushAnalyticsEvent({
        event: 'generate_lead',
        form_id: 'product_enquiry',
        placement: form.dataset.inquiryPlacement === 'final_cta' ? 'final_cta' : 'product_contact',
        page_language: document.documentElement.lang || payload.locale,
        product_id: payload.productId,
        product_name: payload.product,
      });
      form.reset();
      updateQuantityMinimum();
      if (selectionStatus) selectionStatus.hidden = true;
      if (reply && replyModes.length) {
        activeMode = 'tel';
        replyDrafts.tel = '';
        replyDrafts.email = '';
        reply.type = 'tel';
        reply.inputMode = 'tel';
        reply.autocomplete = 'tel';
        reply.placeholder = '+48 123 456 789';
        reply.setAttribute('aria-label', form.dataset.whatsappLabel ?? '');
      }
      form.querySelector<HTMLDetailsElement>('[data-inquiry-details]')?.removeAttribute('open');
      status.dataset.state = 'success';
      status.textContent = form.dataset.successLabel ?? 'Thank you! Your enquiry has been sent.';
    } catch {
      status.dataset.state = 'error';
      status.textContent = form.dataset.errorLabel ?? 'We could not send your enquiry. Please try again.';
    } finally {
      submit.disabled = false;
      submitCopy.textContent = form.dataset.submitLabel ?? 'Send enquiry';
      form.removeAttribute('aria-busy');
    }
  });
});
