import type { Locale } from '../config/locales';

interface UiContent {
  home: string;
  mainNav: string;
  footerNav: string;
  menu: string;
  skip: string;
  photo: string;
  filterCatalog: string;
  bookCall: string;
  managerTitle: string;
  managerText: string;
  managerAction: string;
  wholesaleMinimum: string;
  phone: string;
  language: string;
  paymentPhotoNote: string;
}

export const ui: Record<Locale, UiContent> = {
  pl: {
    home: 'strona główna', mainNav: 'Nawigacja główna', footerNav: 'Nawigacja w stopce', menu: 'Menu', skip: 'Przejdź do treści', photo: 'Zdjęcie', filterCatalog: 'Filtruj asortyment według kategorii', bookCall: 'Umów rozmowę', managerTitle: 'Nie wiesz, który asortyment wybrać?', managerText: 'Napisz, jakiego towaru szukasz i jaki wolumen Cię interesuje. Manager pomoże dobrać odpowiednią pozycję.', managerAction: 'Porozmawiaj z managerem na WhatsApp', wholesaleMinimum: 'Sprzedaż wyłącznie hurtowa B2B. Minimalne zamówienie: 20 kg.', phone: 'Telefon', language: 'Język', paymentPhotoNote: 'Przed płatnością możesz poprosić o zdjęcia lub wideo dostępnej partii.',
  },
  ru: {
    home: 'главная страница', mainNav: 'Основная навигация', footerNav: 'Навигация в подвале', menu: 'Меню', skip: 'Перейти к содержанию', photo: 'Фото', filterCatalog: 'Фильтр ассортимента по категории', bookCall: 'Договориться о звонке', managerTitle: 'Не знаете, какой ассортимент выбрать?', managerText: 'Напишите, какой товар и объём вас интересуют. Менеджер поможет подобрать подходящую позицию.', managerAction: 'Обсудить с менеджером в WhatsApp', wholesaleMinimum: 'Только оптовые продажи B2B. Минимальный заказ: 20 кг.', phone: 'Телефон', language: 'Язык', paymentPhotoNote: 'До оплаты можно запросить фото или видео доступной партии.',
  },
  uk: {
    home: 'головна сторінка', mainNav: 'Основна навігація', footerNav: 'Навігація у футері', menu: 'Меню', skip: 'Перейти до вмісту', photo: 'Фото', filterCatalog: 'Фільтрувати асортимент за категорією', bookCall: 'Домовитися про дзвінок', managerTitle: 'Не знаєте, який асортимент обрати?', managerText: 'Напишіть, який товар та обсяг вас цікавлять. Менеджер допоможе підібрати відповідну позицію.', managerAction: 'Обговорити з менеджером у WhatsApp', wholesaleMinimum: 'Лише оптовий продаж B2B. Мінімальне замовлення: 20 кг.', phone: 'Телефон', language: 'Мова', paymentPhotoNote: 'До оплати можна попросити фото або відео доступної партії.',
  },
  en: {
    home: 'home page', mainNav: 'Main navigation', footerNav: 'Footer navigation', menu: 'Menu', skip: 'Skip to content', photo: 'Photo', filterCatalog: 'Filter assortment by category', bookCall: 'Book a call', managerTitle: 'Not sure which assortment to choose?', managerText: 'Tell us what goods and volume you need. A manager will help you choose the right line.', managerAction: 'Talk to a manager on WhatsApp', wholesaleMinimum: 'Wholesale B2B only. Minimum order: 20 kg.', phone: 'Phone', language: 'Language', paymentPhotoNote: 'Before payment, you can request photos or video of the available batch.',
  },
};
