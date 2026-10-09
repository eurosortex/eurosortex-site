import type { Locale } from '../config/locales';
import { polishProductShortNames } from './marketing';

// Shared copy for the current storefront. Polish text is the source of truth.
const copy: Record<string, { ru: string; uk: string }> = {
  "Oferta": {
    "ru": "Ассортимент",
    "uk": "Асортимент"
  },
  "O nas": {
    "ru": "О компании",
    "uk": "Про нас"
  },
  "Jak zamówić": {
    "ru": "Как заказать",
    "uk": "Як замовити"
  },
  "Opinie": {
    "ru": "Отзывы",
    "uk": "Відгуки"
  },
  "Blog": {
    "ru": "Блог",
    "uk": "Блог"
  },
  "Kontakt": {
    "ru": "Контакты",
    "uk": "Контакти"
  },
  "KONTAKT": {
    "ru": "КОНТАКТЫ",
    "uk": "КОНТАКТИ"
  },
  "Zapytaj o ofertę": {
    "ru": "Запросить предложение",
    "uk": "Запитати пропозицію"
  },
  "Poproś o ofertę": {
    "ru": "Получить предложение",
    "uk": "Отримати пропозицію"
  },
  "Strona główna": {
    "ru": "Главная",
    "uk": "Головна"
  },
  "Ścieżka nawigacji": {
    "ru": "Навигация по странице",
    "uk": "Навігація сторінкою"
  },
  "EUROSORTEX GROUP · WARSZAWA": {
    "ru": "EUROSORTEX GROUP · ВАРШАВА",
    "uk": "EUROSORTEX GROUP · ВАРШАВА"
  },
  "Hurtownia odzieży używanej": {
    "ru": "Одежда секонд-хенд оптом",
    "uk": "Одяг секонд-хенд оптом"
  },
  "dla Twojego sklepu": {
    "ru": "для вашего магазина",
    "uk": "для вашого магазину"
  },
  "Sortowana odzież i obuwie z Europy. Zamówienia od 50 kg, z dostawą do sklepów second-hand w całej Polsce.": {
    "ru": "Сортированная одежда и обувь из Европы. Заказы от 50 кг с доставкой в магазины секонд-хенд по всей Польше.",
    "uk": "Сортований одяг і взуття з Європи. Замовлення від 50 кг із доставкою до магазинів секонд-хенд по всій Польщі."
  },
  "Zobacz ofertę": {
    "ru": "Посмотреть ассортимент",
    "uk": "Переглянути асортимент"
  },
  "Przykładowe bluzy z katalogu EuroSortex": {
    "ru": "Примеры толстовок из каталога EuroSortex",
    "uk": "Приклади світшотів із каталогу EuroSortex"
  },
  "Cennik hurtowy": {
    "ru": "Оптовый прайс-лист",
    "uk": "Оптовий прайс-лист"
  },
  "Minimalne zamówienie: 50 kg każdej pozycji.": {
    "ru": "Минимальный заказ: 50 кг каждой позиции.",
    "uk": "Мінімальне замовлення: 50 кг кожної позиції."
  },
  "Cennik hurtowy odzieży i obuwia": {
    "ru": "Оптовые цены на одежду и обувь",
    "uk": "Оптові ціни на одяг і взуття"
  },
  "Rodzaj towaru": {
    "ru": "Категория товара",
    "uk": "Категорія товару"
  },
  "Cena za 1 kg": {
    "ru": "Цена за 1 кг",
    "uk": "Ціна за 1 кг"
  },
  "Koszt 50 kg": {
    "ru": "Стоимость 50 кг",
    "uk": "Вартість 50 кг"
  },
  "netto": {
    "ru": "без НДС",
    "uk": "без ПДВ"
  },
  "50 kg to minimalne zamówienie każdej pozycji.": {
    "ru": "Минимальный заказ каждой позиции — 50 кг.",
    "uk": "Мінімальне замовлення кожної позиції — 50 кг."
  },
  "Ceny netto. VAT i transport doliczamy osobno. Ceny i dostępność potwierdzamy przed zamówieniem.": {
    "ru": "Цены без НДС. НДС и доставка оплачиваются отдельно. Цены и наличие подтверждаем перед заказом.",
    "uk": "Ціни без ПДВ. ПДВ і доставка оплачуються окремо. Ціни й наявність підтверджуємо перед замовленням."
  },
  "Pobierz cennik PDF": {
    "ru": "Скачать прайс PDF",
    "uk": "Завантажити прайс PDF"
  },
  "Do zapisania lub wydruku": {
    "ru": "Для сохранения или печати · на польском",
    "uk": "Для збереження або друку · польською"
  },
  "Poznaj nasz asortyment": {
    "ru": "Наш ассортимент",
    "uk": "Наш асортимент"
  },
  "Cały asortyment": {
    "ru": "Весь ассортимент",
    "uk": "Увесь асортимент"
  },
  "Bluzy": {
    "ru": "Толстовки",
    "uk": "Світшоти"
  },
  "Mix zimowy": {
    "ru": "Зимний микс",
    "uk": "Зимовий мікс"
  },
  "Mix odzieży": {
    "ru": "Микс одежды",
    "uk": "Мікс одягу"
  },
  "Odzież dziecięca": {
    "ru": "Детская одежда",
    "uk": "Дитячий одяг"
  },
  "Swetry męskie": {
    "ru": "Мужские свитеры",
    "uk": "Чоловічі светри"
  },
  "Swetry damskie": {
    "ru": "Женские свитеры",
    "uk": "Жіночі светри"
  },
  "Odzież wierzchnia": {
    "ru": "Верхняя одежда",
    "uk": "Верхній одяг"
  },
  "Obuwie sezonowe": {
    "ru": "Сезонная обувь",
    "uk": "Сезонне взуття"
  },
  "Bluzy damskie i męskie": {
    "ru": "Женские и мужские толстовки",
    "uk": "Жіночі та чоловічі світшоти"
  },
  "Odzież na chłodniejsze miesiące": {
    "ru": "Одежда для холодного сезона",
    "uk": "Одяг для холодного сезону"
  },
  "Odzież, obuwie i dodatki": {
    "ru": "Одежда, обувь и аксессуары",
    "uk": "Одяг, взуття й аксесуари"
  },
  "Dla dziewczynek i chłopców": {
    "ru": "Для девочек и мальчиков",
    "uk": "Для дівчаток і хлопчиків"
  },
  "JAKOŚĆ TOWARU": {
    "ru": "КАЧЕСТВО ТОВАРА",
    "uk": "ЯКІСТЬ ТОВАРУ"
  },
  "Informacje o partii": {
    "ru": "Информация о партии",
    "uk": "Інформація про партію"
  },
  "przed zakupem": {
    "ru": "до покупки",
    "uk": "до покупки"
  },
  "Każda dostawa ma inny skład. Przed zamówieniem ustalamy szczegóły konkretnej partii, aby ułatwić Ci ocenę towaru pod kątem potrzeb sklepu.": {
    "ru": "Состав каждой поставки отличается. Перед заказом обсуждаем конкретную партию, чтобы вы могли оценить, подходит ли товар вашему магазину.",
    "uk": "Склад кожної поставки відрізняється. Перед замовленням обговорюємо конкретну партію, щоб ви могли оцінити, чи підходить товар вашому магазину."
  },
  "Materiały zdjęciowe": {
    "ru": "Фото и видео",
    "uk": "Фото й відео"
  },
  "Zdjęcia lub wideo aktualnie dostępnej partii.": {
    "ru": "Фотографии или видео доступной партии.",
    "uk": "Фотографії або відео наявної партії."
  },
  "Skład asortymentu": {
    "ru": "Состав ассортимента",
    "uk": "Склад асортименту"
  },
  "Rodzaje ubrań, orientacyjne rozmiary i sezon.": {
    "ru": "Виды одежды, примерные размеры и сезон.",
    "uk": "Види одягу, орієнтовні розміри та сезон."
  },
  "Stan towaru": {
    "ru": "Состояние товара",
    "uk": "Стан товару"
  },
  "Klasa jakości, ślady użytkowania i możliwe wady.": {
    "ru": "Класс качества, следы носки и возможные дефекты.",
    "uk": "Клас якості, сліди носіння та можливі дефекти."
  },
  "Bele sortowanej odzieży używanej w magazynie EuroSortex": {
    "ru": "Тюки сортированной одежды секонд-хенд на складе EuroSortex",
    "uk": "Тюки сортованого одягу секонд-хенд на складі EuroSortex"
  },
  "Magazyn EuroSortex": {
    "ru": "Склад EuroSortex",
    "uk": "Склад EuroSortex"
  },
  "Sortowana odzież używana": {
    "ru": "Сортированная одежда секонд-хенд",
    "uk": "Сортований одяг секонд-хенд"
  },
  "Zapytaj o aktualną partię": {
    "ru": "Узнать о доступной партии",
    "uk": "Дізнатися про наявну партію"
  },
  "Kontakt przez WhatsApp": {
    "ru": "Связь через WhatsApp",
    "uk": "Зв’язок через WhatsApp"
  },
  "Zdjęcia w katalogu są przykładowe. Skład i stan dostępnej partii mogą się różnić.": {
    "ru": "В каталоге представлены примеры товара. Состав и состояние доступной партии могут отличаться.",
    "uk": "У каталозі наведено приклади товару. Склад і стан наявної партії можуть відрізнятися."
  },
  "WSPÓŁPRACA": {
    "ru": "СОТРУДНИЧЕСТВО",
    "uk": "СПІВПРАЦЯ"
  },
  "Od wyboru towaru": {
    "ru": "От выбора товара",
    "uk": "Від вибору товару"
  },
  "do dostawy.": {
    "ru": "до доставки.",
    "uk": "до доставки."
  },
  "Etapy zamówienia": {
    "ru": "Этапы заказа",
    "uk": "Етапи замовлення"
  },
  "Wybierz asortyment": {
    "ru": "Выберите ассортимент",
    "uk": "Виберіть асортимент"
  },
  "Podaj kategorię, ilość i miejscowość dostawy. Minimum to 50 kg każdej pozycji.": {
    "ru": "Укажите категорию, количество и город доставки. Минимум — 50 кг каждой позиции.",
    "uk": "Укажіть категорію, кількість і місто доставки. Мінімум — 50 кг кожної позиції."
  },
  "Poznaj ofertę": {
    "ru": "Получите предложение",
    "uk": "Отримайте пропозицію"
  },
  "Uzgodnimy aktualną partię, zdjęcia, cenę i koszt transportu przed Twoją decyzją.": {
    "ru": "Обсудим доступную партию, фотографии, цену и стоимость доставки до вашего решения.",
    "uk": "Обговоримо наявну партію, фотографії, ціну й вартість доставки до вашого рішення."
  },
  "Potwierdź zamówienie": {
    "ru": "Подтвердите заказ",
    "uk": "Підтвердьте замовлення"
  },
  "Po akceptacji oferty wystawiamy fakturę i ustalamy realizację dostawy.": {
    "ru": "После согласования предложения выставляем счёт и договариваемся о доставке.",
    "uk": "Після погодження пропозиції виставляємо рахунок і домовляємося про доставку."
  },
  "Przejdź do zapytania": {
    "ru": "Перейти к заявке",
    "uk": "Перейти до заявки"
  },
  "Warunki realizacji": {
    "ru": "Условия заказа",
    "uk": "Умови замовлення"
  },
  "Dostawa": {
    "ru": "Доставка",
    "uk": "Доставка"
  },
  "1–3 tygodnie": {
    "ru": "1–3 недели",
    "uk": "1–3 тижні"
  },
  "Od zaksięgowania pełnej przedpłaty, na terenie całej Polski.": {
    "ru": "После поступления полной предоплаты, по всей Польше.",
    "uk": "Після надходження повної передоплати, по всій Польщі."
  },
  "Płatność": {
    "ru": "Оплата",
    "uk": "Оплата"
  },
  "100% przedpłaty": {
    "ru": "100% предоплата",
    "uk": "100% передоплата"
  },
  "Przelewem na podstawie faktury, przed wysyłką.": {
    "ru": "Банковским переводом по счёту до отправки.",
    "uk": "Банківським переказом за рахунком до відправлення."
  },
  "Transport": {
    "ru": "Перевозка",
    "uk": "Перевезення"
  },
  "Wyceniany osobno": {
    "ru": "Рассчитывается отдельно",
    "uk": "Розраховується окремо"
  },
  "Opłaca go kupujący. Możliwy również odbiór własny.": {
    "ru": "Оплачивает покупатель. Также возможен самовывоз.",
    "uk": "Оплачує покупець. Також можливий самовивіз."
  },
  "Najważniejsze informacje przed pierwszym zamówieniem.": {
    "ru": "Главное перед первым заказом.",
    "uk": "Головне перед першим замовленням."
  },
  "dla swojego sklepu.": {
    "ru": "для своего магазина.",
    "uk": "для свого магазину."
  },
  "Zostaw kontakt. Omówimy dostępny asortyment, ilość i warunki dostawy.": {
    "ru": "Оставьте контакт. Обсудим доступный ассортимент, количество и условия доставки.",
    "uk": "Залиште контакт. Обговоримо наявний асортимент, кількість і умови доставки."
  },
  "Wolisz napisać na WhatsApp?": {
    "ru": "Удобнее написать в WhatsApp?",
    "uk": "Зручніше написати у WhatsApp?"
  },
  "Wyślij listę interesujących Cię towarów lub po prostu zadaj pytanie.": {
    "ru": "Пришлите список интересующих товаров или просто задайте вопрос.",
    "uk": "Надішліть список товарів, що вас цікавлять, або просто поставте запитання."
  },
  "Napisz na WhatsApp": {
    "ru": "Написать в WhatsApp",
    "uk": "Написати у WhatsApp"
  },
  "Telefon": {
    "ru": "Телефон",
    "uk": "Телефон"
  },
  "MAGAZYN W WARSZAWIE": {
    "ru": "СКЛАД В ВАРШАВЕ",
    "uk": "СКЛАД У ВАРШАВІ"
  },
  "Poznaj EuroSortex →": {
    "ru": "О EuroSortex →",
    "uk": "Про EuroSortex →"
  },
  "Wystarczy imię i kontakt. Pozostałe szczegóły możemy ustalić w rozmowie.": {
    "ru": "Достаточно имени и контакта. Остальные детали обсудим в разговоре.",
    "uk": "Достатньо імені й контакту. Решту деталей обговоримо в розмові."
  },
  "Podaj poprawny numer telefonu lub wybierz e-mail.": {
    "ru": "Укажите корректный номер телефона или выберите e-mail.",
    "uk": "Укажіть коректний номер телефону або виберіть e-mail."
  },
  "Imię lub nazwa firmy": {
    "ru": "Имя или название компании",
    "uk": "Ім’я або назва компанії"
  },
  "Jak się do Ciebie zwracać?": {
    "ru": "Как к вам обращаться?",
    "uk": "Як до вас звертатися?"
  },
  "Jak mamy się skontaktować?": {
    "ru": "Как с вами связаться?",
    "uk": "Як із вами зв’язатися?"
  },
  "Numer telefonu do WhatsApp": {
    "ru": "Номер телефона для WhatsApp",
    "uk": "Номер телефону для WhatsApp"
  },
  "Numer telefonu": {
    "ru": "Номер телефона",
    "uk": "Номер телефону"
  },
  "Adres e-mail": {
    "ru": "Адрес e-mail",
    "uk": "Адреса e-mail"
  },
  "Co Cię interesuje?": {
    "ru": "Что вас интересует?",
    "uk": "Що вас цікавить?"
  },
  "opcjonalnie · możesz wybrać kilka": {
    "ru": "необязательно · можно выбрать несколько",
    "uk": "необов’язково · можна вибрати кілька"
  },
  "Pomóżcie mi wybrać": {
    "ru": "Помогите с выбором",
    "uk": "Допоможіть із вибором"
  },
  "Łączna ilość, kg": {
    "ru": "Общее количество, кг",
    "uk": "Загальна кількість, кг"
  },
  "opcjonalnie": {
    "ru": "необязательно",
    "uk": "необов’язково"
  },
  "np. 100": {
    "ru": "например, 100",
    "uk": "наприклад, 100"
  },
  "Miejscowość dostawy": {
    "ru": "Город доставки",
    "uk": "Місто доставки"
  },
  "np. Poznań": {
    "ru": "например, Познань",
    "uk": "наприклад, Познань"
  },
  "Podaj orientacyjną ilość całego zamówienia lub zostaw puste. Minimum: 50 kg każdej wybranej pozycji.": {
    "ru": "Укажите примерный объём всего заказа или оставьте поле пустым. Минимум: 50 кг каждой выбранной позиции.",
    "uk": "Укажіть орієнтовний обсяг усього замовлення або залиште поле порожнім. Мінімум: 50 кг кожної вибраної позиції."
  },
  "Dodaj wiadomość": {
    "ru": "Добавить сообщение",
    "uk": "Додати повідомлення"
  },
  "Wiadomość": {
    "ru": "Сообщение",
    "uk": "Повідомлення"
  },
  "Np. szukam bluz i odzieży dziecięcej. Poproszę o zdjęcia dostępnych partii.": {
    "ru": "Например: ищу толстовки и детскую одежду. Пришлите фотографии доступных партий.",
    "uk": "Наприклад: шукаю світшоти й дитячий одяг. Надішліть фотографії наявних партій."
  },
  "Możesz też napisać na WhatsApp": {
    "ru": "Также можно написать в WhatsApp",
    "uk": "Також можна написати у WhatsApp"
  },
  "Wysyłasz zapytanie, nie składasz zamówienia. Cenę i dostawę uzgodnimy przed zakupem.": {
    "ru": "Это заявка на предложение. Цену и доставку согласуем до покупки.",
    "uk": "Це запит на пропозицію. Ціну й доставку погодимо до покупки."
  },
  "Polityka prywatności": {
    "ru": "Политика конфиденциальности",
    "uk": "Політика конфіденційності"
  },
  "Wybrany asortyment:": {
    "ru": "Выбранный ассортимент:",
    "uk": "Вибраний асортимент:"
  },
  "Możesz zmienić wybór poniżej.": {
    "ru": "Вы можете изменить выбор ниже.",
    "uk": "Ви можете змінити вибір нижче."
  },
  "O EUROSORTEX GROUP": {
    "ru": "О EUROSORTEX GROUP",
    "uk": "ПРО EUROSORTEX GROUP"
  },
  "w Warszawie.": {
    "ru": "в Варшаве.",
    "uk": "у Варшаві."
  },
  "Dostarczamy sortowaną odzież i obuwie używane z Europy do sklepów second-hand w całej Polsce. Współpracujemy wyłącznie z firmami.": {
    "ru": "Поставляем сортированную одежду и обувь секонд-хенд из Европы в магазины по всей Польше. Работаем только с компаниями.",
    "uk": "Постачаємо сортований одяг і взуття секонд-хенд із Європи до магазинів по всій Польщі. Працюємо лише з компаніями."
  },
  "Porozmawiajmy o współpracy": {
    "ru": "Обсудим сотрудничество",
    "uk": "Обговорімо співпрацю"
  },
  "Poznaj asortyment": {
    "ru": "Посмотреть ассортимент",
    "uk": "Переглянути асортимент"
  },
  "Bele sortowanej odzieży używanej w magazynie hurtowni EuroSortex w Warszawie": {
    "ru": "Тюки сортированной одежды секонд-хенд на оптовом складе EuroSortex в Варшаве",
    "uk": "Тюки сортованого одягу секонд-хенд на оптовому складі EuroSortex у Варшаві"
  },
  "KIM JESTEŚMY": {
    "ru": "КТО МЫ",
    "uk": "ХТО МИ"
  },
  "Dwa lata EuroSortex.": {
    "ru": "Два года EuroSortex.",
    "uk": "Два роки EuroSortex."
  },
  "Współpraca oparta na rozmowie.": {
    "ru": "Сотрудничество начинается с разговора.",
    "uk": "Співпраця починається з розмови."
  },
  "Od dwóch lat rozwijamy EuroSortex Group jako hurtownię dla sklepów z odzieżą używaną. Zależy nam na stałej współpracy: poznajemy potrzeby Twojego sklepu, omawiamy dostępną partię i ustalamy szczegóły zakupu. Niezależnie od tego, czy dopiero otwierasz sklep, czy uzupełniasz asortyment.": {
    "ru": "Два года мы развиваем EuroSortex Group как оптового поставщика для магазинов секонд-хенд. Стремимся к постоянному сотрудничеству: узнаём потребности вашего магазина, обсуждаем доступную партию и детали покупки. И с теми, кто только открывает магазин, и с теми, кто пополняет ассортимент.",
    "uk": "Два роки ми розвиваємо EuroSortex Group як оптового постачальника для магазинів секонд-хенд. Прагнемо постійної співпраці: дізнаємося про потреби вашого магазину, обговорюємо наявну партію та деталі покупки. І з тими, хто лише відкриває магазин, і з тими, хто поповнює асортимент."
  },
  "Zdjęcia aktualnej partii": {
    "ru": "Фотографии доступной партии",
    "uk": "Фотографії наявної партії"
  },
  "Na życzenie przesyłamy zdjęcia lub wideo dostępnego towaru i omawiamy jego skład oraz stan.": {
    "ru": "По запросу присылаем фото или видео доступного товара, обсуждаем его состав и состояние.",
    "uk": "На запит надсилаємо фото або відео наявного товару, обговорюємо його склад і стан."
  },
  "Jasne warunki zakupu": {
    "ru": "Понятные условия покупки",
    "uk": "Зрозумілі умови покупки"
  },
  "Przed zamówieniem potwierdzamy ilość, cenę i koszt dostawy do Twojego sklepu.": {
    "ru": "Перед заказом подтверждаем количество, цену и стоимость доставки в ваш магазин.",
    "uk": "Перед замовленням підтверджуємо кількість, ціну й вартість доставки до вашого магазину."
  },
  "Bezpośredni kontakt": {
    "ru": "Прямой контакт",
    "uk": "Прямий контакт"
  },
  "Rozmawiasz z nami o potrzebach swojego sklepu — przez telefon, WhatsApp lub e-mail.": {
    "ru": "Обсуждайте с нами потребности магазина по телефону, в WhatsApp или по e-mail.",
    "uk": "Обговорюйте з нами потреби магазину телефоном, у WhatsApp або через e-mail."
  },
  "WARSZAWA · CAŁA POLSKA": {
    "ru": "ВАРШАВА · ВСЯ ПОЛЬША",
    "uk": "ВАРШАВА · УСЯ ПОЛЬЩА"
  },
  "Magazyn w Warszawie.": {
    "ru": "Склад в Варшаве.",
    "uk": "Склад у Варшаві."
  },
  "Dostawa do sklepów w całej Polsce.": {
    "ru": "Доставка в магазины по всей Польше.",
    "uk": "Доставка до магазинів по всій Польщі."
  },
  "Organizację dostawy lub odbiór własny ustalamy indywidualnie. Przed przyjazdem do magazynu uzgodnij z nami termin i dostępność towaru.": {
    "ru": "Доставку или самовывоз согласовываем индивидуально. Перед визитом на склад уточните у нас время и наличие товара.",
    "uk": "Доставку або самовивіз погоджуємо індивідуально. Перед візитом на склад уточніть у нас час і наявність товару."
  },
  "Znajdziesz nas też na Instagramie": {
    "ru": "Мы также есть в Instagram",
    "uk": "Ми також є в Instagram"
  },
  "ADRES MAGAZYNU": {
    "ru": "АДРЕС СКЛАДА",
    "uk": "АДРЕСА СКЛАДУ"
  },
  "Sprawdź dojazd w Google Maps": {
    "ru": "Маршрут в Google Maps",
    "uk": "Маршрут у Google Maps"
  },
  "Dane firmy": {
    "ru": "Реквизиты компании",
    "uk": "Реквізити компанії"
  },
  "Siedziba rejestrowa:": {
    "ru": "Юридический адрес:",
    "uk": "Юридична адреса:"
  },
  "POROZMAWIAJMY": {
    "ru": "ОБСУДИМ",
    "uk": "ОБГОВОРІМО"
  },
  "Szukasz towaru do swojego sklepu?": {
    "ru": "Ищете товар для своего магазина?",
    "uk": "Шукаєте товар для свого магазину?"
  },
  "Zostaw kontakt. Porozmawiamy o potrzebach Twojego sklepu i dostępnej ofercie.": {
    "ru": "Оставьте контакт. Обсудим потребности вашего магазина и доступный ассортимент.",
    "uk": "Залиште контакт. Обговоримо потреби вашого магазину й наявний асортимент."
  },
  "Wolisz napisać bezpośrednio?": {
    "ru": "Удобнее написать напрямую?",
    "uk": "Зручніше написати напряму?"
  },
  "Sortowana odzież i obuwie z Europy. Wybierz towar i zapytaj o dostępną partię.": {
    "ru": "Сортированная одежда и обувь из Европы. Выберите товар и узнайте о доступной партии.",
    "uk": "Сортований одяг і взуття з Європи. Виберіть товар і дізнайтеся про наявну партію."
  },
  "Katalog hurtowy": {
    "ru": "Оптовый каталог",
    "uk": "Оптовий каталог"
  },
  "Wybierz asortyment do swojego sklepu": {
    "ru": "Выберите ассортимент для своего магазина",
    "uk": "Виберіть асортимент для свого магазину"
  },
  "Bluzy damskie i męskie w miejskim stylu.": {
    "ru": "Женские и мужские толстовки в городском стиле.",
    "uk": "Жіночі та чоловічі світшоти в міському стилі."
  },
  "Odzież damska, męska i dziecięca na zimę.": {
    "ru": "Женская, мужская и детская одежда на зиму.",
    "uk": "Жіночий, чоловічий і дитячий одяг на зиму."
  },
  "Odzież damska, męska i dziecięca, obuwie i dodatki.": {
    "ru": "Женская, мужская и детская одежда, обувь и аксессуары.",
    "uk": "Жіночий, чоловічий і дитячий одяг, взуття й аксесуари."
  },
  "Odzież dla dziewczynek i chłopców.": {
    "ru": "Одежда для девочек и мальчиков.",
    "uk": "Одяг для дівчаток і хлопчиків."
  },
  "Swetry i dzianiny męskie.": {
    "ru": "Мужские свитеры и трикотаж.",
    "uk": "Чоловічі светри та трикотаж."
  },
  "Swetry i dzianiny damskie.": {
    "ru": "Женские свитеры и трикотаж.",
    "uk": "Жіночі светри та трикотаж."
  },
  "Mix kurtek męskich i damskich.": {
    "ru": "Микс мужских и женских курток.",
    "uk": "Мікс чоловічих і жіночих курток."
  },
  "Sezonowe obuwie damskie i męskie.": {
    "ru": "Сезонная женская и мужская обувь.",
    "uk": "Сезонне жіноче та чоловіче взуття."
  },
  "Wyświetlono:": {
    "ru": "Показано:",
    "uk": "Показано:"
  },
  "z": {
    "ru": "из",
    "uk": "із"
  },
  "Poznaj kategorię": {
    "ru": "Подробнее о категории",
    "uk": "Докладніше про категорію"
  },
  "Ceny netto / kg": {
    "ru": "Цены без НДС / кг",
    "uk": "Ціни без ПДВ / кг"
  },
  "Minimum 50 kg": {
    "ru": "Минимум 50 кг",
    "uk": "Мінімум 50 кг"
  },
  "zł netto": {
    "ru": "zł без НДС",
    "uk": "zł без ПДВ"
  },
  "Zdjęcia i szczegóły": {
    "ru": "Фото и описание",
    "uk": "Фото й опис"
  },
  "Ceny netto. VAT i transport doliczamy osobno. Zdjęcia pokazują przykładowy asortyment — cenę, skład i dostępność partii potwierdzamy przed zamówieniem.": {
    "ru": "Цены без НДС. НДС и доставка оплачиваются отдельно. На фото — примеры ассортимента. Цену, состав и наличие партии подтверждаем перед заказом.",
    "uk": "Ціни без ПДВ. ПДВ і доставка оплачуються окремо. На фото — приклади асортименту. Ціну, склад і наявність партії підтверджуємо перед замовленням."
  },
  "zł/kg netto": {
    "ru": "zł/кг без НДС",
    "uk": "zł/кг без ПДВ"
  },
  "Od 50 kg ·": {
    "ru": "От 50 кг ·",
    "uk": "Від 50 кг ·"
  },
  "+ VAT i transport": {
    "ru": "+ НДС и доставка",
    "uk": "+ ПДВ і доставка"
  },
  "Dostawa w 1–3 tygodnie od 100% przedpłaty.": {
    "ru": "Доставка за 1–3 недели после 100% предоплаты.",
    "uk": "Доставка за 1–3 тижні після 100% передоплати."
  },
  "Przykład asortymentu ·": {
    "ru": "Пример ассортимента ·",
    "uk": "Приклад асортименту ·"
  },
  "02 / WYCENA Z DOSTAWĄ": {
    "ru": "02 / РАСЧЁТ С ДОСТАВКОЙ",
    "uk": "02 / РОЗРАХУНОК ІЗ ДОСТАВКОЮ"
  },
  "Opinie o współpracy": {
    "ru": "Отзывы о сотрудничестве",
    "uk": "Відгуки про співпрацю"
  },
  "O wyborze asortymentu, kontakcie i zaopatrzeniu sklepów second-hand.": {
    "ru": "О выборе ассортимента, общении и закупках для магазинов секонд-хенд.",
    "uk": "Про вибір асортименту, спілкування й закупівлі для магазинів секонд-хенд."
  },
  "Masz za sobą zamówienie u nas?": {
    "ru": "Уже заказывали у нас?",
    "uk": "Уже замовляли в нас?"
  },
  "Napisz swoją opinię": {
    "ru": "Оставить отзыв",
    "uk": "Залишити відгук"
  },
  "Informacja o przykładowych treściach": {
    "ru": "Информация о примерах",
    "uk": "Інформація про приклади"
  },
  "Przykładowe opinie": {
    "ru": "Примеры отзывов",
    "uk": "Приклади відгуків"
  },
  "Opinie, dane osób i zamówienia są fikcyjne. To prezentacja układu strony, nie rzeczywiste rekomendacje klientów.": {
    "ru": "Отзывы, данные людей и заказы вымышлены. Это пример оформления страницы, а не реальные рекомендации клиентов.",
    "uk": "Відгуки, дані людей і замовлення вигадані. Це приклад оформлення сторінки, а не справжні рекомендації клієнтів."
  },
  "Przykładowe opinie według asortymentu": {
    "ru": "Примеры отзывов по ассортименту",
    "uk": "Приклади відгуків за асортиментом"
  },
  "Filtruj przykłady według asortymentu": {
    "ru": "Фильтр примеров по ассортименту",
    "uk": "Фільтр прикладів за асортиментом"
  },
  "Opinie:": {
    "ru": "Отзывы:",
    "uk": "Відгуки:"
  },
  "Zamówienie": {
    "ru": "Заказ",
    "uk": "Замовлення"
  },
  "kg łącznie": {
    "ru": "кг всего",
    "uk": "кг загалом"
  },
  "POROZMAWIAJMY O WSPÓŁPRACY": {
    "ru": "ОБСУДИМ СОТРУДНИЧЕСТВО",
    "uk": "ОБГОВОРІМО СПІВПРАЦЮ"
  },
  "Dobierz asortyment do swojego sklepu.": {
    "ru": "Подберите ассортимент для своего магазина.",
    "uk": "Доберіть асортимент для свого магазину."
  },
  "Napisz, czego szukasz. Sprawdzimy dostępną ofertę i zdjęcia partii.": {
    "ru": "Напишите, что ищете. Уточним наличие товара и фотографии партий.",
    "uk": "Напишіть, що шукаєте. Уточнимо наявність товару й фотографії партій."
  },
  "Zobacz asortyment": {
    "ru": "Посмотреть ассортимент",
    "uk": "Переглянути асортимент"
  },
  "Mały sklep second-hand": {
    "ru": "Небольшой магазин секонд-хенд",
    "uk": "Невеликий магазин секонд-хенд"
  },
  "Sklep z odzieżą dziecięcą": {
    "ru": "Магазин детской одежды",
    "uk": "Магазин дитячого одягу"
  },
  "Sklep stacjonarny": {
    "ru": "Офлайн-магазин",
    "uk": "Офлайн-магазин"
  },
  "Butik second-hand": {
    "ru": "Бутик секонд-хенд",
    "uk": "Бутик секонд-хенд"
  },
  "Rodzinny second-hand": {
    "ru": "Семейный секонд-хенд",
    "uk": "Сімейний секонд-хенд"
  },
  "Sklep odzieżowy": {
    "ru": "Магазин одежды",
    "uk": "Магазин одягу"
  },
  "Sklep second-hand": {
    "ru": "Магазин секонд-хенд",
    "uk": "Магазин секонд-хенд"
  },
  "Osiedlowy sklep z odzieżą": {
    "ru": "Магазин одежды у дома",
    "uk": "Магазин одягу біля дому"
  },
  "Niewielki second-hand": {
    "ru": "Небольшой секонд-хенд",
    "uk": "Невеликий секонд-хенд"
  },
  "Osiedlowy second-hand": {
    "ru": "Секонд-хенд у дома",
    "uk": "Секонд-хенд біля дому"
  },
  "Sklep z odzieżą używaną": {
    "ru": "Магазин одежды секонд-хенд",
    "uk": "Магазин одягу секонд-хенд"
  },
  "Butik z odzieżą używaną": {
    "ru": "Бутик одежды секонд-хенд",
    "uk": "Бутик одягу секонд-хенд"
  },
  "Rodzinny sklep odzieżowy": {
    "ru": "Семейный магазин одежды",
    "uk": "Сімейний магазин одягу"
  },
  "Mały second-hand": {
    "ru": "Небольшой секонд-хенд",
    "uk": "Невеликий секонд-хенд"
  },
  "Pomoc przy pierwszym zamówieniu.": {
    "ru": "Помогли с первым заказом.",
    "uk": "Допомогли з першим замовленням."
  },
  "Na początek wybrałam mix odzieży i bluzy. Zdjęcia partii pomogły mi podjąć decyzję. Miałam sporo pytań, ale mogłam spokojnie ustalić szczegóły przed zakupem.": {
    "ru": "Для начала выбрала микс одежды и толстовки. Фотографии партии помогли определиться. Вопросов было много, но все детали удалось спокойно обсудить до покупки.",
    "uk": "Для початку вибрала мікс одягу й світшоти. Фотографії партії допомогли визначитися. Запитань було багато, але всі деталі вдалося спокійно обговорити до покупки."
  },
  "Uzupełnienie działu dziecięcego.": {
    "ru": "Пополнение детского отдела.",
    "uk": "Поповнення дитячого відділу."
  },
  "Wzięłam na próbę 50 kg odzieży dziecięcej. Różne kolory i fasony, choć rozmiarów nie było po równo. Przy kolejnej partii dopytam o większe dzieci. Kontakt konkretny.": {
    "ru": "Взяла на пробу 50 кг детской одежды. Разные цвета и фасоны, хотя размеров было не поровну. В следующий раз уточню насчёт вещей для детей постарше. Общение по делу.",
    "uk": "Взяла на пробу 50 кг дитячого одягу. Різні кольори й фасони, хоча розмірів було не порівну. Наступного разу уточню щодо речей для старших дітей. Спілкування по суті."
  },
  "Sprawnie i konkretnie.": {
    "ru": "Быстро и по делу.",
    "uk": "Швидко й по суті."
  },
  "Dostałem zdjęcia bluz, ustaliliśmy szczegóły i tyle — bez dziesięciu telefonów. Towar pasuje do mojego działu casual. Następnym razem zapytam też o męskie swetry.": {
    "ru": "Получил фотографии толстовок, согласовали детали — без десяти звонков. Товар подходит для моего отдела повседневной одежды. В следующий раз спрошу и про мужские свитеры.",
    "uk": "Отримав фотографії світшотів, погодили деталі — без десяти дзвінків. Товар підходить для мого відділу повсякденного одягу. Наступного разу запитаю й про чоловічі светри."
  },
  "Dzianiny do mojego butiku.": {
    "ru": "Трикотаж для моего бутика.",
    "uk": "Трикотаж для мого бутика."
  },
  "Wybrałam 75 kg swetrów damskich, bo klientki często o nie pytają. Nie każdy fason pasował do mojego sklepu, ale przed zakupem mogłam dopytać o skład partii. To było dla mnie ważniejsze niż sama cena.": {
    "ru": "Выбрала 75 кг женских свитеров — покупательницы часто их спрашивают. Не каждый фасон подошёл моему магазину, но до покупки я могла уточнить состав партии. Для меня это было важнее самой цены.",
    "uk": "Вибрала 75 кг жіночих светрів — покупчині часто їх запитують. Не кожен фасон підійшов моєму магазину, але до покупки я могла уточнити склад партії. Для мене це було важливіше за саму ціну."
  },
  "Towar na chłodniejsze miesiące.": {
    "ru": "Товар для холодного сезона.",
    "uk": "Товар для холодного сезону."
  },
  "Z żoną wybraliśmy mix zimowy i kurtki. Wcześniej omówiliśmy proporcje, bo u nas przeważa dział damski. Po dostawie posegregowaliśmy rzeczy pod własną ekspozycję.": {
    "ru": "С женой выбрали зимний микс и куртки. Заранее обсудили пропорции, потому что у нас преобладает женский отдел. После доставки рассортировали вещи под свою выкладку.",
    "uk": "З дружиною вибрали зимовий мікс і куртки. Заздалегідь обговорили пропорції, бо в нас переважає жіночий відділ. Після доставки розсортували речі під свою викладку."
  },
  "Obuwie na mały regał.": {
    "ru": "Обувь для небольшого стеллажа.",
    "uk": "Взуття для невеликого стелажа."
  },
  "Nie mam dużego działu z butami, więc zależało mi na obejrzeniu modeli przed decyzją. Zamówiłam obuwie sezonowe. Nadal sprawdzam, które rozmiary najlepiej pasują do potrzeb moich klientów.": {
    "ru": "Обувной отдел у меня небольшой, поэтому хотелось посмотреть модели до решения. Заказала сезонную обувь. Пока ещё выясняю, какие размеры больше нужны моим покупателям.",
    "uk": "Взуттєвий відділ у мене невеликий, тому хотілося переглянути моделі до рішення. Замовила сезонне взуття. Поки ще з’ясовую, які розміри більше потрібні моїм покупцям."
  },
  "Coś do męskiej części sklepu.": {
    "ru": "Пополнение мужского отдела.",
    "uk": "Поповнення чоловічого відділу."
  },
  "Zamówiłem swetry męskie, żeby uzupełnić dział. Szukałem klasycznych fasonów do codziennego noszenia. Na plus normalny kontakt i jasne ustalenia przed zamówieniem.": {
    "ru": "Заказал мужские свитеры для пополнения отдела. Искал классические фасоны на каждый день. Понравились нормальное общение и понятные договорённости до заказа.",
    "uk": "Замовив чоловічі светри для поповнення відділу. Шукав класичні фасони на щодень. Сподобалися нормальне спілкування й зрозумілі домовленості до замовлення."
  },
  "Mix jako baza asortymentu.": {
    "ru": "Микс как основа ассортимента.",
    "uk": "Мікс як основа асортименту."
  },
  "Do 150 kg mixu odzieży dobrałam 50 kg damskich swetrów. U mnie kupują różne klientki, więc taki zestaw ma sens. Część rzeczy zostawiłam na kolejną zmianę ekspozycji.": {
    "ru": "К 150 кг микса одежды добавила 50 кг женских свитеров. Покупательницы у меня разные, поэтому такой набор подходит. Часть вещей оставила до следующей смены выкладки.",
    "uk": "До 150 кг міксу одягу додала 50 кг жіночих светрів. Покупчині в мене різні, тому такий набір підходить. Частину речей залишила до наступної зміни викладки."
  },
  "Czas na spokojny wybór.": {
    "ru": "Можно спокойно выбрать.",
    "uk": "Можна спокійно вибрати."
  },
  "O kurtki dopytywałam kilka razy. Mogłam ustalić szczegóły przed decyzją, bez pośpiechu. Następnym razem wcześniej zapytam o dostępność, żeby lepiej zaplanować zmianę wystawy.": {
    "ru": "Про куртки уточняла несколько раз. Получилось обсудить детали до решения, без спешки. В следующий раз заранее спрошу о наличии, чтобы лучше спланировать смену витрины.",
    "uk": "Про куртки уточнювала кілька разів. Вдалося обговорити деталі до рішення, без поспіху. Наступного разу заздалегідь запитаю про наявність, щоб краще спланувати зміну вітрини."
  },
  "Dwa działy w jednym zamówieniu.": {
    "ru": "Два отдела в одном заказе.",
    "uk": "Два відділи в одному замовленні."
  },
  "Potrzebowałam dziecięcych rzeczy i bluz dla dorosłych. Wzięłam po 50 kg, bo na zapleczu mam mało miejsca. Najpierw dopytałam o obie partie na WhatsAppie — tak było mi najwygodniej.": {
    "ru": "Нужны были детские вещи и толстовки для взрослых. Взяла по 50 кг — в подсобке мало места. Сначала уточнила обе партии в WhatsApp, мне так удобнее всего.",
    "uk": "Потрібні були дитячі речі й світшоти для дорослих. Взяла по 50 кг — у підсобці мало місця. Спочатку уточнила обидві партії у WhatsApp, мені так найзручніше."
  },
  "Wiedziałem, o co zapytać.": {
    "ru": "Знал, что нужно уточнить.",
    "uk": "Знав, що потрібно уточнити."
  },
  "Przy 200 kg mixu chciałem wcześniej zobaczyć zdjęcia i znać koszt transportu. Ustaliliśmy to przed decyzją. Sam mix i tak trzeba potem przejrzeć i poukładać pod swój sklep.": {
    "ru": "При заказе 200 кг микса хотел заранее увидеть фотографии и узнать стоимость перевозки. Всё уточнили до решения. Сам микс потом всё равно нужно просмотреть и разобрать под свой магазин.",
    "uk": "При замовленні 200 кг міксу хотів заздалегідь побачити фотографії й дізнатися вартість перевезення. Усе уточнили до рішення. Сам мікс потім однаково потрібно переглянути й розібрати під свій магазин."
  },
  "Swetry na zmianę ekspozycji.": {
    "ru": "Свитеры для новой выкладки.",
    "uk": "Светри для нової викладки."
  },
  "Zależało mi na dzianinach, nie na całym mixie. Zamówiłam 100 kg damskich swetrów. Były różne fasony, więc na wieszaki wybrałam najpierw te, o które zwykle pytają moje klientki.": {
    "ru": "Мне нужен был именно трикотаж. Заказала 100 кг женских свитеров. Фасоны разные, поэтому сначала развесила те, которые обычно спрашивают мои покупательницы.",
    "uk": "Мені потрібен був саме трикотаж. Замовила 100 кг жіночих светрів. Фасони різні, тому спочатку розвісила ті, які зазвичай запитують мої покупчині."
  },
  "Najpierw ustalenia, potem zakup.": {
    "ru": "Сначала договорились, потом купили.",
    "uk": "Спочатку домовилися, потім купили."
  },
  "Braliśmy mix zimowy i męskie swetry. Przed zamówieniem zapytałem o termin, bo musiałem zaplanować miejsce na towar. Dobrze, że dało się omówić wszystko w jednej rozmowie.": {
    "ru": "Брали зимний микс и мужские свитеры. Перед заказом спросил о сроках — нужно было подготовить место для товара. Хорошо, что всё удалось обсудить за один разговор.",
    "uk": "Брали зимовий мікс і чоловічі светри. Перед замовленням запитав про терміни — потрібно було підготувати місце для товару. Добре, що все вдалося обговорити за одну розмову."
  },
  "Na początek mniejsza partia.": {
    "ru": "Для начала небольшая партия.",
    "uk": "Для початку невелика партія."
  },
  "Wybrałam 50 kg obuwia. Nie chciałam od razu zapełniać całego regału jednym zakupem. Dopytałam o sezon i rozmiary; na zdjęciach łatwiej było mi ocenić, czy to kierunek dla mojego sklepu.": {
    "ru": "Выбрала 50 кг обуви. Не хотела сразу заполнять весь стеллаж одной закупкой. Уточнила сезон и размеры; по фотографиям было проще понять, подходит ли это моему магазину.",
    "uk": "Вибрала 50 кг взуття. Не хотіла одразу заповнювати весь стелаж однією закупівлею. Уточнила сезон і розміри; за фотографіями було простіше зрозуміти, чи підходить це моєму магазину."
  },
  "Kurtki i bluzy zamiast kolejnego mixu.": {
    "ru": "Куртки и толстовки вместо ещё одного микса.",
    "uk": "Куртки й світшоти замість ще одного міксу."
  },
  "Tym razem potrzebowałam konkretnych kategorii: 100 kg odzieży wierzchniej i 50 kg bluz. Miałam kilka pytań o stan rzeczy. Odpowiedzi pomogły mi zdecydować, co wziąć na tę dostawę.": {
    "ru": "В этот раз нужны были конкретные категории: 100 кг верхней одежды и 50 кг толстовок. Было несколько вопросов о состоянии вещей. Ответы помогли решить, что взять в эту поставку.",
    "uk": "Цього разу потрібні були конкретні категорії: 100 кг верхнього одягу й 50 кг світшотів. Було кілька запитань про стан речей. Відповіді допомогли вирішити, що взяти в цю поставку."
  },
  "Dodaj ilość, dostawę lub pytanie": {
    "ru": "Добавить объём, доставку или вопрос",
    "uk": "Додати обсяг, доставку або запитання"
  },
  "Minimum 50 kg. Ilość możesz ustalić z nami później.": {
    "ru": "Минимум 50 кг. Объём можно уточнить с нами позже.",
    "uk": "Мінімум 50 кг. Обсяг можна уточнити з нами пізніше."
  },
  "Zostaw kontakt. Potwierdzimy dostępną partię, prześlemy zdjęcia i omówimy dostawę.": {
    "ru": "Оставьте контакт. Подтвердим доступную партию, пришлём фотографии и обсудим доставку.",
    "uk": "Залиште контакт. Підтвердимо доступну партію, надішлемо фотографії та обговоримо доставку."
  },
  "Wolisz porozmawiać od razu?": {
    "ru": "Хотите обсудить сразу?",
    "uk": "Хочете обговорити одразу?"
  }
};

export const storefront = (locale: Locale) => (text: string): string => {
  if (locale === 'pl' || locale === 'en') return text;
  if (!copy[text]) throw new Error(`Missing storefront translation: ${text}`);
  return copy[text][locale];
};

export const productLabel = (locale: Locale, name: string): string => {
  const label = polishProductShortNames[name];
  return label ? storefront(locale)(label) : name;
};
