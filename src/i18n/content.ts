import type { Locale } from '../config/locales';
import type { ProductCategory } from '../data/products';

export interface SiteContent {
  meta: { title: string; description: string };
  nav: { offer: string; quality: string; process: string; terms: string; faq: string };
  languageLabel: string;
  common: {
    whatsapp: string;
    call: string;
    availability: string;
    grade: string;
    approxComposition: string;
    branded: string;
    disposal: string;
    minimumOrder: string;
    netSuffix: string;
    vat: string;
    productQuestion: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    imageAlt: string;
    imageLabel: string;
    facts: Array<{ label: string; value: string }>;
  };
  benefits: { eyebrow: string; items: Array<{ title: string; text: string }> };
  catalog: {
    eyebrow: string;
    title: string;
    text: string;
    taxNote: string;
    disclaimer: string;
    empty: string;
    filters: Record<'all' | ProductCategory, string>;
  };
  quality: {
    eyebrow: string;
    title: string;
    text: string;
    imageAlt: string;
    principles: Array<{ title: string; text: string }>;
  };
  photoCta: { title: string; text: string; action: string };
  process: { eyebrow: string; title: string; text: string; steps: Array<{ title: string; text: string }> };
  terms: {
    eyebrow: string;
    title: string;
    delivery: { title: string; rows: Array<{ label: string; value: string }> };
    payment: { title: string; rows: Array<{ label: string; value: string }>; note: string };
  };
  transportCta: { title: string; text: string; action: string };
  faq: { eyebrow: string; title: string; items: Array<{ question: string; answer: string }> };
  finalCta: { eyebrow: string; title: string; text: string; summary: Array<{ label: string; value: string }> };
  footer: { description: string; navigation: string; contact: string; dispatch: string; legalPlaceholder: string; privacyPlaceholder: string };
}

const pl: SiteContent = {
  meta: {
    title: 'Hurtownia sortowanej odzieży używanej B2B | EuroSortex',
    description: 'Sortowana odzież używana z Europy dla sklepów w Polsce. 12 pozycji hurtowych, minimum 20 kg, zdjęcia partii i pomoc w organizacji transportu.',
  },
  nav: { offer: 'Oferta', quality: 'Jakość', process: 'Jak zamówić', terms: 'Dostawa i płatność', faq: 'FAQ' },
  languageLabel: 'Wybierz język',
  common: {
    whatsapp: 'WhatsApp', call: 'Zadzwoń', availability: 'Sprawdź dostępność', grade: 'Gatunek', approxComposition: 'Skład (orient.)', branded: 'Markowe', disposal: 'Utylizacja', minimumOrder: 'Min. zamówienie', netSuffix: 'zł/kg netto', vat: '+ VAT', productQuestion: 'Zapytaj o ten asortyment',
  },
  hero: {
    eyebrow: 'HURT ODZIEŻY UŻYWANEJ · WYŁĄCZNIE B2B',
    title: 'Hurtownia sortowanej odzieży używanej dla sklepów w całej Polsce',
    text: 'Sortowana odzież używana z Europy w 12 pozycjach hurtowych. Ceny netto, minimalne zamówienie 20 kg. Zapytaj o aktualną dostępność, zdjęcia partii i warunki współpracy.',
    note: 'Po krótkiej rozmowie przygotujemy ofertę dopasowaną do potrzeb Twojego sklepu. Nie prowadzimy sprzedaży online.',
    imageAlt: 'Magazyn EuroSortex z workami i belami sortowanej odzieży używanej',
    imageLabel: 'MAGAZYN / EUROPA',
    facts: [
      { label: 'MODEL', value: 'Wyłącznie B2B' },
      { label: 'DOSTAWA', value: '1–3 tygodnie' },
      { label: 'ZASIĘG', value: 'Cała Polska' },
    ],
  },
  benefits: {
    eyebrow: '01 / DLACZEGO EUROSORTEX',
    items: [
      { title: 'Odzież sortowana z Europy', text: 'Towar pochodzi z europejskich zbiórek i sortowni.' },
      { title: 'Zdjęcia dostępnych partii', text: 'Przed decyzją otrzymasz zdjęcia lub wideo konkretnej partii.' },
      { title: 'Jasno określone klasy jakości', text: 'Gatunek, orientacyjny skład i możliwe różnice opisujemy przed zamówieniem.' },
      { title: 'Pomoc w organizacji transportu', text: 'Transport opłaca kupujący; możemy pomóc go zorganizować.' },
    ],
  },
  catalog: {
    eyebrow: '02 / ASORTYMENT', title: 'Aktualny asortyment hurtowy', text: 'Oferta obejmuje 12 rodzajów sortowanej odzieży używanej. Dostępność zmienia się na bieżąco — przed zamówieniem potwierdź aktualną cenę i partię.', taxNote: 'Ceny podane netto. Do ceny należy doliczyć podatek VAT.', disclaimer: 'Podane proporcje są orientacyjne i mogą się różnić w zależności od partii. Ceny i dostępność wymagają potwierdzenia przed zamówieniem.', empty: 'Brak pozycji w tej kategorii.',
    filters: { all: 'Wszystkie', mix: 'Mix', sweatshirts: 'Bluzy', children: 'Odzież dziecięca', pants: 'Spodnie', tops: 'T-shirty i bluzki', shoes: 'Obuwie' },
  },
  quality: {
    eyebrow: '03 / JAKOŚĆ', title: 'Jakość i transparentne zasady sortowania', text: 'Każda partia odzieży używanej jest inna. Przed zamówieniem przedstawiamy klasę jakości, dostępne zdjęcia i orientacyjny opis partii.', imageAlt: 'Pracownik kontrolujący i sortujący odzież używaną',
    principles: [
      { title: 'Klasyfikacja towaru', text: 'Każda partia jest opisana zgodnie z przyjętą klasą jakości.' },
      { title: 'Zdjęcia partii towaru', text: 'Przed decyzją wysyłamy zdjęcia dostępnej partii na WhatsApp.' },
      { title: 'Transparentny opis partii', text: 'Proporcje są orientacyjne, ponieważ rzeczywisty skład każdej partii może się różnić.' },
    ],
  },
  photoCta: { title: 'Chcesz zobaczyć aktualnie dostępne partie?', text: 'Poproś o zdjęcia, klasę jakości i orientacyjny opis dostępnych partii.', action: 'Poproś o zdjęcia partii na WhatsApp' },
  process: {
    eyebrow: '04 / JAK ZAMÓWIĆ', title: 'Jak wygląda współpraca', text: 'Nie kupujesz online — strona prowadzi do rozmowy na WhatsApp, a następnie do kontaktu z managerem.',
    steps: [
      { title: 'Kontakt na WhatsApp', text: 'Zapytaj o interesujący towar.' },
      { title: 'Rozmowa z managerem', text: 'Manager pozna potrzeby Twojego sklepu.' },
      { title: 'Indywidualna oferta', text: 'Ustalamy gatunek, partię, zdjęcia i warunki.' },
      { title: 'Przedpłata 100%', text: 'Przelew bankowy na podstawie faktury przed wysyłką.' },
      { title: 'Dostawa 1–3 tygodnie', text: 'Termin liczony od zaksięgowania pełnej przedpłaty.' },
    ],
  },
  terms: {
    eyebrow: '05 / DOSTAWA I PŁATNOŚĆ', title: 'Dostawa i płatność — jasne warunki',
    delivery: { title: 'Dostawa', rows: [
      { label: 'CZAS', value: '1–3 tygodnie od zaksięgowania pełnej przedpłaty' },
      { label: 'ZASIĘG', value: 'Wyłącznie na terenie Polski' },
      { label: 'KOSZT', value: 'Transport opłaca kupujący' },
      { label: 'ORGANIZACJA', value: 'Pomagamy zorganizować transport; możliwy odbiór własny' },
    ] },
    payment: { title: 'Płatność', rows: [
      { label: 'FORMA', value: '100% przedpłaty przed wysyłką' },
      { label: 'PRZELEW', value: 'Przelew bankowy na podstawie faktury' },
      { label: 'OFERTA', value: 'Szczegóły potwierdza manager' },
    ], note: 'Warunki współpracy ustalamy indywidualnie po rozmowie z managerem.' },
  },
  transportCta: { title: 'Masz pytanie o zamówienie lub transport?', text: 'Omów warunki swojej partii bezpośrednio z managerem.', action: 'Omów zamówienie na WhatsApp' },
  faq: {
    eyebrow: '06 / FAQ', title: 'Częste pytania',
    items: [
      { question: 'Czy prowadzicie sprzedaż detaliczną?', answer: 'Nie. Sprzedajemy wyłącznie hurtowo (B2B) — do sklepów second-hand, outletów i hurtowni.' },
      { question: 'Czy mogę kupić towar online?', answer: 'Nie prowadzimy koszyka ani płatności online. Zamówienie ustalasz z managerem na WhatsApp i telefonicznie.' },
      { question: 'Jak mogę zobaczyć towar przed zamówieniem?', answer: 'Na WhatsApp wysyłamy zdjęcia lub wideo aktualnie dostępnych partii wraz z gatunkiem i orientacyjnym opisem.' },
      { question: 'Jaki jest czas dostawy?', answer: 'Zwykle 1–3 tygodnie od zaksięgowania pełnej przedpłaty. Wysyłka z Warszawy, wyłącznie na terenie Polski.' },
      { question: 'Kto płaci za transport?', answer: 'Koszt transportu ponosi kupujący. Możemy pomóc w organizacji; klient może też użyć własnego przewoźnika lub odebrać towar osobiście.' },
      { question: 'Jakie są warunki płatności?', answer: 'Obowiązuje 100% przedpłaty przelewem bankowym na podstawie faktury, przed wysyłką towaru.' },
      { question: 'Jakie jest minimalne zamówienie?', answer: 'Minimalne zamówienie to 20 kg dla każdej pozycji asortymentu.' },
    ],
  },
  finalCta: {
    eyebrow: '07 / KONTAKT', title: 'Sprawdź aktualną dostępność towaru', text: 'Napisz na WhatsApp — manager odpowie, wyśle zdjęcia dostępnych partii i przygotuje indywidualną ofertę.',
    summary: [
      { label: 'MODEL', value: 'Wyłącznie sprzedaż hurtowa B2B' },
      { label: 'DOSTAWA', value: '1–3 tygodnie od pełnej przedpłaty' },
      { label: 'TRANSPORT', value: 'Opłaca kupujący, pomagamy w organizacji' },
      { label: 'PŁATNOŚĆ', value: '100% przedpłaty, przelew na fakturę' },
    ],
  },
  footer: { description: 'Hurtownia sortowanej odzieży używanej z Europy. Współpraca wyłącznie B2B.', navigation: 'Nawigacja', contact: 'Kontakt', dispatch: 'Wysyłka: Warszawa', legalPlaceholder: 'Adres i dane rejestrowe: [DO UZUPEŁNIENIA]', privacyPlaceholder: 'Polityka prywatności: [DO UZUPEŁNIENIA]' },
};

const ru: SiteContent = {
  ...pl,
  meta: { title: 'Оптовый склад сортированной одежды second-hand | EuroSortex', description: 'Сортированная одежда second-hand из Европы для магазинов по всей Польше. 12 оптовых позиций, заказ от 20 кг, фото партий и помощь с транспортом.' },
  nav: { offer: 'Ассортимент', quality: 'Качество', process: 'Как заказать', terms: 'Доставка и оплата', faq: 'FAQ' },
  languageLabel: 'Выберите язык',
  common: { whatsapp: 'WhatsApp', call: 'Позвонить', availability: 'Уточнить наличие', grade: 'Сорт', approxComposition: 'Состав (примерно)', branded: 'Брендовая одежда', disposal: 'Утилизация', minimumOrder: 'Мин. заказ', netSuffix: 'зл/кг нетто', vat: '+ VAT', productQuestion: 'Уточнить эту позицию' },
  hero: { ...pl.hero, eyebrow: 'ОПТОВАЯ ОДЕЖДА SECOND-HAND · ТОЛЬКО B2B', title: 'Оптовый склад сортированной одежды second-hand для магазинов по всей Польше', text: 'Сортированная одежда из Европы: 12 оптовых позиций. Цены нетто, минимальный заказ 20 кг. Уточните наличие, запросите фото партии и условия сотрудничества.', note: 'После короткого разговора подготовим предложение под потребности вашего магазина. Онлайн-продаж нет.', imageAlt: 'Склад EuroSortex с мешками и тюками сортированной одежды', imageLabel: 'СКЛАД / ЕВРОПА', facts: [{ label: 'МОДЕЛЬ', value: 'Только B2B' }, { label: 'ДОСТАВКА', value: '1–3 недели' }, { label: 'ГЕОГРАФИЯ', value: 'Вся Польша' }] },
  benefits: { eyebrow: '01 / ПОЧЕМУ EUROSORTEX', items: [{ title: 'Одежда, сортированная в Европе', text: 'Товар поступает из европейских сборов и сортировочных центров.' }, { title: 'Фото доступных партий', text: 'До решения вы получите фото или видео конкретной партии.' }, { title: 'Понятные классы качества', text: 'Сорт, примерный состав и возможные отличия объясняем до заказа.' }, { title: 'Помощь с транспортом', text: 'Транспорт оплачивает покупатель; мы можем помочь с организацией.' }] },
  catalog: { ...pl.catalog, eyebrow: '02 / АССОРТИМЕНТ', title: 'Актуальный оптовый ассортимент', text: 'В каталоге 12 позиций сортированной одежды second-hand. Наличие меняется — перед заказом подтвердите актуальную партию и цену.', taxNote: 'Цены указаны нетто. Сверху добавляется VAT.', disclaimer: 'Все пропорции приблизительные и могут отличаться в зависимости от партии. Цена и наличие требуют подтверждения.', empty: 'В этой категории пока нет позиций.', filters: { all: 'Все', mix: 'Миксы', sweatshirts: 'Толстовки', children: 'Детская одежда', pants: 'Брюки', tops: 'Футболки и блузки', shoes: 'Обувь' } },
  quality: { ...pl.quality, eyebrow: '03 / КАЧЕСТВО', title: 'Качество и прозрачные правила сортировки', text: 'Каждая партия отличается. До заказа мы сообщаем класс качества, отправляем доступные фото и даём ориентировочное описание.', imageAlt: 'Сотрудник проверяет и сортирует одежду', principles: [{ title: 'Классификация товара', text: 'Каждая партия описывается в соответствии с классом качества.' }, { title: 'Фото партии', text: 'Перед решением отправляем фотографии доступной партии в WhatsApp.' }, { title: 'Прозрачное описание', text: 'Пропорции примерные, потому что фактический состав каждой партии отличается.' }] },
  photoCta: { title: 'Хотите увидеть доступные сейчас партии?', text: 'Запросите фотографии, класс качества и примерное описание.', action: 'Запросить фото в WhatsApp' },
  process: { eyebrow: '04 / КАК ЗАКАЗАТЬ', title: 'Как проходит сотрудничество', text: 'На сайте нет онлайн-покупки: сначала WhatsApp, затем разговор с менеджером.', steps: [{ title: 'Контакт в WhatsApp', text: 'Напишите, какой товар вас интересует.' }, { title: 'Разговор с менеджером', text: 'Менеджер уточнит потребности магазина.' }, { title: 'Индивидуальное предложение', text: 'Согласуем сорт, партию, фото и условия.' }, { title: 'Предоплата 100%', text: 'Банковский перевод по фактуре до отправки.' }, { title: 'Доставка 1–3 недели', text: 'Срок считается после зачисления полной предоплаты.' }] },
  terms: { eyebrow: '05 / ДОСТАВКА И ОПЛАТА', title: 'Доставка и оплата — понятные условия', delivery: { title: 'Доставка', rows: [{ label: 'СРОК', value: '1–3 недели после зачисления полной предоплаты' }, { label: 'ГЕОГРАФИЯ', value: 'Только по территории Польши' }, { label: 'СТОИМОСТЬ', value: 'Транспорт оплачивает покупатель' }, { label: 'ОРГАНИЗАЦИЯ', value: 'Помогаем организовать транспорт; возможен самовывоз' }] }, payment: { title: 'Оплата', rows: [{ label: 'ФОРМА', value: '100% предоплата до отправки' }, { label: 'ПЕРЕВОД', value: 'Банковский перевод по фактуре' }, { label: 'ПРЕДЛОЖЕНИЕ', value: 'Детали подтверждает менеджер' }], note: 'Условия сотрудничества согласовываются индивидуально с менеджером.' } },
  transportCta: { title: 'Есть вопрос по заказу или транспорту?', text: 'Обсудите условия партии напрямую с менеджером.', action: 'Обсудить заказ в WhatsApp' },
  faq: { eyebrow: '06 / FAQ', title: 'Частые вопросы', items: [{ question: 'Вы продаёте в розницу?', answer: 'Нет. Мы работаем только оптом B2B — с магазинами second-hand, аутлетами и оптовиками.' }, { question: 'Можно купить товар онлайн?', answer: 'Нет корзины и онлайн-оплаты. Заказ согласовывается с менеджером в WhatsApp и по телефону.' }, { question: 'Как увидеть товар до заказа?', answer: 'Мы отправим фото или видео доступной партии с указанием сорта и примерного состава.' }, { question: 'Какой срок доставки?', answer: 'Обычно 1–3 недели после зачисления полной предоплаты. Отправка из Варшавы только по Польше.' }, { question: 'Кто оплачивает транспорт?', answer: 'Транспорт оплачивает покупатель. Мы можем помочь организовать перевозку; также возможен свой перевозчик или самовывоз.' }, { question: 'Какие условия оплаты?', answer: '100% предоплата банковским переводом по фактуре до отправки.' }, { question: 'Какой минимальный заказ?', answer: 'Минимальный заказ для каждой позиции — 20 кг.' }] },
  finalCta: { eyebrow: '07 / КОНТАКТ', title: 'Уточните актуальное наличие товара', text: 'Напишите в WhatsApp — менеджер ответит, отправит фото доступных партий и подготовит индивидуальное предложение.', summary: [{ label: 'МОДЕЛЬ', value: 'Только оптовые продажи B2B' }, { label: 'ДОСТАВКА', value: '1–3 недели после полной предоплаты' }, { label: 'ТРАНСПОРТ', value: 'Оплачивает покупатель, помогаем организовать' }, { label: 'ОПЛАТА', value: '100% предоплата по фактуре' }] },
  footer: { description: 'Оптовый склад сортированной одежды second-hand из Европы. Только B2B.', navigation: 'Навигация', contact: 'Контакты', dispatch: 'Отправка: Варшава', legalPlaceholder: 'Адрес и регистрационные данные: [ДОПОЛНИТЬ]', privacyPlaceholder: 'Политика конфиденциальности: [ДОПОЛНИТЬ]' },
};

const uk: SiteContent = {
  ...ru,
  meta: { title: 'Оптовий склад сортованого одягу second-hand | EuroSortex', description: 'Сортований одяг second-hand з Європи для магазинів по всій Польщі. 12 оптових позицій, замовлення від 20 кг, фото партій і допомога з транспортом.' },
  nav: { offer: 'Асортимент', quality: 'Якість', process: 'Як замовити', terms: 'Доставка й оплата', faq: 'FAQ' },
  languageLabel: 'Оберіть мову',
  common: { whatsapp: 'WhatsApp', call: 'Зателефонувати', availability: 'Уточнити наявність', grade: 'Ґатунок', approxComposition: 'Склад (орієнтовно)', branded: 'Брендовий одяг', disposal: 'Утилізація', minimumOrder: 'Мін. замовлення', netSuffix: 'зл/кг нетто', vat: '+ VAT', productQuestion: 'Уточнити цю позицію' },
  hero: { ...ru.hero, eyebrow: 'ОПТОВИЙ ОДЯГ SECOND-HAND · ЛИШЕ B2B', title: 'Оптовий склад сортованого одягу second-hand для магазинів по всій Польщі', text: 'Сортований одяг з Європи: 12 оптових позицій. Ціни нетто, мінімальне замовлення 20 кг. Уточніть наявність, запросіть фото партії та умови співпраці.', note: 'Після короткої розмови підготуємо пропозицію для вашого магазину. Онлайн-продажів немає.', imageAlt: 'Склад EuroSortex з мішками й тюками сортованого одягу', imageLabel: 'СКЛАД / ЄВРОПА', facts: [{ label: 'МОДЕЛЬ', value: 'Лише B2B' }, { label: 'ДОСТАВКА', value: '1–3 тижні' }, { label: 'ГЕОГРАФІЯ', value: 'Уся Польща' }] },
  benefits: { eyebrow: '01 / ЧОМУ EUROSORTEX', items: [{ title: 'Одяг, сортований у Європі', text: 'Товар надходить з європейських зборів і сортувальних центрів.' }, { title: 'Фото доступних партій', text: 'До рішення ви отримаєте фото або відео конкретної партії.' }, { title: 'Зрозумілі класи якості', text: 'Ґатунок, орієнтовний склад і можливі відмінності пояснюємо до замовлення.' }, { title: 'Допомога з транспортом', text: 'Транспорт оплачує покупець; ми можемо допомогти з організацією.' }] },
  catalog: { ...ru.catalog, eyebrow: '02 / АСОРТИМЕНТ', title: 'Актуальний оптовий асортимент', text: 'У каталозі 12 позицій сортованого одягу second-hand. Наявність змінюється — перед замовленням підтвердьте актуальну партію та ціну.', taxNote: 'Ціни вказані нетто. Додатково нараховується VAT.', disclaimer: 'Усі пропорції орієнтовні й можуть відрізнятися залежно від партії. Ціна та наявність потребують підтвердження.', empty: 'У цій категорії немає позицій.', filters: { all: 'Усі', mix: 'Мікси', sweatshirts: 'Світшоти', children: 'Дитячий одяг', pants: 'Штани', tops: 'Футболки й блузки', shoes: 'Взуття' } },
  quality: { ...ru.quality, eyebrow: '03 / ЯКІСТЬ', title: 'Якість і прозорі правила сортування', text: 'Кожна партія відрізняється. До замовлення ми повідомляємо клас якості, надсилаємо доступні фото та даємо орієнтовний опис.', imageAlt: 'Працівник перевіряє та сортує одяг', principles: [{ title: 'Класифікація товару', text: 'Кожна партія описується відповідно до класу якості.' }, { title: 'Фото партії', text: 'Перед рішенням надсилаємо фотографії доступної партії у WhatsApp.' }, { title: 'Прозорий опис', text: 'Пропорції орієнтовні, оскільки фактичний склад кожної партії відрізняється.' }] },
  photoCta: { title: 'Хочете побачити доступні зараз партії?', text: 'Запросіть фотографії, клас якості й орієнтовний опис.', action: 'Запросити фото у WhatsApp' },
  process: { eyebrow: '04 / ЯК ЗАМОВИТИ', title: 'Як відбувається співпраця', text: 'На сайті немає онлайн-покупки: спочатку WhatsApp, потім розмова з менеджером.', steps: [{ title: 'Контакт у WhatsApp', text: 'Напишіть, який товар вас цікавить.' }, { title: 'Розмова з менеджером', text: 'Менеджер уточнить потреби магазину.' }, { title: 'Індивідуальна пропозиція', text: 'Узгодимо ґатунок, партію, фото й умови.' }, { title: 'Передплата 100%', text: 'Банківський переказ за фактурою до відправлення.' }, { title: 'Доставка 1–3 тижні', text: 'Строк рахується після зарахування повної передплати.' }] },
  terms: { eyebrow: '05 / ДОСТАВКА Й ОПЛАТА', title: 'Доставка й оплата — зрозумілі умови', delivery: { title: 'Доставка', rows: [{ label: 'СТРОК', value: '1–3 тижні після зарахування повної передплати' }, { label: 'ГЕОГРАФІЯ', value: 'Лише територією Польщі' }, { label: 'ВАРТІСТЬ', value: 'Транспорт оплачує покупець' }, { label: 'ОРГАНІЗАЦІЯ', value: 'Допомагаємо організувати транспорт; можливий самовивіз' }] }, payment: { title: 'Оплата', rows: [{ label: 'ФОРМА', value: '100% передплата до відправлення' }, { label: 'ПЕРЕКАЗ', value: 'Банківський переказ за фактурою' }, { label: 'ПРОПОЗИЦІЯ', value: 'Деталі підтверджує менеджер' }], note: 'Умови співпраці узгоджуються індивідуально з менеджером.' } },
  transportCta: { title: 'Є питання щодо замовлення чи транспорту?', text: 'Обговоріть умови партії безпосередньо з менеджером.', action: 'Обговорити замовлення у WhatsApp' },
  faq: { eyebrow: '06 / FAQ', title: 'Часті запитання', items: [{ question: 'Ви продаєте вроздріб?', answer: 'Ні. Ми працюємо лише оптом B2B — з магазинами second-hand, аутлетами й оптовиками.' }, { question: 'Чи можна купити товар онлайн?', answer: 'Немає кошика й онлайн-оплати. Замовлення узгоджується з менеджером у WhatsApp і телефоном.' }, { question: 'Як побачити товар до замовлення?', answer: 'Ми надішлемо фото або відео доступної партії із зазначенням ґатунку й орієнтовного складу.' }, { question: 'Який строк доставки?', answer: 'Зазвичай 1–3 тижні після зарахування повної передплати. Відправлення з Варшави лише Польщею.' }, { question: 'Хто оплачує транспорт?', answer: 'Транспорт оплачує покупець. Ми можемо допомогти з організацією; можливий власний перевізник або самовивіз.' }, { question: 'Які умови оплати?', answer: '100% передплата банківським переказом за фактурою до відправлення.' }, { question: 'Яке мінімальне замовлення?', answer: 'Мінімальне замовлення для кожної позиції — 20 кг.' }] },
  finalCta: { eyebrow: '07 / КОНТАКТ', title: 'Уточніть актуальну наявність товару', text: 'Напишіть у WhatsApp — менеджер відповість, надішле фото доступних партій і підготує індивідуальну пропозицію.', summary: [{ label: 'МОДЕЛЬ', value: 'Лише оптові продажі B2B' }, { label: 'ДОСТАВКА', value: '1–3 тижні після повної передплати' }, { label: 'ТРАНСПОРТ', value: 'Оплачує покупець, допомагаємо організувати' }, { label: 'ОПЛАТА', value: '100% передплата за фактурою' }] },
  footer: { description: 'Оптовий склад сортованого одягу second-hand з Європи. Лише B2B.', navigation: 'Навігація', contact: 'Контакти', dispatch: 'Відправлення: Варшава', legalPlaceholder: 'Адреса й реєстраційні дані: [ДОПОВНИТИ]', privacyPlaceholder: 'Політика конфіденційності: [ДОПОВНИТИ]' },
};

const en: SiteContent = {
  ...pl,
  meta: { title: 'Wholesale sorted second-hand clothing in Poland | EuroSortex', description: 'European sorted second-hand clothing for shops across Poland. 12 wholesale lines, 20 kg minimum order, batch photos and transport support.' },
  nav: { offer: 'Offer', quality: 'Quality', process: 'How to order', terms: 'Delivery & payment', faq: 'FAQ' },
  languageLabel: 'Choose language',
  common: { whatsapp: 'WhatsApp', call: 'Call', availability: 'Check availability', grade: 'Grade', approxComposition: 'Composition (approx.)', branded: 'Branded', disposal: 'Unsuitable share', minimumOrder: 'Min. order', netSuffix: 'PLN/kg net', vat: '+ VAT', productQuestion: 'Ask about this line' },
  hero: { ...pl.hero, eyebrow: 'WHOLESALE SECOND-HAND CLOTHING · B2B ONLY', title: 'Wholesale sorted second-hand clothing for shops across Poland', text: 'European sorted second-hand clothing in 12 wholesale lines. Net prices and a 20 kg minimum order. Ask about current availability, batch photos and cooperation terms.', note: 'After a short conversation, we prepare an offer matched to your shop. We do not sell online.', imageAlt: 'EuroSortex warehouse with bags and bales of sorted second-hand clothing', imageLabel: 'WAREHOUSE / EUROPE', facts: [{ label: 'MODEL', value: 'B2B only' }, { label: 'DELIVERY', value: '1–3 weeks' }, { label: 'COVERAGE', value: 'All Poland' }] },
  benefits: { eyebrow: '01 / WHY EUROSORTEX', items: [{ title: 'Clothing sorted in Europe', text: 'Goods come from European collections and sorting facilities.' }, { title: 'Photos of available batches', text: 'Receive photos or video of a specific batch before deciding.' }, { title: 'Clearly defined quality grades', text: 'We explain the grade, approximate mix and possible differences before ordering.' }, { title: 'Help arranging transport', text: 'Transport is paid by the buyer; we can help arrange it.' }] },
  catalog: { ...pl.catalog, eyebrow: '02 / ASSORTMENT', title: 'Current wholesale assortment', text: 'The offer contains 12 sorted second-hand clothing lines. Availability changes continuously — confirm the current batch and price before ordering.', taxNote: 'Prices are net. VAT is added.', disclaimer: 'All proportions are approximate and may vary between batches. Price and availability must be confirmed before ordering.', empty: 'No products in this category.', filters: { all: 'All', mix: 'Mixes', sweatshirts: 'Sweatshirts', children: 'Children', pants: 'Pants', tops: 'T-shirts & blouses', shoes: 'Shoes' } },
  quality: { ...pl.quality, eyebrow: '03 / QUALITY', title: 'Quality and transparent sorting rules', text: 'Every second-hand clothing batch is different. Before ordering, we provide its quality grade, available photos and an approximate description.', imageAlt: 'Worker checking and sorting second-hand clothing', principles: [{ title: 'Product classification', text: 'Every batch is described according to its stated quality grade.' }, { title: 'Batch photos', text: 'Before you decide, we send photos of the available batch on WhatsApp.' }, { title: 'Transparent description', text: 'Proportions are approximate because the actual composition varies by batch.' }] },
  photoCta: { title: 'Would you like to see currently available batches?', text: 'Ask for photos, the quality grade and an approximate batch description.', action: 'Request batch photos on WhatsApp' },
  process: { eyebrow: '04 / HOW TO ORDER', title: 'How cooperation works', text: 'You do not buy online — the website starts a WhatsApp conversation followed by contact with a manager.', steps: [{ title: 'WhatsApp contact', text: 'Tell us which product line interests you.' }, { title: 'Manager conversation', text: 'The manager learns your shop’s requirements.' }, { title: 'Individual offer', text: 'We confirm the grade, batch, photos and terms.' }, { title: '100% prepayment', text: 'Bank transfer against invoice before dispatch.' }, { title: 'Delivery in 1–3 weeks', text: 'The period starts after full prepayment is credited.' }] },
  terms: { eyebrow: '05 / DELIVERY & PAYMENT', title: 'Delivery and payment — clear terms', delivery: { title: 'Delivery', rows: [{ label: 'TIME', value: '1–3 weeks after full prepayment is credited' }, { label: 'AREA', value: 'Within Poland only' }, { label: 'COST', value: 'Transport is paid by the buyer' }, { label: 'ARRANGEMENT', value: 'We can help arrange transport; pickup is available' }] }, payment: { title: 'Payment', rows: [{ label: 'TERMS', value: '100% prepayment before dispatch' }, { label: 'TRANSFER', value: 'Bank transfer against invoice' }, { label: 'OFFER', value: 'Details are confirmed by the manager' }], note: 'Cooperation terms are agreed individually with the manager.' } },
  transportCta: { title: 'A question about your order or transport?', text: 'Discuss the batch terms directly with a manager.', action: 'Discuss the order on WhatsApp' },
  faq: { eyebrow: '06 / FAQ', title: 'Frequently asked questions', items: [{ question: 'Do you sell retail?', answer: 'No. We sell wholesale B2B only — to second-hand shops, outlets and wholesalers.' }, { question: 'Can I buy online?', answer: 'There is no cart or online payment. You agree the order with a manager on WhatsApp and by phone.' }, { question: 'How can I see the goods before ordering?', answer: 'We send photos or video of available batches with the grade and an approximate description.' }, { question: 'What is the delivery time?', answer: 'Usually 1–3 weeks after full prepayment is credited. Dispatch is from Warsaw and delivery is within Poland only.' }, { question: 'Who pays for transport?', answer: 'The buyer pays transport. We can help arrange it; you may also use your own carrier or collect the goods.' }, { question: 'What are the payment terms?', answer: '100% prepayment by bank transfer against invoice before dispatch.' }, { question: 'What is the minimum order?', answer: 'The minimum order is 20 kg for each assortment line.' }] },
  finalCta: { eyebrow: '07 / CONTACT', title: 'Check current product availability', text: 'Message us on WhatsApp — the manager will reply, send current batch photos and prepare an individual offer.', summary: [{ label: 'MODEL', value: 'Wholesale B2B only' }, { label: 'DELIVERY', value: '1–3 weeks after full prepayment' }, { label: 'TRANSPORT', value: 'Paid by buyer; we help arrange it' }, { label: 'PAYMENT', value: '100% prepayment against invoice' }] },
  footer: { description: 'Wholesale European sorted second-hand clothing. B2B cooperation only.', navigation: 'Navigation', contact: 'Contact', dispatch: 'Dispatch: Warsaw', legalPlaceholder: 'Address and registration data: [TO BE COMPLETED]', privacyPlaceholder: 'Privacy policy: [TO BE COMPLETED]' },
};

export const content: Record<Locale, SiteContent> = { pl, ru, uk, en };

