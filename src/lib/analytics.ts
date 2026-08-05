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
      contact_method: 'whatsapp';
      page_language: PageLanguage;
      product_id?: string;
      product_name?: string;
    }
  | {
      event: 'phone_click';
      placement: AnalyticsPlacement;
      contact_method: 'phone';
      page_language: PageLanguage;
    }
  | {
      event: 'email_click';
      placement: AnalyticsPlacement;
      contact_method: 'email';
      page_language: PageLanguage;
    }
  | {
      event: 'select_item';
      item_id: string;
      item_name: string;
      item_category: string;
      price: number;
      currency: 'PLN';
      value: number;
      item_list_id: 'catalog';
      item_list_name: 'Product catalog';
      items: Array<{
        item_id: string;
        item_name: string;
        item_category: string;
        price: number;
        quantity: 1;
      }>;
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
    }
  | {
      event: 'section_view';
      section_id: string;
      page_language: PageLanguage;
    }
  | {
      event: 'scroll_depth';
      percent_scrolled: 25 | 50 | 75 | 90;
      page_language: PageLanguage;
    }
  | {
      event: 'outbound_click';
      link_domain: string;
      placement: AnalyticsPlacement;
      page_language: PageLanguage;
    };

declare global {
  interface Window {
    dataLayer?: unknown[];
    __eurosortexAnalyticsInitialized?: boolean;
    __eurosortexConsentChoice: { analytics: boolean; advertising: boolean } | null;
    updateGoogleConsent?: (
      selection: { analytics: boolean; advertising: boolean },
      source?: string,
    ) => void;
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
      contact_method: 'whatsapp',
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
        value: productPrice,
        item_list_id: 'catalog',
        item_list_name: 'Product catalog',
        items: [
          {
            item_id: productId,
            item_name: productName,
            item_category: productCategory,
            price: productPrice,
            quantity: 1,
          },
        ],
        page_language: pageLanguage,
      });
    }
  }

  const phoneLink = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
  if (phoneLink) {
    pushAnalyticsEvent({
      event: 'phone_click',
      placement: getPlacement(phoneLink),
      contact_method: 'phone',
      page_language: pageLanguage,
    });
  }

  const emailLink = event.target.closest<HTMLAnchorElement>('a[href^="mailto:"]');
  if (emailLink) {
    pushAnalyticsEvent({
      event: 'email_click',
      placement: getPlacement(emailLink),
      contact_method: 'email',
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

  const outboundLink = event.target.closest<HTMLAnchorElement>('a[href^="http"]');
  if (outboundLink && !whatsappLink) {
    try {
      const url = new URL(outboundLink.href);
      if (url.origin !== window.location.origin) {
        pushAnalyticsEvent({
          event: 'outbound_click',
          link_domain: url.hostname,
          placement: getPlacement(outboundLink),
          page_language: pageLanguage,
        });
      }
    } catch (_error) {
      // Ignore malformed links: analytics must never interrupt navigation.
    }
  }
}

function initializeSectionTracking(): void {
  if (!('IntersectionObserver' in window)) return;

  const observed = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (!entry.isIntersecting || !section.id || observed.has(section.id)) return;

        observed.add(section.id);
        pushAnalyticsEvent({
          event: 'section_view',
          section_id: section.id,
          page_language: getPageLanguage(),
        });
        observer.unobserve(section);
      });
    },
    { threshold: 0.45 },
  );

  document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => {
    observer.observe(section);
  });
}

function initializeScrollDepthTracking(): void {
  const milestones = [25, 50, 75, 90] as const;
  const reached = new Set<number>();
  let ticking = false;

  const measure = () => {
    ticking = false;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const percent = Math.round((window.scrollY / scrollable) * 100);
    milestones.forEach((milestone) => {
      if (percent < milestone || reached.has(milestone)) return;

      reached.add(milestone);
      pushAnalyticsEvent({
        event: 'scroll_depth',
        percent_scrolled: milestone,
        page_language: getPageLanguage(),
      });
    });
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    },
    { passive: true },
  );
  measure();
}

export function initializeAnalyticsTracking(): void {
  if (typeof window === 'undefined' || window.__eurosortexAnalyticsInitialized) return;
  window.__eurosortexAnalyticsInitialized = true;
  document.addEventListener('click', handleAnalyticsClick);
  initializeSectionTracking();
  initializeScrollDepthTracking();
}
