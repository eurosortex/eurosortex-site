export const locales = ['pl', 'ru', 'uk', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pl';

export const localeConfig: Record<
  Locale,
  { code: string; label: string; path: string; htmlLang: string }
> = {
  pl: { code: 'PL', label: 'Polski', path: '/', htmlLang: 'pl' },
  ru: { code: 'RU', label: 'Русский', path: '/ru/', htmlLang: 'ru' },
  uk: { code: 'UK', label: 'Українська', path: '/uk/', htmlLang: 'uk' },
  en: { code: 'EN', label: 'English', path: '/en/', htmlLang: 'en' },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

