import type { Locale } from '../config/locales';

export type ProductCategory = 'mix' | 'sweatshirts' | 'children' | 'pants' | 'tops' | 'shoes';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: ProductCategory;
  grade: 1 | 2;
  netPricePlnPerKg: number;
  description: Record<Locale, string>;
  details: Record<Locale, string>;
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
    image: '/images/catalog/summer-assortment.jpg',
    category: 'mix',
    grade: 1,
    netPricePlnPerKg: 27.21,
    description: t('Mix odzieży używanej.', 'Микс одежды second-hand.', 'Мікс одягу second-hand.', 'Mixed second-hand clothing.'),
    details: t('Sezonowa partia do szybkiego uzupełnienia kilku działów sklepu jednocześnie. Przewaga odzieży damskiej ułatwia zbudowanie szerokiej letniej ekspozycji, a domieszka modeli męskich i dziecięcych pozwala przetestować popyt bez zamawiania osobnych miksów.', 'Сезонная партия для быстрого пополнения сразу нескольких отделов магазина. Преобладание женской одежды помогает собрать широкую летнюю выкладку, а мужские и детские вещи позволяют проверить спрос без заказа отдельных миксов.', 'Сезонна партія для швидкого поповнення одразу кількох відділів магазину. Перевага жіночого одягу допомагає створити широку літню викладку, а чоловічі й дитячі речі дають змогу перевірити попит без окремих міксів.', 'A seasonal batch for restocking several shop departments at once. The strong women’s share supports a broad summer display, while men’s and children’s pieces let retailers test demand without buying separate mixes.'),
    composition: t('Orientacyjnie: 75% damska, 15% męska, 10% dziecięca.', 'Ориентировочно: 75% женской, 15% мужской, 10% детской.', 'Орієнтовно: 75% жіночого, 15% чоловічого, 10% дитячого.', 'Approx. 75% women, 15% men, 10% children.'),
    brandedShareApprox: t('Średnio ok. 6% ubrań markowych.', 'В среднем около 6% брендовой одежды.', 'У середньому близько 6% брендового одягу.', 'Approx. 6% branded clothing on average.'),
    disposalShareMax: t('Dopuszczalne do 1% do utylizacji.', 'Допускается до 1% на утилизацию.', 'Допускається до 1% на утилізацію.', 'Up to 1% may be unsuitable for resale.'),
  },
  {
    id: 'mix-standart',
    name: 'Mix Standart',
    image: '/images/catalog/mix-standart.jpg',
    category: 'mix',
    grade: 2,
    netPricePlnPerKg: 15.5,
    description: t('Mix odzieży i dodatków.', 'Микс одежды и аксессуаров.', 'Мікс одягу й аксесуарів.', 'Mixed clothing and accessories.'),
    details: t('Ekonomiczny mix do sklepów nastawionych na szeroki wybór i regularną rotację towaru. Połączenie odzieży, obuwia i dodatków pozwala uzupełnić ekspozycję w różnych strefach cenowych z jednej partii.', 'Экономичный микс для магазинов с широким выбором и регулярной ротацией товара. Сочетание одежды, обуви и аксессуаров позволяет пополнить несколько ценовых зон одной партией.', 'Економний мікс для магазинів із широким вибором і регулярною ротацією товару. Поєднання одягу, взуття та аксесуарів дає змогу поповнити кілька цінових зон однією партією.', 'An economical mix for shops built around broad choice and frequent stock rotation. Clothing, footwear and accessories in one batch make it possible to refill several price zones at the same time.'),
    composition: t('Orientacyjnie: 65% damska, 15% męska, 10% dziecięca, 5% obuwie, torby, paski i zabawki.', 'Ориентировочно: 65% женской, 15% мужской, 10% детской, 5% обуви, сумок, ремней и игрушек.', 'Орієнтовно: 65% жіночого, 15% чоловічого, 10% дитячого, 5% взуття, сумок, ременів та іграшок.', 'Approx. 65% women, 15% men, 10% children, 5% shoes, bags, belts and toys.'),
    brandedShareApprox: t('Średnio ok. 7% ubrań markowych.', 'В среднем около 7% брендовой одежды.', 'У середньому близько 7% брендового одягу.', 'Approx. 7% branded clothing on average.'),
    disposalShareMax: t('Dopuszczalne do 5% do utylizacji.', 'Допускается до 5% на утилизацию.', 'Допускається до 5% на утилізацію.', 'Up to 5% may be unsuitable for resale.'),
  },
  {
    id: 'sweatshirts-mix',
    name: 'Sweatshirts Mix',
    image: '/images/catalog/sweatshirts-mix.jpg',
    category: 'sweatshirts',
    grade: 2,
    netPricePlnPerKg: 17.91,
    description: t('Mix bluz damskich i męskich.', 'Микс женских и мужских толстовок.', 'Мікс жіночих і чоловічих світшотів.', 'Mixed women’s and men’s sweatshirts.'),
    details: t('Uniwersalna pozycja na chłodniejsze miesiące i okres przejściowy. Zrównoważony udział modeli damskich i męskich pomaga zbudować osobny dział bluz, a rozpoznawalne marki wspierają sprzedaż pojedynczych sztuk.', 'Универсальная позиция для прохладных месяцев и межсезонья. Сбалансированный выбор женских и мужских моделей помогает оформить отдельный отдел толстовок, а узнаваемые бренды поддерживают поштучные продажи.', 'Універсальна позиція для прохолодних місяців і міжсезоння. Збалансований вибір жіночих і чоловічих моделей допомагає оформити окремий відділ світшотів, а впізнавані бренди підтримують поштучні продажі.', 'A versatile line for cooler months and transitional seasons. The women’s and men’s split supports a dedicated sweatshirt rail, while recognisable labels can strengthen individual-piece sales.'),
    composition: t('Orientacyjnie: 60% damskie, 40% męskie.', 'Ориентировочно: 60% женских, 40% мужских.', 'Орієнтовно: 60% жіночих, 40% чоловічих.', 'Approx. 60% women, 40% men.'),
    brandedShareApprox: t('Średnio ok. 12% ubrań markowych.', 'В среднем около 12% брендовой одежды.', 'У середньому близько 12% брендового одягу.', 'Approx. 12% branded clothing on average.'),
  },
  {
    id: 'casual-sweatshirts',
    name: 'Casual Sweatshirts',
    image: '/images/catalog/casual-sweatshirts.jpg',
    category: 'sweatshirts',
    grade: 2,
    netPricePlnPerKg: 21.35,
    description: t('Mix bluz damskich i męskich.', 'Микс женских и мужских толстовок.', 'Мікс жіночих і чоловічих світшотів.', 'Mixed women’s and men’s sweatshirts.'),
    details: t('Casualowy wybór dla sklepów, które chcą rozwijać dział codziennej odzieży miejskiej. Wyższy orientacyjny udział marek daje możliwość wydzielenia mocniejszych sztuk, a pozostałe modele dobrze pracują w stałej ofercie basic.', 'Повседневный ассортимент для магазинов, развивающих отдел городской одежды. Более высокая ориентировочная доля брендов позволяет выделить сильные вещи, а остальные модели хорошо работают в постоянной basic-зоне.', 'Повсякденний асортимент для магазинів, що розвивають відділ міського одягу. Вища орієнтовна частка брендів дає змогу виділити сильні речі, а інші моделі добре працюють у постійній basic-зоні.', 'A casual selection for retailers developing an everyday streetwear department. The higher estimated branded share allows standout pieces to be separated, while the remaining styles work well in a permanent basics area.'),
    composition: t('Orientacyjnie: 60% damskie, 40% męskie.', 'Ориентировочно: 60% женских, 40% мужских.', 'Орієнтовно: 60% жіночих, 40% чоловічих.', 'Approx. 60% women, 40% men.'),
    brandedShareApprox: t('Średnio ok. 14% ubrań markowych.', 'В среднем около 14% брендовой одежды.', 'У середньому близько 14% брендового одягу.', 'Approx. 14% branded clothing on average.'),
  },
  {
    id: 'kids-wear',
    name: 'Kids Wear',
    image: '/images/catalog/kids-wear.jpg',
    category: 'children',
    grade: 2,
    netPricePlnPerKg: 21.35,
    description: t('Mix odzieży dziecięcej.', 'Микс детской одежды.', 'Мікс дитячого одягу.', 'Mixed children’s clothing.'),
    details: t('Całoroczny mix do stałego działu dziecięcego, odpowiedni dla sklepów obsługujących rodziny i klientów szukających odzieży w przystępnej cenie. Przewaga modeli dziewczęcych ułatwia planowanie miejsca na wieszakach i komunikację oferty.', 'Круглогодичный микс для постоянного детского отдела — подходит магазинам для семей и покупателей, ищущих доступную одежду. Преобладание моделей для девочек помогает заранее спланировать выкладку и место на рейлах.', 'Цілорічний мікс для постійного дитячого відділу — підходить магазинам для сімей і покупців, які шукають доступний одяг. Перевага моделей для дівчаток допомагає заздалегідь спланувати викладку й місце на рейлах.', 'A year-round mix for a permanent children’s department, suited to family-focused stores and value-conscious customers. The higher girls’ share makes rail allocation and merchandising easier to plan.'),
    composition: t('Orientacyjnie: 70% dla dziewczynek, 30% dla chłopców.', 'Ориентировочно: 70% для девочек, 30% для мальчиков.', 'Орієнтовно: 70% для дівчаток, 30% для хлопчиків.', 'Approx. 70% girls, 30% boys.'),
    brandedShareApprox: t('Średnio ok. 5% ubrań markowych.', 'В среднем около 5% брендовой одежды.', 'У середньому близько 5% брендового одягу.', 'Approx. 5% branded clothing on average.'),
  },
  {
    id: 'children-summer',
    name: 'Children Summer',
    image: '/images/catalog/children-summer.jpg',
    category: 'children',
    grade: 1,
    netPricePlnPerKg: 34.44,
    description: t('Letni mix odzieży dziecięcej.', 'Летний микс детской одежды.', 'Літній мікс дитячого одягу.', 'Summer mix of children’s clothing.'),
    details: t('Selekcja pierwszego gatunku przeznaczona do przygotowania sklepu na cieplejszy sezon, wakacje i wyjazdy rodzinne. Sprawdza się jako uzupełnienie lekkiej odzieży dziecięcej przed wzrostem popytu wiosną i latem.', 'Сорт первого качества для подготовки магазина к тёплому сезону, каникулам и семейным поездкам. Подходит для пополнения лёгкой детской одежды перед ростом спроса весной и летом.', 'Сорт першої якості для підготовки магазину до теплого сезону, канікул і сімейних подорожей. Підходить для поповнення легкого дитячого одягу перед зростанням попиту навесні та влітку.', 'A first-grade selection for preparing the shop for warmer weather, holidays and family travel. It works as an early refill of lightweight children’s wear before spring and summer demand increases.'),
    composition: t('Orientacyjnie: 70% dla dziewczynek, 30% dla chłopców.', 'Ориентировочно: 70% для девочек, 30% для мальчиков.', 'Орієнтовно: 70% для дівчаток, 30% для хлопчиків.', 'Approx. 70% girls, 30% boys.'),
    brandedShareApprox: t('Średnio ok. 5% ubrań markowych.', 'В среднем около 5% брендовой одежды.', 'У середньому близько 5% брендового одягу.', 'Approx. 5% branded clothing on average.'),
  },
  {
    id: 'sport-pants',
    name: 'Sport Pants',
    image: '/images/catalog/sport-pants.jpg',
    category: 'pants',
    grade: 2,
    netPricePlnPerKg: 22.39,
    description: t('Mix spodni dresowych.', 'Микс спортивных брюк.', 'Мікс спортивних штанів.', 'Mixed sports pants.'),
    details: t('Całoroczna linia do działu sportowego, casualowego lub domowego. Równy udział modeli damskich i męskich pozwala rozłożyć towar między dwie strefy sklepu i utrzymać czytelną ofertę podstawowych spodni dresowych.', 'Круглогодичная линия для спортивного, casual- или домашнего отдела. Равная доля женских и мужских моделей позволяет распределить товар между двумя зонами и сохранить понятное предложение базовых спортивных брюк.', 'Цілорічна лінія для спортивного, casual- або домашнього відділу. Рівна частка жіночих і чоловічих моделей дає змогу розподілити товар між двома зонами й зберегти зрозумілу пропозицію базових спортивних штанів.', 'A year-round line for sportswear, casual or loungewear sections. The even women’s and men’s split makes it easy to divide stock between two shop zones and maintain a clear basics offer.'),
    composition: t('Orientacyjnie: 50% damskie, 50% męskie.', 'Ориентировочно: 50% женских, 50% мужских.', 'Орієнтовно: 50% жіночих, 50% чоловічих.', 'Approx. 50% women, 50% men.'),
    brandedShareApprox: t('Średnio ok. 7% ubrań markowych.', 'В среднем около 7% брендовой одежды.', 'У середньому близько 7% брендового одягу.', 'Approx. 7% branded clothing on average.'),
  },
  {
    id: 'extra-sport-pants',
    name: 'Extra Sport Pants',
    image: '/images/catalog/extra-sport-pants.jpg',
    category: 'pants',
    grade: 1,
    netPricePlnPerKg: 25.83,
    description: t('Mix spodni dresowych.', 'Микс спортивных брюк.', 'Мікс спортивних штанів.', 'Mixed sports pants.'),
    details: t('Pozycja pierwszego gatunku dla sklepów, które chcą mocniej wyeksponować sportowe i markowe spodnie. Wyższy orientacyjny udział marek pomaga budować ofertę premium, zachowując jednocześnie równowagę modeli damskich i męskich.', 'Позиция первого сорта для магазинов, которые хотят сильнее выделить спортивные и брендовые брюки. Более высокая ориентировочная доля брендов помогает сформировать premium-зону при равном балансе женских и мужских моделей.', 'Позиція першого ґатунку для магазинів, які хочуть сильніше виділити спортивні та брендові штани. Вища орієнтовна частка брендів допомагає сформувати premium-зону зі збереженням балансу жіночих і чоловічих моделей.', 'A first-grade line for shops that want to give sports and branded trousers stronger visibility. The higher estimated label share supports a premium rail while retaining an even balance of women’s and men’s styles.'),
    composition: t('Orientacyjnie: 50% damskie, 50% męskie.', 'Ориентировочно: 50% женских, 50% мужских.', 'Орієнтовно: 50% жіночих, 50% чоловічих.', 'Approx. 50% women, 50% men.'),
    brandedShareApprox: t('Średnio ok. 13% ubrań markowych.', 'В среднем около 13% брендовой одежды.', 'У середньому близько 13% брендового одягу.', 'Approx. 13% branded clothing on average.'),
  },
  {
    id: 't-shirt-standart',
    name: 'T-shirt Standart',
    image: '/images/catalog/t-shirt-standart.jpg',
    category: 'tops',
    grade: 2,
    netPricePlnPerKg: 19.84,
    description: t('Mix T-shirtów damskich i męskich.', 'Микс женских и мужских футболок.', 'Мікс жіночих і чоловічих футболок.', 'Mixed women’s and men’s T-shirts.'),
    details: t('Podstawowy mix do całorocznej sprzedaży, ze szczególnym potencjałem wiosną i latem. Duży udział modeli damskich sprawdza się w sklepach z rozbudowanym działem kobiecym, a część męska uzupełnia strefę basic.', 'Базовый микс для круглогодичной продажи с особенно высоким потенциалом весной и летом. Большая доля женских моделей подходит магазинам с развитым женским отделом, а мужская часть дополняет basic-зону.', 'Базовий мікс для цілорічного продажу з особливо високим потенціалом навесні та влітку. Велика частка жіночих моделей підходить магазинам із розвиненим жіночим відділом, а чоловіча частина доповнює basic-зону.', 'A core mix for year-round sales with particularly strong spring and summer potential. The high women’s share suits stores with a developed womenswear department, while the men’s portion complements the basics area.'),
    composition: t('Orientacyjnie: 80% damskie, 20% męskie.', 'Ориентировочно: 80% женских, 20% мужских.', 'Орієнтовно: 80% жіночих, 20% чоловічих.', 'Approx. 80% women, 20% men.'),
    brandedShareApprox: t('Średnio ok. 5% ubrań markowych.', 'В среднем около 5% брендовой одежды.', 'У середньому близько 5% брендового одягу.', 'Approx. 5% branded clothing on average.'),
  },
  {
    id: 'blouses-mix',
    name: 'Blouses Mix',
    image: '/images/catalog/blouses-mix.jpg',
    category: 'tops',
    grade: 2,
    netPricePlnPerKg: 19.84,
    description: t('Mix bluzek.', 'Микс блузок.', 'Мікс блузок.', 'Mixed blouses.'),
    details: t('Różnorodna pozycja do codziennego działu damskiego i regularnej wymiany ekspozycji. Mix pozwala uzupełnić wieszaki o fasony do pracy, na co dzień i na cieplejszy sezon bez zawężania zamówienia do jednego stylu.', 'Разнообразная позиция для повседневного женского отдела и регулярного обновления выкладки. Микс пополняет рейлы моделями для работы, на каждый день и тёплый сезон без привязки к одному стилю.', 'Різноманітна позиція для повсякденного жіночого відділу й регулярного оновлення викладки. Мікс поповнює рейли моделями для роботи, на щодень і теплий сезон без прив’язки до одного стилю.', 'A varied line for an everyday womenswear section and frequent display refreshes. The mix adds workwear, casual and warmer-season styles without limiting the order to one look.'),
    brandedShareApprox: t('Średnio ok. 1–2% ubrań markowych.', 'В среднем около 1–2% брендовой одежды.', 'У середньому близько 1–2% брендового одягу.', 'Approx. 1–2% branded clothing on average.'),
  },
  {
    id: 'ladies-blouses',
    name: 'Ladies Blouses',
    image: '/images/catalog/ladies-blouses.jpg',
    category: 'tops',
    grade: 1,
    netPricePlnPerKg: 39.6,
    description: t('Bluzki damskie.', 'Женские блузки.', 'Жіночі блузки.', 'Women’s blouses.'),
    details: t('Selekcja pierwszego gatunku do bardziej uporządkowanej ekspozycji damskiej. Dobrze sprawdza się w butikach, outletach i second-handach, które chcą zbudować wyraźny dział bluzek o wyższej jakości wizualnej.', 'Сорт первого качества для более аккуратной женской выкладки. Подходит бутикам, outlet и second-hand магазинам, которые хотят создать заметный отдел блузок с более высоким визуальным качеством.', 'Сорт першої якості для більш охайної жіночої викладки. Підходить бутикам, outlet і second-hand магазинам, які хочуть створити помітний відділ блузок із вищою візуальною якістю.', 'A first-grade selection for a more refined womenswear display. It suits boutiques, outlets and second-hand shops that want a clearly defined blouse section with stronger visual quality.'),
    brandedShareApprox: t('Średnio ok. 1–2% ubrań markowych.', 'В среднем около 1–2% брендовой одежды.', 'У середньому близько 1–2% брендового одягу.', 'Approx. 1–2% branded clothing on average.'),
  },
  {
    id: 'season-shoes',
    name: 'Season Shoes',
    image: '/images/catalog/season-shoes.jpg',
    category: 'shoes',
    grade: 1,
    netPricePlnPerKg: 51.66,
    description: t('Sezonowe obuwie damskie i męskie.', 'Сезонная женская и мужская обувь.', 'Сезонне жіноче та чоловіче взуття.', 'Seasonal women’s and men’s shoes.'),
    details: t('Selekcja pierwszego gatunku do sezonowego działu obuwia, z przewagą modeli damskich. Pozwala przygotować ofertę na aktualną porę roku i uzupełnić odzież o kategorię, która zwiększa wartość pojedynczego koszyka.', 'Сорт первого качества для сезонного обувного отдела с преобладанием женских моделей. Помогает подготовить предложение к текущему сезону и дополнить одежду категорией, увеличивающей стоимость одной покупки.', 'Сорт першої якості для сезонного взуттєвого відділу з перевагою жіночих моделей. Допомагає підготувати пропозицію до поточного сезону й доповнити одяг категорією, що збільшує вартість однієї покупки.', 'A first-grade selection for a seasonal footwear department, with a strong women’s share. It helps retailers prepare for the current season and add a category that can increase the value of each customer basket.'),
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
