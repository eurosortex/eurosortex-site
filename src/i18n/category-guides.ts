import type { Locale } from '../config/locales';
import type { ProductCategory } from '../data/products';

export const featuredCategories = ['mix', 'children', 'shoes'] as const satisfies readonly ProductCategory[];
type FeaturedCategory = (typeof featuredCategories)[number];
interface Guide {
  title: string;
  text: string;
  questions: { question: string; answer: string }[];
}

export const categoryGuides: Partial<Record<Locale, Record<FeaturedCategory, Guide>>> = {
  pl: {
    mix: {
      title: 'Jaki mix odzieży wybrać do sklepu second-hand?',
      text: 'Mix Standart służy do uzupełniania różnych działów sklepu, a Winter Assortment to propozycja na chłodniejsze miesiące. Porównaj skład i jakość obu pozycji w katalogu. Przy wyborze partii uwzględnij sezon, profil klientów i budżet całego zamówienia, razem z VAT i transportem.',
      questions: [
        { question: 'Czy mix to odzież sortowana czy niesort?', answer: 'EuroSortex oferuje sortowaną odzież używaną. Mix oznacza połączenie różnych rodzajów towaru w jednej pozycji. Nie jest obietnicą stałego składu ani identycznej zawartości każdej partii.' },
        { question: 'Czy mogę połączyć mix zimowy i uniwersalny?', answer: 'Możesz zapytać o obie pozycje w jednym zamówieniu. Minimum wynosi 50 kg każdej z nich, czyli łącznie 100 kg. Przed zakupem potwierdzamy dostępność, cenę i koszt wspólnego transportu.' },
      ],
    },
    children: {
      title: 'Odzież dziecięca do dalszej sprzedaży',
      text: 'Kids Wear to pozycja dla sklepów second-hand z działem dziecięcym. W katalogu opisujemy orientacyjny udział odzieży dla dziewczynek i chłopców. Przed zakupem poproś o zakres rozmiarów, rodzaje ubrań i zdjęcia dostępnej partii — te informacje pomogą ocenić, czy towar odpowiada klientom Twojego sklepu.',
      questions: [
        { question: 'Czy można zamówić konkretne rozmiary lub marki?', answer: 'Rozmiary, marki i rodzaje ubrań zależą od partii. Podaj swoje potrzeby w zapytaniu; manager sprawdzi dostępny towar. Opis kategorii nie gwarantuje konkretnej rozmiarówki ani zestawu marek.' },
        { question: 'Czy 50 kg oznacza określoną liczbę sztuk?', answer: 'Nie. Odzież dziecięcą sprzedajemy na kilogramy. Liczba sztuk zależy od rozmiarów, rodzaju i wagi ubrań, dlatego nie podajemy stałej liczby sztuk w partii 50 kg.' },
      ],
    },
    shoes: {
      title: 'Obuwie używane na wagę dla sklepów',
      text: 'Season Shoes to sezonowe obuwie damskie i męskie sprzedawane hurtowo na kilogramy. Przed zatowarowaniem działu obuwniczego sprawdź z managerem dostępne rozmiary, modele i stan konkretnej partii. Zdjęcia katalogowe pokazują przykładowy asortyment, a aktualne materiały otrzymasz na zapytanie.',
      questions: [
        { question: 'Ile par obuwia zawiera zamówienie 50 kg?', answer: 'Liczba par zależy od modeli, rozmiarów i sezonu. Cena katalogowa dotyczy kilograma, nie pary. Przy porównywaniu ofert uwzględnij również stan obuwia, VAT i koszt transportu.' },
        { question: 'Czy mogę wybrać obuwie na konkretny sezon?', answer: 'W zapytaniu podaj sezon i profil sklepu. Manager potwierdzi, jakie modele i rozmiary znajdują się w dostępnej partii. Nie zakładaj dostępności konkretnego rodzaju butów wyłącznie na podstawie zdjęcia w katalogu.' },
      ],
    },
  },
  ru: {
    mix: {
      title: 'Какой микс выбрать для магазина second-hand?',
      text: 'Mix Standart предназначен для пополнения разных отделов, а Winter Assortment — для холодных месяцев. Сравните состав и качество позиций в каталоге. Учитывайте сезон, покупателей вашего магазина и бюджет всего заказа, включая VAT и транспорт.',
      questions: [
        { question: 'Микс — это сортированная одежда или несорт?', answer: 'EuroSortex предлагает сортированную одежду second-hand. Микс означает сочетание разных видов товара в одной позиции. Это не обещание постоянного состава или одинакового наполнения каждой партии.' },
        { question: 'Можно объединить зимний и универсальный миксы?', answer: 'Можно запросить обе позиции в одном заказе. Минимум — 50 кг каждой, то есть 100 кг суммарно. До покупки подтверждаем наличие, цену и стоимость совместной перевозки.' },
      ],
    },
    children: {
      title: 'Детская одежда для дальнейшей продажи',
      text: 'Kids Wear — позиция для магазинов second-hand с детским отделом. В каталоге указан примерный состав одежды для девочек и мальчиков. Перед покупкой запросите диапазон размеров, виды одежды и фотографии доступной партии, чтобы оценить соответствие вашим покупателям.',
      questions: [
        { question: 'Можно заказать определённые размеры или бренды?', answer: 'Размеры, бренды и виды одежды зависят от партии. Укажите пожелания в запросе — менеджер проверит доступный товар. Описание категории не гарантирует определённый размерный ряд или набор брендов.' },
        { question: '50 кг — это определённое количество вещей?', answer: 'Нет. Детскую одежду продаём на килограммы. Количество вещей зависит от размеров, вида и веса одежды, поэтому фиксированное число вещей в партии 50 кг не указываем.' },
      ],
    },
    shoes: {
      title: 'Обувь second-hand на вес для магазинов',
      text: 'Season Shoes — сезонная женская и мужская обувь, которую продаём оптом на килограммы. Перед закупкой уточните у менеджера размеры, модели и состояние конкретной партии. Каталожные фотографии показывают примерный ассортимент; актуальные материалы предоставляем по запросу.',
      questions: [
        { question: 'Сколько пар обуви в заказе 50 кг?', answer: 'Количество пар зависит от моделей, размеров и сезона. Каталожная цена указана за килограмм, а не за пару. При сравнении предложений учитывайте состояние обуви, VAT и транспорт.' },
        { question: 'Можно выбрать обувь на определённый сезон?', answer: 'В запросе укажите сезон и формат магазина. Менеджер подтвердит модели и размеры доступной партии. Каталожная фотография сама по себе не подтверждает наличие определённого вида обуви.' },
      ],
    },
  },
  uk: {
    mix: {
      title: 'Який мікс обрати для магазину second-hand?',
      text: 'Mix Standart призначений для поповнення різних відділів, а Winter Assortment — для холодних місяців. Порівняйте склад і якість позицій у каталозі. Враховуйте сезон, покупців вашого магазину та бюджет усього замовлення, включно з VAT і транспортом.',
      questions: [
        { question: 'Мікс — це сортований одяг чи несорт?', answer: 'EuroSortex пропонує сортований одяг second-hand. Мікс означає поєднання різних видів товару в одній позиції. Це не обіцянка постійного складу або однакового наповнення кожної партії.' },
        { question: 'Чи можна поєднати зимовий та універсальний мікси?', answer: 'Можна запитати обидві позиції в одному замовленні. Мінімум — 50 кг кожної, тобто 100 кг загалом. До купівлі підтверджуємо наявність, ціну та вартість спільного перевезення.' },
      ],
    },
    children: {
      title: 'Дитячий одяг для подальшого продажу',
      text: 'Kids Wear — позиція для магазинів second-hand із дитячим відділом. У каталозі вказаний орієнтовний склад одягу для дівчаток і хлопчиків. Перед купівлею запитайте діапазон розмірів, види одягу та фотографії доступної партії, щоб оцінити відповідність вашим покупцям.',
      questions: [
        { question: 'Чи можна замовити певні розміри або бренди?', answer: 'Розміри, бренди та види одягу залежать від партії. Вкажіть побажання в запиті — менеджер перевірить доступний товар. Опис категорії не гарантує певний розмірний ряд або набір брендів.' },
        { question: '50 кг — це певна кількість речей?', answer: 'Ні. Дитячий одяг продаємо на кілограми. Кількість речей залежить від розмірів, виду та ваги одягу, тому фіксовану кількість речей у партії 50 кг не вказуємо.' },
      ],
    },
    shoes: {
      title: 'Взуття second-hand на вагу для магазинів',
      text: 'Season Shoes — сезонне жіноче та чоловіче взуття, яке продаємо гуртом на кілограми. Перед закупівлею уточніть у менеджера розміри, моделі та стан конкретної партії. Каталогові фотографії показують приклади асортименту; актуальні матеріали надаємо на запит.',
      questions: [
        { question: 'Скільки пар взуття в замовленні 50 кг?', answer: 'Кількість пар залежить від моделей, розмірів і сезону. Каталогова ціна вказана за кілограм, а не за пару. Порівнюючи пропозиції, враховуйте стан взуття, VAT і транспорт.' },
        { question: 'Чи можна обрати взуття на певний сезон?', answer: 'У запиті вкажіть сезон і формат магазину. Менеджер підтвердить моделі та розміри доступної партії. Каталогова фотографія сама по собі не підтверджує наявність певного виду взуття.' },
      ],
    },
  },
};

export function getCategoryGuide(locale: Locale, category: ProductCategory): Guide | undefined {
  return categoryGuides[locale]?.[category as FeaturedCategory];
}
