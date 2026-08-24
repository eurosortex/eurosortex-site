import type { Locale } from '../config/locales';

export interface BlogCopy {
  dateLocale: string;
  metaTitle: string;
  metaDescription: string;
  latest: string;
  news: string;
  emptyTitle: string;
  emptyText: string;
  readArticle: string;
  minuteShort: string;
  pagesLabel: string;
  pageLabel: string;
  previousPage: string;
  nextPage: string;
  noPreviousPage: string;
  noNextPage: string;
  offerEyebrow: string;
  offerTitle: string;
  offerText: string;
  offerFactsLabel: string;
  offerFacts: [string, string, string];
  offerAction: string;
  backToArticles: string;
  readingTime: string;
  toc: string;
  viewOffer: string;
  currentBatches: string;
  articleCtaTitle: string;
  articleCtaText: string;
  whatsappAction: string;
  related: string;
}

export const blogCopy: Record<Locale, BlogCopy> = {
  pl: {
    dateLocale: 'pl-PL',
    metaTitle: 'Blog o hurtowej odzieży używanej | EuroSortex',
    metaDescription: 'Praktyczne porady dla sklepów second-hand: wybór dostawcy, gatunki odzieży używanej, planowanie zamówień i sprzedaż asortymentu.',
    latest: 'NAJNOWSZE INFORMACJE', news: 'Aktualności', emptyTitle: 'Nowe artykuły już wkrótce', emptyText: 'Przygotowujemy praktyczne materiały dla sklepów second-hand.', readArticle: 'Czytaj artykuł', minuteShort: 'min',
    pagesLabel: 'Strony bloga', pageLabel: 'Strona', previousPage: 'Poprzednia strona', nextPage: 'Następna strona', noPreviousPage: 'Brak poprzedniej strony', noNextPage: 'Brak następnej strony',
    offerEyebrow: 'AKTUALNA OFERTA', offerTitle: 'Wiedza jest ważna. Dobra partia — jeszcze ważniejsza.', offerText: 'Napisz na WhatsApp. Prześlemy aktualną ofertę, zdjęcia i informacje o dostępności.', offerFactsLabel: 'Warunki oferty', offerFacts: ['Minimum 20 kg', 'Zdjęcia partii', 'Dostawa w Polsce'], offerAction: 'Poproś o ofertę',
    backToArticles: 'Wszystkie artykuły', readingTime: 'min czytania', toc: 'Spis treści', viewOffer: 'Zobacz ofertę', currentBatches: 'AKTUALNE PARTIE', articleCtaTitle: 'Sprawdź towar dostępny dla Twojego sklepu', articleCtaText: 'Wyślemy zdjęcia, aktualną cenę oraz informacje o ilości i gatunku.', whatsappAction: 'Zapytaj na WhatsApp', related: 'Przeczytaj również',
  },
  ru: {
    dateLocale: 'ru-RU',
    metaTitle: 'Блог об оптовой одежде second-hand | EuroSortex',
    metaDescription: 'Практические материалы для магазинов second-hand: выбор поставщика, качество одежды, планирование закупок и продажи.',
    latest: 'ПОСЛЕДНИЕ МАТЕРИАЛЫ', news: 'Статьи', emptyTitle: 'Новые статьи скоро появятся', emptyText: 'Мы готовим практические материалы для магазинов second-hand.', readArticle: 'Читать статью', minuteShort: 'мин',
    pagesLabel: 'Страницы блога', pageLabel: 'Страница', previousPage: 'Предыдущая страница', nextPage: 'Следующая страница', noPreviousPage: 'Предыдущей страницы нет', noNextPage: 'Следующей страницы нет',
    offerEyebrow: 'АКТУАЛЬНОЕ ПРЕДЛОЖЕНИЕ', offerTitle: 'Знания важны. Хорошая партия — ещё важнее.', offerText: 'Напишите в WhatsApp. Отправим актуальное предложение, фотографии и информацию о наличии.', offerFactsLabel: 'Условия предложения', offerFacts: ['Минимум 20 кг', 'Фото партии', 'Доставка по Польше'], offerAction: 'Запросить предложение',
    backToArticles: 'Все статьи', readingTime: 'мин чтения', toc: 'Содержание', viewOffer: 'Смотреть ассортимент', currentBatches: 'АКТУАЛЬНЫЕ ПАРТИИ', articleCtaTitle: 'Уточните, какой товар доступен для вашего магазина', articleCtaText: 'Отправим фотографии, актуальную цену, количество и сорт.', whatsappAction: 'Спросить в WhatsApp', related: 'Читайте также',
  },
  uk: {
    dateLocale: 'uk-UA',
    metaTitle: 'Блог про оптовий одяг second-hand | EuroSortex',
    metaDescription: 'Практичні матеріали для магазинів second-hand: вибір постачальника, якість одягу, планування закупівель і продажі.',
    latest: 'ОСТАННІ МАТЕРІАЛИ', news: 'Статті', emptyTitle: 'Нові статті незабаром', emptyText: 'Ми готуємо практичні матеріали для магазинів second-hand.', readArticle: 'Читати статтю', minuteShort: 'хв',
    pagesLabel: 'Сторінки блогу', pageLabel: 'Сторінка', previousPage: 'Попередня сторінка', nextPage: 'Наступна сторінка', noPreviousPage: 'Попередньої сторінки немає', noNextPage: 'Наступної сторінки немає',
    offerEyebrow: 'АКТУАЛЬНА ПРОПОЗИЦІЯ', offerTitle: 'Знання важливі. Хороша партія — ще важливіша.', offerText: 'Напишіть у WhatsApp. Надішлемо актуальну пропозицію, фотографії та інформацію про наявність.', offerFactsLabel: 'Умови пропозиції', offerFacts: ['Мінімум 20 кг', 'Фото партії', 'Доставка Польщею'], offerAction: 'Запросити пропозицію',
    backToArticles: 'Усі статті', readingTime: 'хв читання', toc: 'Зміст', viewOffer: 'Переглянути асортимент', currentBatches: 'АКТУАЛЬНІ ПАРТІЇ', articleCtaTitle: 'Уточніть, який товар доступний для вашого магазину', articleCtaText: 'Надішлемо фотографії, актуальну ціну, кількість і ґатунок.', whatsappAction: 'Запитати у WhatsApp', related: 'Читайте також',
  },
  en: {
    dateLocale: 'en-GB',
    metaTitle: 'Wholesale second-hand clothing blog | EuroSortex',
    metaDescription: 'Practical guidance for second-hand shops: choosing suppliers, clothing grades, order planning and assortment sales.',
    latest: 'LATEST INSIGHTS', news: 'Articles', emptyTitle: 'New articles are coming soon', emptyText: 'We are preparing practical guidance for second-hand shops.', readArticle: 'Read article', minuteShort: 'min',
    pagesLabel: 'Blog pages', pageLabel: 'Page', previousPage: 'Previous page', nextPage: 'Next page', noPreviousPage: 'No previous page', noNextPage: 'No next page',
    offerEyebrow: 'CURRENT OFFER', offerTitle: 'Knowledge matters. A good batch matters even more.', offerText: 'Message us on WhatsApp. We will send the current offer, photos and availability details.', offerFactsLabel: 'Offer terms', offerFacts: ['20 kg minimum', 'Batch photos', 'Delivery in Poland'], offerAction: 'Request an offer',
    backToArticles: 'All articles', readingTime: 'min read', toc: 'Contents', viewOffer: 'View assortment', currentBatches: 'CURRENT BATCHES', articleCtaTitle: 'Check what is available for your shop', articleCtaText: 'We will send photos, the current price, quantity and grade details.', whatsappAction: 'Ask on WhatsApp', related: 'Read next',
  },
};
