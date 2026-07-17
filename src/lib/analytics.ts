export type AnalyticsPlacement =
  | 'header'
  | 'hero'
  | 'product_card'
  | 'catalog_help'
  | 'quality_section'
  | 'transport_section'
  | 'final_cta'
  | 'mobile_sticky'
  | 'footer'
  | 'unknown';

type PageLanguage = string;

export type AnalyticsEvent =
  | {
      event: 'whatsapp_click';
      placement: AnalyticsPlacement;
      page_language: PageLanguage;
      product_id?: string;
      product_name?: string;
    }
  | {
      event: 'phone_click';
      placement: AnalyticsPlacement;
      page_language: PageLanguage;
    }
  | {
      event: 'select_item';
      item_id: string;
      item_name: string;
      item_category: string;
      price: number;
      currency: 'PLN';
      page_language: PageLanguage;
    }
  | {
      event: 'catalog_filter';
      filter_key: string;
      filter_label: string;
      page_language: PageLanguage;
    }
  | {
      event: 'language_change';
      language_from: string;
      language_to: string;
      placement: AnalyticsPlacement;
    };

declare global {
  interface Window {
    dataLayer?: unknown[];
    __eurosortexAnalyticsInitialized?: boolean;
  }
}

export function pushAnalyticsEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function getPageLanguage(): string {
  return document.documentElement.lang || 'unknown';
}

function getPlacement(element: HTMLElement): AnalyticsPlacement {
  return (element.dataset.analyticsPlacement || 'unknown') as AnalyticsPlacement;
}

function handleAnalyticsClick(event: MouseEvent): void {
  if (!(event.target instanceof Element)) return;

  const pageLanguage = getPageLanguage();
  const whatsappLink = event.target.closest<HTMLAnchorElement>(
    'a[data-analytics-whatsapp], a[href*="wa.me/"]',
  );

  if (whatsappLink) {
    const productId = whatsappLink.dataset.analyticsProductId;
    const productName = whatsappLink.dataset.analyticsProductName;

    pushAnalyticsEvent({
      event: 'whatsapp_click',
      placement: getPlacement(whatsappLink),
      page_language: pageLanguage,
      ...(productId ? { product_id: productId } : {}),
      ...(productName ? { product_name: productName } : {}),
    });

    const productCategory = whatsappLink.dataset.analyticsProductCategory;
    const productPrice = Number(whatsappLink.dataset.analyticsProductPrice);

    if (productId && productName && productCategory && Number.isFinite(productPrice)) {
      pushAnalyticsEvent({
        event: 'select_item',
        item_id: productId,
        item_name: productName,
        item_category: productCategory,
        price: productPrice,
        currency: 'PLN',
        page_language: pageLanguage,
      });
    }
  }

  const phoneLink = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
  if (phoneLink) {
    pushAnalyticsEvent({
      event: 'phone_click',
      placement: getPlacement(phoneLink),
      page_language: pageLanguage,
    });
  }

  const filterButton = event.target.closest<HTMLButtonElement>('[data-analytics-filter-key]');
  if (filterButton) {
    pushAnalyticsEvent({
      event: 'catalog_filter',
      filter_key: filterButton.dataset.analyticsFilterKey || 'unknown',
      filter_label: filterButton.dataset.analyticsFilterLabel || '',
      page_language: pageLanguage,
    });
  }

  const languageLink = event.target.closest<HTMLAnchorElement>('[data-analytics-language-to]');
  const languageTo = languageLink?.dataset.analyticsLanguageTo;

  if (languageLink && languageTo && languageTo !== pageLanguage) {
    pushAnalyticsEvent({
      event: 'language_change',
      language_from: pageLanguage,
      language_to: languageTo,
      placement: getPlacement(languageLink),
    });
  }
}

export function initializeAnalyticsTracking(): void {
  if (typeof window === 'undefined' || window.__eurosortexAnalyticsInitialized) return;
  window.__eurosortexAnalyticsInitialized = true;
  document.addEventListener('click', handleAnalyticsClick);
}
