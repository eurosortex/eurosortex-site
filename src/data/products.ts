import type { Locale } from '../config/locales';

export type ProductCategory = 'mix' | 'sweatshirts' | 'children' | 'pants' | 'tops' | 'shoes';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  grade: 1 | 2;
  netPricePlnPerKg: number;
  description: Record<Locale, string>;
  composition?: Record<Locale, string>;
  brandedShareApprox: Record<Locale, string>;
  disposalShareMax?: Record<Locale, string>;
}

const t = (pl: string, ru: string, uk: string, en: string): Record<Locale, string> => ({
  pl,
  ru,
  uk,
  en,
});

export const products: Product[] = [
  {
    id: 'summer-assortment',
    name: 'Summer Assortment',
    category: 'mix',
    grade: 1,
    netPricePlnPerKg: 27.21,
    description: t('Mix odzieży używanej.', 'Микс одежды second-hand.', 'Мікс одягу second-hand.', 'Mixed second-hand clothing.'),
    composition: t('Orientacyjnie: 75% damska, 15% męska, 10% dziecięca.', 'Ориентировочно: 75% женской, 15% мужской, 10% детской.', 'Орієнтовно: 75% жіночого, 15% чоловічого, 10% дитячого.', 'Approx. 75% women, 15% men, 10% children.'),
    brandedShareApprox: t('Średnio ok. 6% ubrań markowych.', 'В среднем около 6% брендовой одежды.', 'У середньому близько 6% брендового одягу.', 'Approx. 6% branded clothing on average.'),
    disposalShareMax: t('Dopuszczalne do 1% do utylizacji.', 'Допускается до 1% на утилизацию.', 'Допускається до 1% на утилізацію.', 'Up to 1% may be unsuitable for resale.'),
  },
  {
    id: 'mix-standart',
    name: 'Mix Standart',
    category: 'mix',
    grade: 2,
    netPricePlnPerKg: 15.5,
    description: t('Mix odzieży i dodatków.', 'Микс одежды и аксессуаров.', 'Мікс одягу й аксесуарів.', 'Mixed clothing and accessories.'),
    composition: t('Orientacyjnie: 65% damska, 15% męska, 10% dziecięca, 5% obuwie, torby, paski i zabawki.', 'Ориентировочно: 65% женской, 15% мужской, 10% детской, 5% обуви, сумок, ремней и игрушек.', 'Орієнтовно: 65% жіночого, 15% чоловічого, 10% дитячого, 5% взуття, сумок, ременів та іграшок.', 'Approx. 65% women, 15% men, 10% children, 5% shoes, bags, belts and toys.'),
    brandedShareApprox: t('Średnio ok. 7% ubrań markowych.', 'В среднем около 7% брендовой одежды.', 'У середньому близько 7% брендового одягу.', 'Approx. 7% branded clothing on average.'),
    disposalShareMax: t('Dopuszczalne do 5% do utylizacji.', 'Допускается до 5% на утилизацию.', 'Допускається до 5% на утилізацію.', 'Up to 5% may be unsuitable for resale.'),
  },
  {
    id: 'sweatshirts-mix',
    name: 'Sweatshirts Mix',
    category: 'sweatshirts',
    grade: 2,
    netPricePlnPerKg: 21.35,
    description: t('Mix bluz damskich i męskich.', 'Микс женских и мужских толстовок.', 'Мікс жіночих і чоловічих світшотів.', 'Mixed women’s and men’s sweatshirts.'),
    composition: t('Orientacyjnie: 60% damskie, 40% męskie.', 'Ориентировочно: 60% женских, 40% мужских.', 'Орієнтовно: 60% жіночих, 40% чоловічих.', 'Approx. 60% women, 40% men.'),
    brandedShareApprox: t('Średnio ok. 12% ubrań markowych.', 'В среднем около 12% брендовой одежды.', 'У середньому близько 12% брендового одягу.', 'Approx. 12% branded clothing on average.'),
  },
  {
    id: 'casual-sweatshirts',
    name: 'Casual Sweatshirts',
    category: 'sweatshirts',
    grade: 2,
    netPricePlnPerKg: 17.91,
    description: t('Mix bluz damskich i męskich.', 'Микс женских и мужских толстовок.', 'Мікс жіночих і чоловічих світшотів.', 'Mixed women’s and men’s sweatshirts.'),
    composition: t('Orientacyjnie: 60% damskie, 40% męskie.', 'Ориентировочно: 60% женских, 40% мужских.', 'Орієнтовно: 60% жіночих, 40% чоловічих.', 'Approx. 60% women, 40% men.'),
    brandedShareApprox: t('Średnio ok. 14% ubrań markowych.', 'В среднем около 14% брендовой одежды.', 'У середньому близько 14% брендового одягу.', 'Approx. 14% branded clothing on average.'),
  },
  {
    id: 'kids-wear',
    name: 'Kids Wear',
    category: 'children',
    grade: 2,
    netPricePlnPerKg: 21.35,
    description: t('Mix odzieży dziecięcej.', 'Микс детской одежды.', 'Мікс дитячого одягу.', 'Mixed children’s clothing.'),
    composition: t('Orientacyjnie: 70% dla dziewczynek, 30% dla chłopców.', 'Ориентировочно: 70% для девочек, 30% для мальчиков.', 'Орієнтовно: 70% для дівчаток, 30% для хлопчиків.', 'Approx. 70% girls, 30% boys.'),
    brandedShareApprox: t('Średnio ok. 5% ubrań markowych.', 'В среднем около 5% брендовой одежды.', 'У середньому близько 5% брендового одягу.', 'Approx. 5% branded clothing on average.'),
  },
  {
    id: 'children-summer',
    name: 'Children Summer',
    category: 'children',
    grade: 1,
    netPricePlnPerKg: 34.44,
    description: t('Letni mix odzieży dziecięcej.', 'Летний микс детской одежды.', 'Літній мікс дитячого одягу.', 'Summer mix of children’s clothing.'),
    composition: t('Orientacyjnie: 70% dla dziewczynek, 30% dla chłopców.', 'Ориентировочно: 70% для девочек, 30% для мальчиков.', 'Орієнтовно: 70% для дівчаток, 30% для хлопчиків.', 'Approx. 70% girls, 30% boys.'),
    brandedShareApprox: t('Średnio ok. 5% ubrań markowych.', 'В среднем около 5% брендовой одежды.', 'У середньому близько 5% брендового одягу.', 'Approx. 5% branded clothing on average.'),
  },
  {
    id: 'sport-pants',
    name: 'Sport Pants',
    category: 'pants',
    grade: 2,
    netPricePlnPerKg: 22.39,
    description: t('Mix spodni dresowych.', 'Микс спортивных брюк.', 'Мікс спортивних штанів.', 'Mixed sports pants.'),
    composition: t('Orientacyjnie: 50% damskie, 50% męskie.', 'Ориентировочно: 50% женских, 50% мужских.', 'Орієнтовно: 50% жіночих, 50% чоловічих.', 'Approx. 50% women, 50% men.'),
    brandedShareApprox: t('Średnio ok. 7% ubrań markowych.', 'В среднем около 7% брендовой одежды.', 'У середньому близько 7% брендового одягу.', 'Approx. 7% branded clothing on average.'),
  },
  {
    id: 'extra-sport-pants',
    name: 'Extra Sport Pants',
    category: 'pants',
    grade: 1,
    netPricePlnPerKg: 25.83,
    description: t('Mix spodni dresowych.', 'Микс спортивных брюк.', 'Мікс спортивних штанів.', 'Mixed sports pants.'),
    composition: t('Orientacyjnie: 50% damskie, 50% męskie.', 'Ориентировочно: 50% женских, 50% мужских.', 'Орієнтовно: 50% жіночих, 50% чоловічих.', 'Approx. 50% women, 50% men.'),
    brandedShareApprox: t('Średnio ok. 13% ubrań markowych.', 'В среднем около 13% брендовой одежды.', 'У середньому близько 13% брендового одягу.', 'Approx. 13% branded clothing on average.'),
  },
  {
    id: 't-shirt-standart',
    name: 'T-shirt Standart',
    category: 'tops',
    grade: 2,
    netPricePlnPerKg: 19.84,
    description: t('Mix T-shirtów damskich i męskich.', 'Микс женских и мужских футболок.', 'Мікс жіночих і чоловічих футболок.', 'Mixed women’s and men’s T-shirts.'),
    composition: t('Orientacyjnie: 80% damskie, 20% męskie.', 'Ориентировочно: 80% женских, 20% мужских.', 'Орієнтовно: 80% жіночих, 20% чоловічих.', 'Approx. 80% women, 20% men.'),
    brandedShareApprox: t('Średnio ok. 5% ubrań markowych.', 'В среднем около 5% брендовой одежды.', 'У середньому близько 5% брендового одягу.', 'Approx. 5% branded clothing on average.'),
  },
  {
    id: 'blouses-mix',
    name: 'Blouses Mix',
    category: 'tops',
    grade: 2,
    netPricePlnPerKg: 19.84,
    description: t('Mix bluzek.', 'Микс блузок.', 'Мікс блузок.', 'Mixed blouses.'),
    brandedShareApprox: t('Średnio ok. 1–2% ubrań markowych.', 'В среднем около 1–2% брендовой одежды.', 'У середньому близько 1–2% брендового одягу.', 'Approx. 1–2% branded clothing on average.'),
  },
  {
    id: 'ladies-blouses',
    name: 'Ladies Blouses',
    category: 'tops',
    grade: 1,
    netPricePlnPerKg: 39.6,
    description: t('Bluzki damskie.', 'Женские блузки.', 'Жіночі блузки.', 'Women’s blouses.'),
    brandedShareApprox: t('Średnio ok. 1–2% ubrań markowych.', 'В среднем около 1–2% брендовой одежды.', 'У середньому близько 1–2% брендового одягу.', 'Approx. 1–2% branded clothing on average.'),
  },
  {
    id: 'season-shoes',
    name: 'Season Shoes',
    category: 'shoes',
    grade: 1,
    netPricePlnPerKg: 51.66,
    description: t('Sezonowe obuwie damskie i męskie.', 'Сезонная женская и мужская обувь.', 'Сезонне жіноче та чоловіче взуття.', 'Seasonal women’s and men’s shoes.'),
    composition: t('Orientacyjnie: 80% damskie, 20% męskie.', 'Ориентировочно: 80% женской, 20% мужской.', 'Орієнтовно: 80% жіночого, 20% чоловічого.', 'Approx. 80% women, 20% men.'),
    brandedShareApprox: t('Średnio ok. 7% obuwia markowego.', 'В среднем около 7% брендовой обуви.', 'У середньому близько 7% брендового взуття.', 'Approx. 7% branded shoes on average.'),
  },
];

export function formatPrice(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'en' ? 'en-GB' : locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

