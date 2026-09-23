import type { Locale } from '../config/locales';

export const productCategories = ['mix', 'sweatshirts', 'children', 'sweaters', 'outerwear', 'shoes'] as const;
export type ProductCategory = (typeof productCategories)[number];

export interface Product {
  id: string;
  name: string;
  image?: string;
  category: ProductCategory;
  netPricePlnPerKg: number;
  quality: Record<Locale, string>;
  composition?: Record<Locale, string>;
  luxuryShareApprox: number;
  disposalShareMax?: number;
  description: Record<Locale, string>;
  details: Record<Locale, string>;
}

const t = (pl: string, ru: string, uk: string, en: string): Record<Locale, string> => ({ pl, ru, uk, en });

export const products: Product[] = [
  {
    id: 'urban-sweatshirts', name: 'Urban Sweatshirts', category: 'sweatshirts', image: '/images/catalog/urban-sweatshirts.jpg', netPricePlnPerKg: 10.56,
    quality: t('Dobra jakość', 'Хорошее качество', 'Хороша якість', 'Good quality'),
    composition: t('Około 80% damskie, 20% męskie.', 'Около 80% женских, 20% мужских.', 'Близько 80% жіночих, 20% чоловічих.', 'Approx. 80% women’s, 20% men’s.'),
    luxuryShareApprox: 10,
    description: t('Bluzy w miejskim stylu.', 'Толстовки в городском стиле.', 'Світшоти в міському стилі.', 'Urban-style sweatshirts.'),
    details: t('Pozycja z bluzami do codziennego asortymentu sklepu. O aktualny skład, jakość i cenę partii zapytaj managera.', 'Толстовки для повседневного ассортимента магазина. Актуальный состав, качество и цену партии уточните у менеджера.', 'Світшоти для повсякденного асортименту магазину. Актуальний склад, якість і ціну партії уточніть у менеджера.', 'A sweatshirt line for an everyday shop assortment. Ask the manager about the current batch’s contents, quality and price.'),
  },
  {
    id: 'winter-assortment', name: 'Winter Assortment', category: 'mix', image: '/images/catalog/winter-assortment.jpg', netPricePlnPerKg: 26.40,
    quality: t('Wysoka jakość', 'Высокое качество', 'Висока якість', 'High quality'),
    composition: t('Około 75% damska, 15% męska, 10% dziecięca.', 'Около 75% женской, 15% мужской, 10% детской.', 'Близько 75% жіночого, 15% чоловічого, 10% дитячого.', 'Approx. 75% women’s, 15% men’s, 10% children’s.'),
    luxuryShareApprox: 6, disposalShareMax: 1,
    description: t('Zimowy asortyment odzieży.', 'Зимний ассортимент одежды.', 'Зимовий асортимент одягу.', 'Winter clothing assortment.'),
    details: t('Sezonowa pozycja na chłodniejsze miesiące. Dokładny skład i dostępność potwierdzamy dla konkretnej partii.', 'Сезонная позиция для холодных месяцев. Точный состав и наличие подтверждаем для конкретной партии.', 'Сезонна позиція для холодних місяців. Точний склад і наявність підтверджуємо для конкретної партії.', 'A seasonal line for colder months. We confirm exact contents and availability for each batch.'),
  },
  {
    id: 'mix-standart', name: 'Mix Standart', category: 'mix', image: '/images/catalog/mix-standart.jpg', netPricePlnPerKg: 14.08,
    quality: t('Średnia jakość', 'Среднее качество', 'Середня якість', 'Medium quality'),
    composition: t('Orientacyjnie: 65% damska, 15% męska, 10% dziecięca, 5% obuwie, torby, paski i zabawki.', 'Ориентировочно: 65% женской, 15% мужской, 10% детской, 5% обуви, сумок, ремней и игрушек.', 'Орієнтовно: 65% жіночого, 15% чоловічого, 10% дитячого, 5% взуття, сумок, ременів та іграшок.', 'Approx. 65% women’s, 15% men’s, 10% children’s, 5% shoes, bags, belts and toys.'),
    luxuryShareApprox: 7, disposalShareMax: 5,
    description: t('Uniwersalny mix odzieży.', 'Универсальный микс одежды.', 'Універсальний мікс одягу.', 'General clothing mix.'),
    details: t('Mix do uzupełniania różnych działów sklepu. Skład, jakość i cenę dostępnej partii potwierdza manager.', 'Микс для пополнения разных отделов магазина. Состав, качество и цену доступной партии подтверждает менеджер.', 'Мікс для поповнення різних відділів магазину. Склад, якість і ціну доступної партії підтверджує менеджер.', 'A mix for restocking several shop sections. The manager confirms the current batch’s contents, quality and price.'),
  },
  {
    id: 'kids-wear', name: 'Kids Wear', category: 'children', image: '/images/catalog/kids-wear.jpg', netPricePlnPerKg: 22.88,
    quality: t('Średnia jakość', 'Среднее качество', 'Середня якість', 'Medium quality'),
    composition: t('Około 70% dla dziewczynek, 30% dla chłopców.', 'Около 70% для девочек, 30% для мальчиков.', 'Близько 70% для дівчаток, 30% для хлопчиків.', 'Approx. 70% girls’, 30% boys’.'),
    luxuryShareApprox: 5,
    description: t('Odzież dziecięca.', 'Детская одежда.', 'Дитячий одяг.', 'Children’s clothing.'),
    details: t('Pozycja do działu dziecięcego. Rozmiary, rodzaje ubrań i dostępność zależą od aktualnej partii.', 'Позиция для детского отдела. Размеры, виды одежды и наличие зависят от текущей партии.', 'Позиція для дитячого відділу. Розміри, види одягу й наявність залежать від поточної партії.', 'A line for the children’s section. Sizes, garment types and availability depend on the current batch.'),
  },
  {
    id: 'men-sweaters', name: 'Men Sweaters', category: 'sweaters', image: '/images/catalog/men-sweaters.jpg', netPricePlnPerKg: 14.08,
    quality: t('Średnia jakość', 'Среднее качество', 'Середня якість', 'Medium quality'),
    luxuryShareApprox: 11,
    description: t('Swetry męskie.', 'Мужские свитеры.', 'Чоловічі светри.', 'Men’s sweaters.'),
    details: t('Swetry do męskiego działu sklepu. Aktualne fasony, skład i cenę partii potwierdzamy przed zamówieniem.', 'Свитеры для мужского отдела магазина. Актуальные модели, состав и цену партии подтверждаем до заказа.', 'Светри для чоловічого відділу магазину. Актуальні моделі, склад і ціну партії підтверджуємо до замовлення.', 'Sweaters for a menswear section. We confirm current styles, contents and price before ordering.'),
  },
  {
    id: 'ladies-sweaters', name: 'Ladies Sweaters', category: 'sweaters', image: '/images/catalog/ladies-sweaters.jpg', netPricePlnPerKg: 8.80,
    quality: t('Średnia jakość', 'Среднее качество', 'Середня якість', 'Medium quality'),
    luxuryShareApprox: 10,
    description: t('Swetry damskie.', 'Женские свитеры.', 'Жіночі светри.', 'Women’s sweaters.'),
    details: t('Swetry i dzianiny do działu damskiego. Dostępne fasony, jakość i cenę potwierdzamy dla aktualnej partii.', 'Свитеры и трикотаж для женского отдела. Доступные модели, качество и цену подтверждаем для текущей партии.', 'Светри й трикотаж для жіночого відділу. Доступні моделі, якість і ціну підтверджуємо для поточної партії.', 'Sweaters and knitwear for a womenswear section. We confirm available styles, quality and price for the current batch.'),
  },
  {
    id: 'classic-outwear', name: 'Classic Outwear', category: 'outerwear', image: '/images/catalog/classic-outwear.jpg', netPricePlnPerKg: 19.36,
    quality: t('Jakość do potwierdzenia dla partii', 'Качество уточняется для партии', 'Якість уточнюється для партії', 'Quality confirmed per batch'),
    composition: t('Około 60% kurtki męskie, 40% damskie.', 'Около 60% мужских курток, 40% женских.', 'Близько 60% чоловічих курток, 40% жіночих.', 'Approx. 60% men’s jackets, 40% women’s.'),
    luxuryShareApprox: 10,
    description: t('Klasyczna odzież wierzchnia.', 'Классическая верхняя одежда.', 'Класичний верхній одяг.', 'Classic outerwear.'),
    details: t('Mix kurtek do oferty sezonowej. O aktualny wybór i warunki zakupu zapytaj managera.', 'Микс курток для сезонного ассортимента. Актуальный выбор и условия покупки уточните у менеджера.', 'Мікс курток для сезонного асортименту. Актуальний вибір і умови купівлі уточніть у менеджера.', 'A jacket mix for a seasonal assortment. Ask the manager about current selection and purchase terms.'),
  },
  {
    id: 'season-shoes', name: 'Season Shoes', category: 'shoes', image: '/images/catalog/season-shoes.jpg', netPricePlnPerKg: 45.76,
    quality: t('Wysoka jakość', 'Высокое качество', 'Висока якість', 'High quality'),
    composition: t('Około 80% damskie, 20% męskie.', 'Около 80% женской, 20% мужской.', 'Близько 80% жіночого, 20% чоловічого.', 'Approx. 80% women’s, 20% men’s.'),
    luxuryShareApprox: 7,
    description: t('Obuwie sezonowe.', 'Сезонная обувь.', 'Сезонне взуття.', 'Seasonal footwear.'),
    details: t('Obuwie do sezonowej ekspozycji. Rozmiary, modele, jakość i cenę potwierdzamy dla dostępnej partii.', 'Обувь для сезонной выкладки. Размеры, модели, качество и цену подтверждаем для доступной партии.', 'Взуття для сезонної викладки. Розміри, моделі, якість і ціну підтверджуємо для доступної партії.', 'Footwear for a seasonal display. We confirm sizes, styles, quality and price for the available batch.'),
  },
];

export function formatPrice(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'en' ? 'en-GB' : locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
