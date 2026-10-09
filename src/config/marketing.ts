import type { Locale } from './locales';
import type { ProductCategory } from '../data/products';

const assortmentSegments: Record<Locale, string> = {
  pl: 'asortyment',
  ru: 'assortiment',
  uk: 'asortyment',
  en: 'wholesale-assortment',
};

const categorySlugs: Record<Locale, Record<ProductCategory, string>> = {
  pl: {
    mix: 'miksy-odziezy-uzywanej',
    sweatshirts: 'bluzy-uzywane',
    children: 'odziez-dziecieca-uzywana',
    sweaters: 'swetry-uzywane',
    outerwear: 'odziez-wierzchnia-uzywana',
    shoes: 'obuwie-uzywane',
  },
  ru: {
    mix: 'miksy-odezhdy',
    sweatshirts: 'tolstovki',
    children: 'detskaya-odezhda',
    sweaters: 'svitery',
    outerwear: 'verhnyaya-odezhda',
    shoes: 'obuv',
  },
  uk: {
    mix: 'miksy-odyagu',
    sweatshirts: 'svitshoty',
    children: 'dytyachyy-odyag',
    sweaters: 'svetry',
    outerwear: 'verkhniy-odyag',
    shoes: 'vzuttya',
  },
  en: {
    mix: 'clothing-mixes',
    sweatshirts: 'sweatshirts',
    children: 'childrens-clothing',
    sweaters: 'sweaters',
    outerwear: 'outerwear',
    shoes: 'footwear',
  },
};

const aboutSlugs: Record<Locale, string> = {
  pl: 'o-nas',
  ru: 'o-kompanii',
  uk: 'pro-nas',
  en: 'about-us',
};

const prefix = (locale: Locale) => (locale === 'pl' ? '' : `/${locale}`);

export function getProductPath(locale: Locale, productId: string): string {
  return `${prefix(locale)}/${assortmentSegments[locale]}/${productId}/`;
}

export function getAssortmentPath(locale: Locale): string {
  return `${prefix(locale)}/${assortmentSegments[locale]}/`;
}

export function getAssortmentAlternates(): Record<Locale, string> {
  return {
    pl: getAssortmentPath('pl'),
    ru: getAssortmentPath('ru'),
    uk: getAssortmentPath('uk'),
    en: getAssortmentPath('en'),
  };
}

export function getCategoryPath(locale: Locale, category: ProductCategory): string {
  return `${getAssortmentPath(locale)}${categorySlugs[locale][category]}/`;
}

export function getCategoryAlternates(category: ProductCategory): Record<Locale, string> {
  return {
    pl: getCategoryPath('pl', category),
    ru: getCategoryPath('ru', category),
    uk: getCategoryPath('uk', category),
    en: getCategoryPath('en', category),
  };
}

export function getCategorySlug(locale: Locale, category: ProductCategory): string {
  return categorySlugs[locale][category];
}

export function getProductAlternates(productId: string): Record<Locale, string> {
  return {
    pl: getProductPath('pl', productId),
    ru: getProductPath('ru', productId),
    uk: getProductPath('uk', productId),
    en: getProductPath('en', productId),
  };
}

export function getAssortmentSegment(locale: Locale): string {
  return assortmentSegments[locale];
}

export function getAboutPath(locale: Locale): string {
  return `${prefix(locale)}/${aboutSlugs[locale]}/`;
}

export function getAboutAlternates(): Record<Locale, string> {
  return {
    pl: getAboutPath('pl'),
    ru: getAboutPath('ru'),
    uk: getAboutPath('uk'),
    en: getAboutPath('en'),
  };
}

export function getReviewsPath(locale: Locale): string {
  const slugs = { pl: 'opinie', ru: 'otzyvy', uk: 'vidhuky', en: 'reviews' };
  return `${prefix(locale)}/${slugs[locale]}/`;
}
export function getReviewsAlternates(): Record<Locale, string> {
  return { pl: getReviewsPath('pl'), ru: getReviewsPath('ru'), uk: getReviewsPath('uk'), en: getReviewsPath('en') };
}
