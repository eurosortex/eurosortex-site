import type { Locale } from './locales';

export const legalDocumentKeys = ['privacy', 'electronicServices', 'salesTerms'] as const;

export type LegalDocumentKey = (typeof legalDocumentKeys)[number];

const legalSlugs: Record<Locale, Record<LegalDocumentKey, string>> = {
  pl: {
    privacy: 'polityka-prywatnosci',
    electronicServices: 'regulamin-uslug-elektronicznych',
    salesTerms: 'ogolne-warunki-sprzedazy',
  },
  ru: {
    privacy: 'privacy-policy',
    electronicServices: 'electronic-services-terms',
    salesTerms: 'b2b-sales-terms',
  },
  uk: {
    privacy: 'privacy-policy',
    electronicServices: 'electronic-services-terms',
    salesTerms: 'b2b-sales-terms',
  },
  en: {
    privacy: 'privacy-policy',
    electronicServices: 'electronic-services-terms',
    salesTerms: 'b2b-sales-terms',
  },
};

export function getLegalPath(locale: Locale, document: LegalDocumentKey): string {
  const prefix = locale === 'pl' ? '' : `/${locale}`;
  return `${prefix}/${legalSlugs[locale][document]}/`;
}

export function getLegalSlug(locale: Locale, document: LegalDocumentKey): string {
  return legalSlugs[locale][document];
}

export function getLegalAlternates(document: LegalDocumentKey): Record<Locale, string> {
  return {
    pl: getLegalPath('pl', document),
    ru: getLegalPath('ru', document),
    uk: getLegalPath('uk', document),
    en: getLegalPath('en', document),
  };
}

export function getLegalDocumentFromSlug(
  locale: Locale,
  slug: string,
): LegalDocumentKey | undefined {
  return legalDocumentKeys.find((key) => legalSlugs[locale][key] === slug);
}
