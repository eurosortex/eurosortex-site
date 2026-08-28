import type { Locale } from '../config/locales';
import type { Product } from '../data/products';
import type { ProductCategory } from '../data/products';
import { formatPrice } from '../data/products';

interface ProductPageCopy {
  breadcrumb: string;
  eyebrow: string;
  title: (name: string) => string;
  metaTitle: (name: string) => string;
  metaDescription: (product: Product) => string;
  lead: (product: Product) => string;
  productData: string;
  price: string;
  composition: string;
  branded: string;
  disposal: string;
  minimum: string;
  minimumValue: string;
  vatNote: string;
  availabilityNote: string;
  enquire: string;
  batchTitle: string;
  batchText: string;
  batchPoints: Array<{ title: string; text: string }>;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedAction: string;
  faqEyebrow: string;
  faqTitle: string;
  faq: (product: Product) => Array<{ question: string; answer: string }>;
  imageAlt: (name: string) => string;
}

export const productPageCopy: Record<Locale, ProductPageCopy> = {
  pl: {
    breadcrumb: 'Asortyment', eyebrow: 'SORTOWANA ODZIEŻ UŻYWANA · HURT B2B',
    title: (name) => `${name} — hurtowo dla sklepów second-hand`,
    metaTitle: (name) => `${name} hurtowo – odzież używana | EuroSortex`,
    metaDescription: (p) => `${p.description.pl} ${formatPrice(p.netPricePlnPerKg, 'pl')} zł/kg netto, minimum 20 kg. Sprawdź aktualną partię i zdjęcia w EuroSortex. Dostawa w Polsce i pomoc z transportem.`,
    lead: (p) => `${p.description.pl} Pozycja dostępna w sprzedaży hurtowej B2B dla sklepów, outletów i hurtowni na terenie Polski.`,
    productData: 'Parametry asortymentu', price: 'Cena', composition: 'Skład orientacyjny', branded: 'Udział odzieży markowej', disposal: 'Możliwy udział do utylizacji', minimum: 'Minimalne zamówienie', minimumValue: '20 kg', vatNote: 'Cena netto za kilogram. Do ceny należy doliczyć VAT.', availabilityNote: 'Cena, skład i dostępność wymagają potwierdzenia dla konkretnej partii.', enquire: 'Zapytaj o dostępność i zdjęcia',
    batchTitle: 'Co potwierdzamy przed zamówieniem', batchText: 'Odzież używana różni się między dostawami. Dlatego opis jest punktem wyjścia, a decyzję podejmujesz na podstawie aktualnie dostępnej partii.',
    batchPoints: [{ title: 'Aktualna partia', text: 'Manager sprawdza dostępność, gatunek i bieżącą cenę.' }, { title: 'Zdjęcia lub wideo', text: 'Przed zamówieniem możesz zobaczyć materiały przedstawiające dostępny towar.' }, { title: 'Warunki dostawy', text: 'Ustalamy ilość, transport i termin realizacji przed wystawieniem faktury.' }],
    relatedEyebrow: 'POZOSTAŁA OFERTA', relatedTitle: 'Zobacz podobny asortyment', relatedAction: 'Zobacz szczegóły', faqEyebrow: 'FAQ', faqTitle: 'Pytania o tę pozycję',
    faq: (p) => [{ question: `Jaka jest minimalna ilość ${p.name}?`, answer: 'Minimalne zamówienie dla jednej pozycji wynosi 20 kg.' }, { question: 'Czy zdjęcie pokazuje dokładnie partię, którą otrzymam?', answer: 'Zdjęcie na stronie przedstawia rodzaj asortymentu. Przed zamówieniem poproś managera o zdjęcia lub wideo aktualnie dostępnej partii.' }, { question: 'Czy cena jest aktualna?', answer: `Cena katalogowa wynosi ${formatPrice(p.netPricePlnPerKg, 'pl')} zł/kg netto. Ostateczną cenę i dostępność potwierdza manager przed zamówieniem.` }, { question: 'Jak wygląda dostawa?', answer: 'Wysyłamy na terenie Polski. Standardowy termin to 1–3 tygodnie od pełnej przedpłaty; transport opłaca kupujący, a my możemy pomóc go zorganizować.' }],
    imageAlt: (name) => `${name} — sortowana odzież używana w ofercie hurtowej EuroSortex`,
  },
  ru: {
    breadcrumb: 'Ассортимент', eyebrow: 'СОРТИРОВАННАЯ ОДЕЖДА SECOND-HAND · ОПТ B2B',
    title: (name) => `${name} — оптом для магазинов second-hand`,
    metaTitle: (name) => `${name} оптом – одежда second-hand | EuroSortex`,
    metaDescription: (p) => `${p.description.ru} ${formatPrice(p.netPricePlnPerKg, 'ru')} зл/кг нетто, заказ от 20 кг. Запросите наличие и фото партии EuroSortex. Доставка по Польше, помощь с транспортом.`,
    lead: (p) => `${p.description.ru} Оптовая B2B-позиция для магазинов, аутлетов и оптовиков с доставкой по Польше.`,
    productData: 'Параметры позиции', price: 'Цена', composition: 'Примерный состав', branded: 'Доля брендовой одежды', disposal: 'Возможная доля на утилизацию', minimum: 'Минимальный заказ', minimumValue: '20 кг', vatNote: 'Цена нетто за килограмм. Дополнительно начисляется VAT.', availabilityNote: 'Цена, состав и наличие подтверждаются для конкретной партии.', enquire: 'Уточнить наличие и запросить фото',
    batchTitle: 'Что мы подтверждаем до заказа', batchText: 'Партии одежды second-hand отличаются. Описание помогает сориентироваться, а решение принимается по товару, который доступен сейчас.',
    batchPoints: [{ title: 'Актуальная партия', text: 'Менеджер проверяет наличие, сорт и текущую цену.' }, { title: 'Фото или видео', text: 'До заказа можно получить материалы с доступным товаром.' }, { title: 'Условия доставки', text: 'Согласуем объём, транспорт и срок до выставления фактуры.' }],
    relatedEyebrow: 'ДРУГИЕ ПОЗИЦИИ', relatedTitle: 'Похожий ассортимент', relatedAction: 'Подробнее', faqEyebrow: 'FAQ', faqTitle: 'Вопросы об этой позиции',
    faq: (p) => [{ question: `Какой минимальный заказ ${p.name}?`, answer: 'Минимальный заказ одной позиции — 20 кг.' }, { question: 'На фото показана именно моя партия?', answer: 'Фото на странице показывает вид ассортимента. До заказа запросите у менеджера фото или видео фактически доступной партии.' }, { question: 'Цена актуальна?', answer: `Цена в каталоге — ${formatPrice(p.netPricePlnPerKg, 'ru')} зл/кг нетто. Итоговую цену и наличие менеджер подтверждает до заказа.` }, { question: 'Как проходит доставка?', answer: 'Доставка выполняется по Польше обычно в течение 1–3 недель после полной предоплаты. Транспорт оплачивает покупатель; мы можем помочь с организацией.' }],
    imageAlt: (name) => `${name} — сортированная одежда second-hand оптом от EuroSortex`,
  },
  uk: {
    breadcrumb: 'Асортимент', eyebrow: 'СОРТОВАНИЙ ОДЯГ SECOND-HAND · ГУРТ B2B',
    title: (name) => `${name} — гуртом для магазинів second-hand`,
    metaTitle: (name) => `${name} гуртом – одяг second-hand | EuroSortex`,
    metaDescription: (p) => `${p.description.uk} ${formatPrice(p.netPricePlnPerKg, 'uk')} зл/кг нетто, замовлення від 20 кг. Запитайте наявність і фото партії EuroSortex. Доставка по Польщі, допомога з транспортом.`,
    lead: (p) => `${p.description.uk} Гуртова B2B-позиція для магазинів, аутлетів і гуртовиків із доставкою по Польщі.`,
    productData: 'Параметри позиції', price: 'Ціна', composition: 'Орієнтовний склад', branded: 'Частка брендового одягу', disposal: 'Можлива частка на утилізацію', minimum: 'Мінімальне замовлення', minimumValue: '20 кг', vatNote: 'Ціна нетто за кілограм. Додатково нараховується VAT.', availabilityNote: 'Ціна, склад і наявність підтверджуються для конкретної партії.', enquire: 'Уточнити наявність і отримати фото',
    batchTitle: 'Що ми підтверджуємо до замовлення', batchText: 'Партії одягу second-hand відрізняються. Опис допомагає зорієнтуватися, а рішення приймається за товаром, доступним зараз.',
    batchPoints: [{ title: 'Актуальна партія', text: 'Менеджер перевіряє наявність, ґатунок і поточну ціну.' }, { title: 'Фото або відео', text: 'До замовлення можна отримати матеріали з доступним товаром.' }, { title: 'Умови доставки', text: 'Узгоджуємо обсяг, транспорт і термін до виставлення фактури.' }],
    relatedEyebrow: 'ІНШІ ПОЗИЦІЇ', relatedTitle: 'Схожий асортимент', relatedAction: 'Докладніше', faqEyebrow: 'FAQ', faqTitle: 'Питання про цю позицію',
    faq: (p) => [{ question: `Яке мінімальне замовлення ${p.name}?`, answer: 'Мінімальне замовлення однієї позиції — 20 кг.' }, { question: 'На фото показана саме моя партія?', answer: 'Фото на сторінці показує вид асортименту. До замовлення попросіть менеджера надіслати фото або відео фактично доступної партії.' }, { question: 'Ціна актуальна?', answer: `Ціна в каталозі — ${formatPrice(p.netPricePlnPerKg, 'uk')} зл/кг нетто. Остаточну ціну та наявність менеджер підтверджує до замовлення.` }, { question: 'Як відбувається доставка?', answer: 'Доставка по Польщі зазвичай займає 1–3 тижні після повної передоплати. Транспорт оплачує покупець; ми можемо допомогти з організацією.' }],
    imageAlt: (name) => `${name} — сортований одяг second-hand гуртом від EuroSortex`,
  },
  en: {
    breadcrumb: 'Wholesale assortment', eyebrow: 'SORTED SECOND-HAND CLOTHING · B2B WHOLESALE',
    title: (name) => `${name} — wholesale for second-hand shops`,
    metaTitle: (name) => `${name} wholesale second-hand clothing | EuroSortex`,
    metaDescription: (p) => `${p.description.en} PLN ${formatPrice(p.netPricePlnPerKg, 'en')}/kg net, 20 kg minimum. Ask EuroSortex for availability and current batch photos. Delivery in Poland; transport support.`,
    lead: (p) => `${p.description.en} A B2B wholesale line for second-hand shops, outlets and wholesalers with delivery across Poland.`,
    productData: 'Assortment details', price: 'Price', composition: 'Approximate composition', branded: 'Approximate branded share', disposal: 'Possible unsuitable share', minimum: 'Minimum order', minimumValue: '20 kg', vatNote: 'Net price per kilogram. VAT is added where applicable.', availabilityNote: 'Price, composition and availability must be confirmed for the specific batch.', enquire: 'Check availability and request photos',
    batchTitle: 'What we confirm before you order', batchText: 'Second-hand clothing batches vary. The description is a guide; your decision can be based on the goods currently available.',
    batchPoints: [{ title: 'Current batch', text: 'A manager checks availability, grade and current price.' }, { title: 'Photos or video', text: 'You can review materials showing the available goods before ordering.' }, { title: 'Delivery terms', text: 'We agree quantity, transport and timing before issuing the invoice.' }],
    relatedEyebrow: 'MORE WHOLESALE LINES', relatedTitle: 'Explore similar assortment', relatedAction: 'View details', faqEyebrow: 'FAQ', faqTitle: 'Questions about this line',
    faq: (p) => [{ question: `What is the minimum order for ${p.name}?`, answer: 'The minimum order for one assortment line is 20 kg.' }, { question: 'Does the page photo show my exact batch?', answer: 'The page image illustrates the assortment type. Before ordering, ask the manager for photos or video of the batch currently available.' }, { question: 'Is the listed price current?', answer: `The catalogue price is PLN ${formatPrice(p.netPricePlnPerKg, 'en')}/kg net. A manager confirms the final price and availability before you order.` }, { question: 'How does delivery work?', answer: 'We deliver within Poland, usually 1–3 weeks after full prepayment. Transport is paid by the buyer; we can help arrange it.' }],
    imageAlt: (name) => `${name} — sorted second-hand clothing wholesale from EuroSortex`,
  },
};

interface ProductEnhancementCopy {
  suitabilityEyebrow: string;
  suitabilityTitle: string;
  suitabilityText: string;
  audiences: Array<{ title: string; text: string }>;
  seasonTitle: string;
  seasons: Record<'warm' | 'cool' | 'yearRound', string>;
  orderTitle: string;
  orderSteps: string[];
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  formTitle: string;
  nameLabel: string;
  replyLabel: string;
  quantityLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  replyPlaceholder: string;
  messagePlaceholder: string;
  submitForm: string;
  formNote: string;
  formSubject: (name: string) => string;
  productLabel: string;
  callTitle: string;
  callText: string;
  callAction: string;
  whatsappTitle: string;
  whatsappText: string;
  whatsappAction: string;
  privacyLink: string;
}

export const productEnhancementCopy: Record<Locale, ProductEnhancementCopy> = {
  pl: {
    suitabilityEyebrow: '02 / DLA KOGO', suitabilityTitle: 'Komu pasuje ta pozycja', suitabilityText: 'Format sprawdzi się u różnych odbiorców B2B. Ostateczny dobór zależy od profilu sklepu i aktualnej partii.',
    audiences: [{ title: 'Sklep second-hand', text: 'Do regularnego uzupełniania sali sprzedaży wyselekcjonowanym towarem.' }, { title: 'Outlet', text: 'Dla punktów łączących odzież używaną, końcówki kolekcji i sprzedaż sezonową.' }, { title: 'Hurtownik', text: 'Do dalszej odsprzedaży w mniejszych partiach lub uzupełniania własnej oferty.' }],
    seasonTitle: 'Sezonowość', seasons: { warm: 'Najlepiej sprawdza się w sezonie wiosna–lato.', cool: 'Największy potencjał ma w sezonie jesień–zima.', yearRound: 'Pozycja całoroczna, przydatna przy regularnym zatowarowaniu.' },
    orderTitle: 'Jak zamówić tę pozycję', orderSteps: ['Podaj planowaną ilość i miasto dostawy.', 'Otrzymaj potwierdzenie ceny, dostępności oraz zdjęcia partii.', 'Zaakceptuj warunki, opłać fakturę i ustal transport.'],
    contactEyebrow: '04 / KONTAKT', contactTitle: 'Wybierz wygodny sposób kontaktu', contactText: 'Wyślij krótkie zapytanie, zadzwoń albo napisz na WhatsApp. Odpowiemy z informacją o dostępnej partii.',
    formTitle: 'Wyślij zapytanie', nameLabel: 'Imię / firma', replyLabel: 'Telefon lub e-mail', quantityLabel: 'Ilość, kg', messageLabel: 'Wiadomość', namePlaceholder: 'Jan / Nazwa sklepu', replyPlaceholder: '+48… lub e-mail', messagePlaceholder: 'Miasto dostawy, pytania o partię…', submitForm: 'Przygotuj wiadomość e-mail', formNote: 'Po kliknięciu otworzy się Twój program pocztowy z gotową wiadomością.', formSubject: (name) => `Zapytanie o ${name}`, productLabel: 'Asortyment',
    callTitle: 'Zadzwoń', callText: 'Najszybciej omówisz dostępność, ilość i dostawę bezpośrednio z managerem.', callAction: 'Zadzwoń teraz', whatsappTitle: 'Napisz na WhatsApp', whatsappText: 'Otrzymaj zdjęcia aktualnej partii, cenę i odpowiedź w jednym wątku.', whatsappAction: 'Otwórz WhatsApp', privacyLink: 'Polityka prywatności',
  },
  ru: {
    suitabilityEyebrow: '02 / КОМУ ПОДХОДИТ', suitabilityTitle: 'Для какого формата подходит позиция', suitabilityText: 'Позиция подходит разным B2B-покупателям. Окончательный выбор зависит от формата магазина и конкретной доступной партии.',
    audiences: [{ title: 'Магазин second-hand', text: 'Для регулярного пополнения торгового зала сортированным товаром.' }, { title: 'Outlet', text: 'Для точек, совмещающих second-hand, остатки коллекций и сезонные продажи.' }, { title: 'Оптовик', text: 'Для дальнейшей продажи небольшими партиями или дополнения собственного ассортимента.' }],
    seasonTitle: 'Сезонность', seasons: { warm: 'Лучше всего подходит для сезона весна–лето.', cool: 'Наибольший потенциал — в сезоне осень–зима.', yearRound: 'Всесезонная позиция для регулярного пополнения ассортимента.' },
    orderTitle: 'Как заказать эту позицию', orderSteps: ['Укажите планируемый объём и город доставки.', 'Получите подтверждение цены, наличия и фотографии партии.', 'Согласуйте условия, оплатите фактуру и выберите транспорт.'],
    contactEyebrow: '04 / СВЯЗЬ', contactTitle: 'Выберите удобный канал связи', contactText: 'Оставьте короткий запрос, позвоните или напишите в WhatsApp. Мы ответим по конкретной доступной партии.',
    formTitle: 'Отправить запрос', nameLabel: 'Имя / компания', replyLabel: 'Телефон или e-mail', quantityLabel: 'Объём, кг', messageLabel: 'Сообщение', namePlaceholder: 'Имя / название магазина', replyPlaceholder: '+48… или e-mail', messagePlaceholder: 'Город доставки, вопросы о партии…', submitForm: 'Подготовить письмо', formNote: 'После нажатия откроется почтовое приложение с готовым письмом.', formSubject: (name) => `Запрос по позиции ${name}`, productLabel: 'Ассортимент',
    callTitle: 'Позвонить', callText: 'Быстрее всего уточнить наличие, объём и доставку напрямую у менеджера.', callAction: 'Позвонить сейчас', whatsappTitle: 'Написать в WhatsApp', whatsappText: 'Получите фото актуальной партии, цену и ответы в одном чате.', whatsappAction: 'Открыть WhatsApp', privacyLink: 'Политика конфиденциальности',
  },
  uk: {
    suitabilityEyebrow: '02 / КОМУ ПІДХОДИТЬ', suitabilityTitle: 'Для якого формату підходить позиція', suitabilityText: 'Позиція підходить різним B2B-покупцям. Остаточний вибір залежить від формату магазину та конкретної доступної партії.',
    audiences: [{ title: 'Магазин second-hand', text: 'Для регулярного поповнення торгового залу сортованим товаром.' }, { title: 'Outlet', text: 'Для точок, що поєднують second-hand, залишки колекцій і сезонні продажі.' }, { title: 'Гуртовик', text: 'Для подальшого продажу меншими партіями або доповнення власного асортименту.' }],
    seasonTitle: 'Сезонність', seasons: { warm: 'Найкраще підходить для сезону весна–літо.', cool: 'Найбільший потенціал — у сезоні осінь–зима.', yearRound: 'Всесезонна позиція для регулярного поповнення асортименту.' },
    orderTitle: 'Як замовити цю позицію', orderSteps: ['Вкажіть запланований обсяг і місто доставки.', 'Отримайте підтвердження ціни, наявності та фотографії партії.', 'Узгодьте умови, оплатіть фактуру та оберіть транспорт.'],
    contactEyebrow: '04 / ЗВʼЯЗОК', contactTitle: 'Оберіть зручний канал зв’язку', contactText: 'Залиште короткий запит, зателефонуйте або напишіть у WhatsApp. Ми відповімо щодо конкретної доступної партії.',
    formTitle: 'Надіслати запит', nameLabel: 'Ім’я / компанія', replyLabel: 'Телефон або e-mail', quantityLabel: 'Обсяг, кг', messageLabel: 'Повідомлення', namePlaceholder: 'Ім’я / назва магазину', replyPlaceholder: '+48… або e-mail', messagePlaceholder: 'Місто доставки, питання про партію…', submitForm: 'Підготувати лист', formNote: 'Після натискання відкриється поштовий застосунок із готовим листом.', formSubject: (name) => `Запит щодо позиції ${name}`, productLabel: 'Асортимент',
    callTitle: 'Зателефонувати', callText: 'Найшвидше уточнити наявність, обсяг і доставку безпосередньо в менеджера.', callAction: 'Зателефонувати зараз', whatsappTitle: 'Написати у WhatsApp', whatsappText: 'Отримайте фото актуальної партії, ціну та відповіді в одному чаті.', whatsappAction: 'Відкрити WhatsApp', privacyLink: 'Політика конфіденційності',
  },
  en: {
    suitabilityEyebrow: '02 / BEST FOR', suitabilityTitle: 'Who this line works for', suitabilityText: 'This line can suit different B2B buyers. The final choice depends on your shop format and the batch currently available.',
    audiences: [{ title: 'Second-hand shop', text: 'For regular restocking with selected, ready-to-merchandise goods.' }, { title: 'Outlet', text: 'For stores combining second-hand clothing, end-of-line stock and seasonal sales.' }, { title: 'Wholesaler', text: 'For resale in smaller batches or complementing an existing wholesale offer.' }],
    seasonTitle: 'Seasonality', seasons: { warm: 'Best suited to the spring–summer season.', cool: 'Has the strongest potential in the autumn–winter season.', yearRound: 'A year-round line for regular assortment replenishment.' },
    orderTitle: 'How to order this line', orderSteps: ['Tell us the planned quantity and delivery city.', 'Receive price and availability confirmation plus current batch photos.', 'Approve the terms, pay the invoice and arrange transport.'],
    contactEyebrow: '04 / CONTACT', contactTitle: 'Choose the easiest way to contact us', contactText: 'Send a short enquiry, call us or write on WhatsApp. We will reply about the specific batch currently available.',
    formTitle: 'Send an enquiry', nameLabel: 'Name / company', replyLabel: 'Phone or e-mail', quantityLabel: 'Quantity, kg', messageLabel: 'Message', namePlaceholder: 'Name / shop name', replyPlaceholder: '+48… or e-mail', messagePlaceholder: 'Delivery city, questions about the batch…', submitForm: 'Prepare an e-mail', formNote: 'Your mail app will open with a ready-to-send message.', formSubject: (name) => `Enquiry about ${name}`, productLabel: 'Assortment',
    callTitle: 'Call us', callText: 'The quickest way to discuss availability, quantity and delivery with a manager.', callAction: 'Call now', whatsappTitle: 'Write on WhatsApp', whatsappText: 'Get current batch photos, the price and answers in one conversation.', whatsappAction: 'Open WhatsApp', privacyLink: 'Privacy policy',
  },
};

interface CategoryPageCopy {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  catalogTitle: string;
}

interface CategoryPageUi {
  eyebrow: string;
  countLabel: string;
  countValue: (count: number) => string;
  minimumLabel: string;
  minimumValue: string;
  deliveryLabel: string;
  deliveryValue: string;
  catalogEyebrow: string;
  catalogText: string;
}

export const categoryPageUi: Record<Locale, CategoryPageUi> = {
  pl: { eyebrow: 'KATEGORIA ASORTYMENTU · HURT B2B', countLabel: 'POZYCJE', countValue: (count) => `${count} w katalogu`, minimumLabel: 'MINIMUM', minimumValue: '20 kg / pozycja', deliveryLabel: 'DOSTAWA', deliveryValue: 'Cała Polska', catalogEyebrow: '01 / POZYCJE W KATEGORII', catalogText: 'Poniżej znajdziesz wszystkie pozycje w tej kategorii. Dostępność i cena wymagają potwierdzenia dla aktualnej partii.' },
  ru: { eyebrow: 'КАТЕГОРИЯ АССОРТИМЕНТА · ОПТ B2B', countLabel: 'ПОЗИЦИИ', countValue: (count) => `${count} в каталоге`, minimumLabel: 'МИНИМУМ', minimumValue: '20 кг / позиция', deliveryLabel: 'ДОСТАВКА', deliveryValue: 'По всей Польше', catalogEyebrow: '01 / ПОЗИЦИИ КАТЕГОРИИ', catalogText: 'Ниже представлены все позиции этой категории. Наличие и цену подтверждаем для актуальной партии.' },
  uk: { eyebrow: 'КАТЕГОРІЯ АСОРТИМЕНТУ · ГУРТ B2B', countLabel: 'ПОЗИЦІЇ', countValue: (count) => `${count} у каталозі`, minimumLabel: 'МІНІМУМ', minimumValue: '20 кг / позиція', deliveryLabel: 'ДОСТАВКА', deliveryValue: 'По всій Польщі', catalogEyebrow: '01 / ПОЗИЦІЇ КАТЕГОРІЇ', catalogText: 'Нижче представлені всі позиції цієї категорії. Наявність і ціну підтверджуємо для актуальної партії.' },
  en: { eyebrow: 'ASSORTMENT CATEGORY · B2B WHOLESALE', countLabel: 'LINES', countValue: (count) => `${count} in catalogue`, minimumLabel: 'MINIMUM', minimumValue: '20 kg / line', deliveryLabel: 'DELIVERY', deliveryValue: 'Across Poland', catalogEyebrow: '01 / CATEGORY LINES', catalogText: 'Below are all lines in this category. Availability and price are confirmed for the current batch.' },
};

export const categoryPageCopy: Record<Locale, Record<ProductCategory, CategoryPageCopy>> = {
  pl: {
    mix: { metaTitle: 'Miksy odzieży używanej hurtowo | EuroSortex', metaDescription: 'Miksy sortowanej odzieży używanej hurtowo dla sklepów second-hand. Porównaj skład, gatunek i ceny netto. Zamówienia od 20 kg, dostawa w Polsce.', title: 'Miksy odzieży używanej hurtowo', lead: 'Uniwersalne partie odzieży i dodatków dla sklepów, outletów i hurtowników. Porównaj skład, gatunek i cenę, a przed zamówieniem poproś o zdjęcia aktualnej partii.', catalogTitle: 'Dostępne miksy odzieży używanej' },
    sweatshirts: { metaTitle: 'Bluzy używane hurtowo dla second-handów | EuroSortex', metaDescription: 'Sortowane bluzy damskie i męskie hurtowo. Gatunek, ceny netto i dostępne miksy bluz dla sklepów second-hand w Polsce. Minimum 20 kg.', title: 'Bluzy używane w hurcie', lead: 'Miksy bluz damskich i męskich do zatowarowania sklepów second-hand oraz outletów. Dostępność, udział marek i zdjęcia potwierdzamy dla konkretnej partii.', catalogTitle: 'Dostępne miksy bluz' },
    children: { metaTitle: 'Odzież dziecięca używana hurtowo | EuroSortex', metaDescription: 'Sortowana odzież dziecięca używana w hurcie: miksy całoroczne i letnie. Ceny netto, minimum 20 kg i dostawa na terenie Polski.', title: 'Odzież dziecięca używana hurtowo', lead: 'Sortowane miksy dla dziewczynek i chłopców, dopasowane do regularnego zatowarowania sklepów. Wybierz wariant całoroczny lub sezonowy.', catalogTitle: 'Dostępna odzież dziecięca' },
    pants: { metaTitle: 'Spodnie używane hurtowo | EuroSortex', metaDescription: 'Spodnie dresowe używane hurtowo dla sklepów second-hand: gatunek 1 i 2, ceny netto, zdjęcia aktualnej partii i dostawa w Polsce.', title: 'Spodnie używane w hurcie', lead: 'Sortowane spodnie dresowe damskie i męskie w kilku wariantach jakościowych. Porównaj gatunek, udział marek i bieżącą cenę.', catalogTitle: 'Dostępne spodnie używane' },
    tops: { metaTitle: 'T-shirty i bluzki używane hurtowo | EuroSortex', metaDescription: 'T-shirty i bluzki damskie używane hurtowo. Sortowany asortyment dla second-handów, ceny netto, minimum 20 kg i dostawa w Polsce.', title: 'T-shirty i bluzki używane hurtowo', lead: 'Lekkie pozycje do oferty codziennej i sezonu wiosna–lato. Sprawdź T-shirty oraz miksy bluzek damskich dostępne w hurcie.', catalogTitle: 'Dostępne T-shirty i bluzki' },
    shoes: { metaTitle: 'Obuwie używane hurtowo | EuroSortex', metaDescription: 'Sortowane obuwie używane hurtowo dla sklepów second-hand. Cena netto za kilogram, zamówienia od 20 kg, zdjęcia partii i dostawa w Polsce.', title: 'Obuwie używane w hurcie', lead: 'Sezonowe obuwie sortowane dla sklepów second-hand i outletów. Przed zamówieniem potwierdzamy skład, jakość i pokazujemy aktualną partię.', catalogTitle: 'Dostępne obuwie używane' },
  },
  ru: {
    mix: { metaTitle: 'Миксы одежды second-hand оптом | EuroSortex', metaDescription: 'Миксы сортированной одежды second-hand оптом для магазинов. Состав, сорт и цены нетто. Заказ от 20 кг, доставка по Польше.', title: 'Миксы одежды second-hand оптом', lead: 'Универсальные партии одежды и аксессуаров для магазинов, outlet и оптовиков. Сравните состав, сорт и цену, а перед заказом запросите фото партии.', catalogTitle: 'Доступные миксы одежды' },
    sweatshirts: { metaTitle: 'Толстовки second-hand оптом | EuroSortex', metaDescription: 'Сортированные женские и мужские толстовки оптом. Сорта, цены нетто и доступные миксы для магазинов second-hand. От 20 кг.', title: 'Толстовки second-hand оптом', lead: 'Миксы женских и мужских толстовок для пополнения магазинов и outlet. Наличие, долю брендов и фото подтверждаем по конкретной партии.', catalogTitle: 'Доступные миксы толстовок' },
    children: { metaTitle: 'Детская одежда second-hand оптом | EuroSortex', metaDescription: 'Сортированная детская одежда second-hand оптом: всесезонные и летние миксы. Цены нетто, от 20 кг, доставка по Польше.', title: 'Детская одежда second-hand оптом', lead: 'Сортированные миксы для девочек и мальчиков для регулярного пополнения магазина. Выберите всесезонный или летний вариант.', catalogTitle: 'Доступная детская одежда' },
    pants: { metaTitle: 'Брюки second-hand оптом | EuroSortex', metaDescription: 'Спортивные брюки second-hand оптом для магазинов: 1 и 2 сорт, цены нетто, фото актуальной партии и доставка по Польше.', title: 'Брюки second-hand оптом', lead: 'Сортированные женские и мужские спортивные брюки в нескольких вариантах качества. Сравните сорт, долю брендов и цену.', catalogTitle: 'Доступные брюки' },
    tops: { metaTitle: 'Футболки и блузки second-hand оптом | EuroSortex', metaDescription: 'Футболки и женские блузки second-hand оптом. Сортированный товар для магазинов, цены нетто, от 20 кг, доставка по Польше.', title: 'Футболки и блузки second-hand оптом', lead: 'Лёгкие позиции для повседневного ассортимента и сезона весна–лето. Сравните футболки и миксы женских блузок.', catalogTitle: 'Доступные футболки и блузки' },
    shoes: { metaTitle: 'Обувь second-hand оптом | EuroSortex', metaDescription: 'Сортированная обувь second-hand оптом для магазинов. Цена нетто за килограмм, заказ от 20 кг, фото партии и доставка по Польше.', title: 'Обувь second-hand оптом', lead: 'Сезонная сортированная обувь для магазинов second-hand и outlet. До заказа подтверждаем состав, качество и показываем партию.', catalogTitle: 'Доступная обувь' },
  },
  uk: {
    mix: { metaTitle: 'Мікси одягу second-hand гуртом | EuroSortex', metaDescription: 'Мікси сортованого одягу second-hand гуртом для магазинів. Склад, ґатунок і ціни нетто. Від 20 кг, доставка Польщею.', title: 'Мікси одягу second-hand гуртом', lead: 'Універсальні партії одягу й аксесуарів для магазинів, outlet і гуртовиків. Порівняйте склад, ґатунок і ціну та попросіть фото партії.', catalogTitle: 'Доступні мікси одягу' },
    sweatshirts: { metaTitle: 'Світшоти second-hand гуртом | EuroSortex', metaDescription: 'Сортовані жіночі й чоловічі світшоти гуртом. Ґатунки, ціни нетто та доступні мікси для магазинів second-hand. Від 20 кг.', title: 'Світшоти second-hand гуртом', lead: 'Мікси жіночих і чоловічих світшотів для поповнення магазинів та outlet. Наявність, частку брендів і фото підтверджуємо для партії.', catalogTitle: 'Доступні мікси світшотів' },
    children: { metaTitle: 'Дитячий одяг second-hand гуртом | EuroSortex', metaDescription: 'Сортований дитячий одяг second-hand гуртом: всесезонні та літні мікси. Ціни нетто, від 20 кг, доставка Польщею.', title: 'Дитячий одяг second-hand гуртом', lead: 'Сортовані мікси для дівчаток і хлопчиків для регулярного поповнення магазину. Оберіть всесезонний або літній варіант.', catalogTitle: 'Доступний дитячий одяг' },
    pants: { metaTitle: 'Штани second-hand гуртом | EuroSortex', metaDescription: 'Спортивні штани second-hand гуртом для магазинів: 1 і 2 ґатунок, ціни нетто, фото актуальної партії та доставка Польщею.', title: 'Штани second-hand гуртом', lead: 'Сортовані жіночі та чоловічі спортивні штани у кількох варіантах якості. Порівняйте ґатунок, частку брендів і ціну.', catalogTitle: 'Доступні штани' },
    tops: { metaTitle: 'Футболки та блузки second-hand гуртом | EuroSortex', metaDescription: 'Футболки та жіночі блузки second-hand гуртом. Сортований товар, ціни нетто, від 20 кг і доставка Польщею.', title: 'Футболки та блузки second-hand гуртом', lead: 'Легкі позиції для щоденного асортименту та сезону весна–літо. Порівняйте футболки й мікси жіночих блузок.', catalogTitle: 'Доступні футболки та блузки' },
    shoes: { metaTitle: 'Взуття second-hand гуртом | EuroSortex', metaDescription: 'Сортоване взуття second-hand гуртом для магазинів. Ціна нетто за кілограм, від 20 кг, фото партії та доставка Польщею.', title: 'Взуття second-hand гуртом', lead: 'Сезонне сортоване взуття для магазинів second-hand і outlet. До замовлення підтверджуємо склад, якість і показуємо партію.', catalogTitle: 'Доступне взуття' },
  },
  en: {
    mix: { metaTitle: 'Wholesale second-hand clothing mixes | EuroSortex', metaDescription: 'Sorted second-hand clothing mixes wholesale for shops. Compare composition, grade and net prices. From 20 kg with delivery across Poland.', title: 'Wholesale second-hand clothing mixes', lead: 'Versatile batches of clothing and accessories for shops, outlets and wholesalers. Compare composition, grade and price, then request current batch photos.', catalogTitle: 'Available clothing mixes' },
    sweatshirts: { metaTitle: 'Wholesale second-hand sweatshirts | EuroSortex', metaDescription: 'Sorted women’s and men’s sweatshirts wholesale. Grades, net prices and available mixes for second-hand shops. From 20 kg.', title: 'Second-hand sweatshirts wholesale', lead: 'Women’s and men’s sweatshirt mixes for restocking second-hand shops and outlets. Availability, branded share and photos are confirmed per batch.', catalogTitle: 'Available sweatshirt mixes' },
    children: { metaTitle: 'Wholesale second-hand children’s clothing | EuroSortex', metaDescription: 'Sorted second-hand children’s clothing wholesale: year-round and summer mixes. Net prices, 20 kg minimum and delivery across Poland.', title: 'Second-hand children’s clothing wholesale', lead: 'Sorted girls’ and boys’ mixes for regular shop restocking. Choose between a year-round assortment and a summer line.', catalogTitle: 'Available children’s clothing' },
    pants: { metaTitle: 'Wholesale second-hand trousers | EuroSortex', metaDescription: 'Second-hand sports trousers wholesale for shops: grades 1 and 2, net prices, current batch photos and delivery across Poland.', title: 'Second-hand trousers wholesale', lead: 'Sorted women’s and men’s sports trousers in different quality options. Compare the grade, branded share and current price.', catalogTitle: 'Available second-hand trousers' },
    tops: { metaTitle: 'Wholesale second-hand T-shirts and blouses | EuroSortex', metaDescription: 'Second-hand T-shirts and women’s blouses wholesale. Sorted goods, net prices, 20 kg minimum and delivery across Poland.', title: 'Second-hand T-shirts and blouses wholesale', lead: 'Lightweight lines for everyday stock and the spring–summer season. Compare T-shirts and women’s blouse mixes available wholesale.', catalogTitle: 'Available T-shirts and blouses' },
    shoes: { metaTitle: 'Wholesale second-hand footwear | EuroSortex', metaDescription: 'Sorted second-hand footwear wholesale for shops. Net price per kilogram, 20 kg minimum, batch photos and delivery across Poland.', title: 'Second-hand footwear wholesale', lead: 'Seasonal sorted footwear for second-hand shops and outlets. We confirm composition and quality and show the current batch before ordering.', catalogTitle: 'Available second-hand footwear' },
  },
};

interface AboutCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  imageAlt: string;
  breadcrumb: string;
  facts: Array<{ label: string; value: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  valuesEyebrow: string;
  valuesTitle: string;
  values: Array<{ title: string; text: string }>;
  assortmentTitle: string;
  assortmentText: string;
  assortmentAction: string;
}

export const aboutCopy: Record<Locale, AboutCopy> = {
  pl: { metaTitle: 'O EuroSortex Group | Hurtownia odzieży używanej', metaDescription: 'Poznaj EuroSortex Group — hurtowego dostawcę sortowanej odzieży używanej z Europy dla sklepów w całej Polsce. Magazyn w Warszawie, współpraca B2B.', eyebrow: 'O EUROSORTEX GROUP', title: 'Partner hurtowy dla sklepów second-hand', lead: 'Dostarczamy sortowaną odzież używaną z Europy i pomagamy sklepom w Polsce wybierać partie dopasowane do ich potrzeb.', imageAlt: 'Magazyn EuroSortex Group z partiami sortowanej odzieży używanej', breadcrumb: 'O nas', facts: [{ label: 'MODEL', value: 'Wyłącznie B2B' }, { label: 'MAGAZYN', value: 'Warszawa' }, { label: 'ZASIĘG', value: 'Cała Polska' }], sections: [{ title: 'Kim jesteśmy', paragraphs: ['EuroSortex Group to hurtowy dostawca sortowanej odzieży i obuwia używanego. Współpracujemy ze sklepami second-hand, outletami i hurtowniami.', 'Każde zamówienie omawiamy bezpośrednio, ponieważ dostępność i skład towaru zmieniają się między partiami. Dzięki temu klient otrzymuje informacje odnoszące się do rzeczywiście dostępnego asortymentu.'] }, { title: 'Jak pracujemy', paragraphs: ['Najpierw poznajemy potrzeby sklepu, następnie sprawdzamy dostępność, przesyłamy zdjęcia lub wideo i potwierdzamy gatunek, cenę oraz warunki dostawy.', 'Nie prowadzimy sprzedaży detalicznej ani automatycznego sklepu internetowego. Stawiamy na kontakt z managerem i świadomą decyzję zakupową.'] }], valuesEyebrow: 'NASZE ZASADY', valuesTitle: 'Prosta i transparentna współpraca', values: [{ title: 'Konkretna partia', text: 'Pokazujemy aktualnie dostępny towar, a nie wyłącznie zdjęcie katalogowe.' }, { title: 'Jasne parametry', text: 'Potwierdzamy gatunek, orientacyjny skład, cenę i minimum zamówienia.' }, { title: 'Wsparcie logistyczne', text: 'Pomagamy zorganizować transport lub przygotowujemy towar do odbioru.' }], assortmentTitle: 'Zobacz aktualny asortyment', assortmentText: 'W katalogu znajdziesz 12 hurtowych pozycji: miksy, bluzy, spodnie, odzież dziecięcą, T-shirty, bluzki i obuwie.', assortmentAction: 'Przejdź do asortymentu' },
  ru: { metaTitle: 'О компании EuroSortex Group | Одежда second-hand оптом', metaDescription: 'EuroSortex Group — оптовый поставщик сортированной одежды second-hand из Европы для магазинов по всей Польше. Склад в Варшаве, только B2B.', eyebrow: 'О EUROSORTEX GROUP', title: 'Оптовый партнёр магазинов second-hand', lead: 'Поставляем сортированную одежду second-hand из Европы и помогаем магазинам в Польше выбирать партии под свой формат.', imageAlt: 'Склад EuroSortex Group с партиями сортированной одежды second-hand', breadcrumb: 'О компании', facts: [{ label: 'МОДЕЛЬ', value: 'Только B2B' }, { label: 'СКЛАД', value: 'Варшава' }, { label: 'ГЕОГРАФИЯ', value: 'Вся Польша' }], sections: [{ title: 'Кто мы', paragraphs: ['EuroSortex Group — оптовый поставщик сортированной одежды и обуви second-hand. Мы работаем с магазинами, аутлетами и оптовиками.', 'Каждый заказ обсуждается напрямую: наличие и состав меняются от партии к партии. Клиент получает информацию именно о товаре, который доступен сейчас.'] }, { title: 'Как мы работаем', paragraphs: ['Сначала уточняем потребности магазина, затем проверяем наличие, отправляем фото или видео и подтверждаем сорт, цену и условия доставки.', 'Мы не продаём в розницу и не используем автоматическую онлайн-корзину. Основа работы — контакт с менеджером и информированное решение о закупке.'] }], valuesEyebrow: 'НАШИ ПРИНЦИПЫ', valuesTitle: 'Понятное и прозрачное сотрудничество', values: [{ title: 'Конкретная партия', text: 'Показываем доступный сейчас товар, а не только каталожное фото.' }, { title: 'Понятные параметры', text: 'Подтверждаем сорт, примерный состав, цену и минимальный заказ.' }, { title: 'Помощь с логистикой', text: 'Помогаем организовать перевозку или готовим товар к самовывозу.' }], assortmentTitle: 'Посмотрите актуальный ассортимент', assortmentText: 'В каталоге 12 оптовых позиций: миксы, толстовки, брюки, детская одежда, футболки, блузки и обувь.', assortmentAction: 'Перейти к ассортименту' },
  uk: { metaTitle: 'Про EuroSortex Group | Одяг second-hand гуртом', metaDescription: 'EuroSortex Group — гуртовий постачальник сортованого одягу second-hand з Європи для магазинів по всій Польщі. Склад у Варшаві, лише B2B.', eyebrow: 'ПРО EUROSORTEX GROUP', title: 'Гуртовий партнер магазинів second-hand', lead: 'Постачаємо сортований одяг second-hand з Європи та допомагаємо магазинам у Польщі обирати партії під свій формат.', imageAlt: 'Склад EuroSortex Group із партіями сортованого одягу second-hand', breadcrumb: 'Про нас', facts: [{ label: 'МОДЕЛЬ', value: 'Лише B2B' }, { label: 'СКЛАД', value: 'Варшава' }, { label: 'ГЕОГРАФІЯ', value: 'Уся Польща' }], sections: [{ title: 'Хто ми', paragraphs: ['EuroSortex Group — гуртовий постачальник сортованого одягу та взуття second-hand. Ми працюємо з магазинами, аутлетами й гуртовиками.', 'Кожне замовлення обговорюємо безпосередньо: наявність і склад змінюються від партії до партії. Клієнт отримує інформацію саме про доступний зараз товар.'] }, { title: 'Як ми працюємо', paragraphs: ['Спочатку уточнюємо потреби магазину, потім перевіряємо наявність, надсилаємо фото або відео та підтверджуємо ґатунок, ціну й умови доставки.', 'Ми не продаємо вроздріб і не використовуємо автоматичний онлайн-кошик. Основа роботи — контакт із менеджером та обґрунтоване рішення про закупівлю.'] }], valuesEyebrow: 'НАШІ ПРИНЦИПИ', valuesTitle: 'Зрозуміла й прозора співпраця', values: [{ title: 'Конкретна партія', text: 'Показуємо доступний зараз товар, а не лише каталогове фото.' }, { title: 'Зрозумілі параметри', text: 'Підтверджуємо ґатунок, орієнтовний склад, ціну й мінімальне замовлення.' }, { title: 'Допомога з логістикою', text: 'Допомагаємо організувати перевезення або готуємо товар до самовивозу.' }], assortmentTitle: 'Перегляньте актуальний асортимент', assortmentText: 'У каталозі 12 гуртових позицій: мікси, світшоти, штани, дитячий одяг, футболки, блузки та взуття.', assortmentAction: 'Перейти до асортименту' },
  en: { metaTitle: 'About EuroSortex Group | Second-hand clothing wholesaler', metaDescription: 'Meet EuroSortex Group, a B2B supplier of sorted second-hand clothing from Europe for shops across Poland. Warehouse in Warsaw.', eyebrow: 'ABOUT EUROSORTEX GROUP', title: 'A wholesale partner for second-hand shops', lead: 'We supply sorted second-hand clothing from Europe and help shops across Poland choose batches suited to their business.', imageAlt: 'EuroSortex Group warehouse with sorted second-hand clothing batches', breadcrumb: 'About us', facts: [{ label: 'MODEL', value: 'B2B only' }, { label: 'WAREHOUSE', value: 'Warsaw' }, { label: 'COVERAGE', value: 'All Poland' }], sections: [{ title: 'Who we are', paragraphs: ['EuroSortex Group is a wholesale supplier of sorted second-hand clothing and footwear. We work with second-hand shops, outlets and wholesalers.', 'Every order is discussed directly because availability and composition vary between batches. Clients receive information about the goods that are actually available.'] }, { title: 'How we work', paragraphs: ['We first learn what a shop needs, then check availability, share photos or video, and confirm the grade, price and delivery terms.', 'We do not sell retail or use an automated online checkout. Our process is based on manager contact and an informed buying decision.'] }], valuesEyebrow: 'OUR PRINCIPLES', valuesTitle: 'Straightforward, transparent cooperation', values: [{ title: 'The actual batch', text: 'We show goods currently available, not only a catalogue image.' }, { title: 'Clear parameters', text: 'We confirm grade, approximate composition, price and order minimum.' }, { title: 'Logistics support', text: 'We can help arrange transport or prepare goods for collection.' }], assortmentTitle: 'Explore the current assortment', assortmentText: 'The catalogue includes 12 wholesale lines: mixes, sweatshirts, trousers, children’s wear, T-shirts, blouses and footwear.', assortmentAction: 'View the assortment' },
};

interface AssortmentPageCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  breadcrumb: string;
  facts: Array<{ label: string; value: string }>;
  catalogEyebrow: string;
  catalogTitle: string;
}

export const assortmentPageCopy: Record<Locale, AssortmentPageCopy> = {
  pl: {
    metaTitle: 'Hurtowy asortyment odzieży używanej | EuroSortex',
    metaDescription: 'Zobacz hurtowy asortyment sortowanej odzieży używanej EuroSortex: miksy, bluzy, spodnie, odzież dziecięca, T-shirty, bluzki i obuwie. Minimum 20 kg, dostawa w Polsce.',
    eyebrow: 'HURTOWNIA ODZIEŻY UŻYWANEJ · B2B',
    title: 'Asortyment dla sklepów second-hand',
    lead: 'Porównaj dostępne linie, ceny netto i gatunki. Każdą partię potwierdzamy przed zamówieniem i na życzenie wysyłamy aktualne zdjęcia lub wideo.',
    breadcrumb: 'Asortyment',
    facts: [{ label: 'POZYCJE', value: '12 linii hurtowych' }, { label: 'MINIMUM', value: '20 kg / pozycja' }, { label: 'DOSTAWA', value: 'Cała Polska' }],
    catalogEyebrow: '01 / PEŁNY KATALOG',
    catalogTitle: 'Wybierz kategorię i pozycję',
  },
  ru: {
    metaTitle: 'Ассортимент одежды second-hand оптом | EuroSortex',
    metaDescription: 'Оптовый ассортимент сортированной одежды second-hand EuroSortex: миксы, толстовки, брюки, детская одежда, футболки, блузки и обувь. От 20 кг, доставка по Польше.',
    eyebrow: 'ОДЕЖДА SECOND-HAND ОПТОМ · B2B',
    title: 'Ассортимент для магазинов second-hand',
    lead: 'Сравните доступные позиции, цены нетто и сорта. Перед заказом мы подтверждаем конкретную партию и по запросу отправляем актуальные фото или видео.',
    breadcrumb: 'Ассортимент',
    facts: [{ label: 'ПОЗИЦИИ', value: '12 оптовых линий' }, { label: 'МИНИМУМ', value: '20 кг / позиция' }, { label: 'ДОСТАВКА', value: 'По всей Польше' }],
    catalogEyebrow: '01 / ПОЛНЫЙ КАТАЛОГ',
    catalogTitle: 'Выберите категорию и позицию',
  },
  uk: {
    metaTitle: 'Асортимент одягу second-hand гуртом | EuroSortex',
    metaDescription: 'Гуртовий асортимент сортованого одягу second-hand EuroSortex: мікси, світшоти, штани, дитячий одяг, футболки, блузки та взуття. Від 20 кг, доставка Польщею.',
    eyebrow: 'ОДЯГ SECOND-HAND ГУРТОМ · B2B',
    title: 'Асортимент для магазинів second-hand',
    lead: 'Порівняйте доступні позиції, ціни нетто та ґатунки. Перед замовленням ми підтверджуємо конкретну партію і за запитом надсилаємо актуальні фото або відео.',
    breadcrumb: 'Асортимент',
    facts: [{ label: 'ПОЗИЦІЇ', value: '12 гуртових ліній' }, { label: 'МІНІМУМ', value: '20 кг / позиція' }, { label: 'ДОСТАВКА', value: 'По всій Польщі' }],
    catalogEyebrow: '01 / ПОВНИЙ КАТАЛОГ',
    catalogTitle: 'Оберіть категорію та позицію',
  },
  en: {
    metaTitle: 'Wholesale second-hand clothing assortment | EuroSortex',
    metaDescription: 'Explore EuroSortex wholesale second-hand clothing: mixes, sweatshirts, trousers, children’s wear, T-shirts, blouses and footwear. From 20 kg, delivery across Poland.',
    eyebrow: 'SECOND-HAND CLOTHING WHOLESALE · B2B',
    title: 'Assortment for second-hand shops',
    lead: 'Compare available lines, net prices and grades. We confirm every batch before the order and can send current photos or video on request.',
    breadcrumb: 'Wholesale assortment',
    facts: [{ label: 'LINES', value: '12 wholesale lines' }, { label: 'MINIMUM', value: '20 kg / line' }, { label: 'DELIVERY', value: 'Across Poland' }],
    catalogEyebrow: '01 / FULL CATALOGUE',
    catalogTitle: 'Choose a category and line',
  },
};
