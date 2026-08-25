import type { Locale } from './locales';

export const contact = {
  phoneDisplay: '+48 787 000 980',
  phoneE164: '+48787000980',
  whatsappNumber: '48787000980',
  email: 'eurosortexgroup@gmail.com',
  instagramUrl: 'https://instagram.com/eurosortexgroup/',
  workingHours: '08:00–15:00',
} as const;

export const company = {
  brandName: 'EuroSortex Group',
  legalName: 'TYSZKIEWICZ SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  registeredOffice: {
    street: 'ul. Ludwika Kondratowicza 25',
    postalCode: '03-285',
    city: 'Warszawa',
  },
  identifiers: {
    nip: '5242925827',
    krs: '0000923508',
    regon: '52002038800000',
  },
  registryCourt:
    'Sąd Rejonowy dla m.st. Warszawy w Warszawie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego',
  shareCapital: '5 000,00 PLN',
  warehouse: {
    street: 'ul. Jagiellońska 88',
    postalCode: '00-992',
    city: 'Warszawa',
  },
} as const;

export type WhatsappMessage = 'general' | 'photos' | 'transport';

const messages: Record<Locale, Record<WhatsappMessage, string>> = {
  pl: {
    general: 'Dzień dobry, proszę o aktualną ofertę i zdjęcia dostępnych partii',
    photos: `Dzień dobry! Proszę o zdjęcia aktualnie dostępnej partii.

Towar / asortyment: [wpisz]
Planowana ilość (kg): [wpisz]
Firma / sklep: [wpisz]
Miejscowość dostawy: [wpisz]`,
    transport: `Dzień dobry! Chcę omówić zamówienie i transport.

Towar / asortyment: [wpisz]
Planowana ilość (kg): [wpisz]
Miejscowość dostawy: [wpisz]
Transport: potrzebuję pomocy / własny przewoźnik / odbiór własny`,
  },
  ru: {
    general: `Здравствуйте! Хочу получить оптовое предложение EuroSortex.

Товар / ассортимент: [укажите]
Планируемый объём (кг): [укажите]
Компания / магазин: [укажите]
Город доставки: [укажите]

Подскажите, пожалуйста, наличие и актуальную цену.`,
    photos: `Здравствуйте! Пришлите, пожалуйста, фотографии доступной партии.

Товар / ассортимент: [укажите]
Планируемый объём (кг): [укажите]
Компания / магазин: [укажите]
Город доставки: [укажите]`,
    transport: `Здравствуйте! Хочу обсудить заказ и транспорт.

Товар / ассортимент: [укажите]
Планируемый объём (кг): [укажите]
Город доставки: [укажите]
Транспорт: нужна помощь / свой перевозчик / самовывоз`,
  },
  uk: {
    general: `Добрий день! Хочу отримати оптову пропозицію EuroSortex.

Товар / асортимент: [вкажіть]
Планований обсяг (кг): [вкажіть]
Компанія / магазин: [вкажіть]
Місто доставки: [вкажіть]

Підкажіть, будь ласка, наявність та актуальну ціну.`,
    photos: `Добрий день! Надішліть, будь ласка, фотографії доступної партії.

Товар / асортимент: [вкажіть]
Планований обсяг (кг): [вкажіть]
Компанія / магазин: [вкажіть]
Місто доставки: [вкажіть]`,
    transport: `Добрий день! Хочу обговорити замовлення та транспорт.

Товар / асортимент: [вкажіть]
Планований обсяг (кг): [вкажіть]
Місто доставки: [вкажіть]
Транспорт: потрібна допомога / власний перевізник / самовивіз`,
  },
  en: {
    general: `Hello! I would like a wholesale offer from EuroSortex.

Product / assortment: [enter]
Planned quantity (kg): [enter]
Company / shop: [enter]
Delivery city: [enter]

Please confirm availability and the current price.`,
    photos: `Hello! Please send photos of the currently available batch.

Product / assortment: [enter]
Planned quantity (kg): [enter]
Company / shop: [enter]
Delivery city: [enter]`,
    transport: `Hello! I would like to discuss an order and transport.

Product / assortment: [enter]
Planned quantity (kg): [enter]
Delivery city: [enter]
Transport: help needed / own carrier / pickup`,
  },
};

export function whatsappUrl(message: WhatsappMessage | string, locale: Locale = 'pl'): string {
  const text = message in messages[locale] ? messages[locale][message as WhatsappMessage] : message;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function productWhatsappUrl(productName: string, locale: Locale): string {
  const text: Record<Locale, string> = {
    pl: `Dzień dobry! Interesuje mnie ${productName}.

Planowana ilość (kg): [wpisz]
Firma / sklep: [wpisz]
Miejscowość dostawy: [wpisz]

Proszę o potwierdzenie dostępności, aktualnej ceny i zdjęcia partii.`,
    ru: `Здравствуйте! Меня интересует ${productName}.

Планируемый объём (кг): [укажите]
Компания / магазин: [укажите]
Город доставки: [укажите]

Подтвердите, пожалуйста, наличие, актуальную цену и пришлите фото партии.`,
    uk: `Добрий день! Мене цікавить ${productName}.

Планований обсяг (кг): [вкажіть]
Компанія / магазин: [вкажіть]
Місто доставки: [вкажіть]

Підтвердьте, будь ласка, наявність, актуальну ціну та надішліть фото партії.`,
    en: `Hello! I am interested in ${productName}.

Planned quantity (kg): [enter]
Company / shop: [enter]
Delivery city: [enter]

Please confirm availability and the current price, and send batch photos.`,
  };
  return whatsappUrl(text[locale], locale);
}
