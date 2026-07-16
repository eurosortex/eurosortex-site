import type { Locale } from './locales';

export const contact = {
  phoneDisplay: '+48 787 000 980',
  phoneE164: '+48787000980',
  whatsappNumber: '48787000980',
  email: 'eurosortexgroup@gmail.com',
  workingHours: '08:00–15:00',
} as const;

export type WhatsappMessage = 'general' | 'photos' | 'transport';

const messages: Record<Locale, Record<WhatsappMessage, string>> = {
  pl: {
    general: 'Dzień dobry, proszę o informację o aktualnie dostępnych partiach.',
    photos: 'Dzień dobry, proszę o zdjęcia aktualnie dostępnych partii.',
    transport: 'Dzień dobry, chcę omówić zamówienie i warunki transportu.',
  },
  ru: {
    general: 'Здравствуйте! Подскажите, какие партии сейчас доступны?',
    photos: 'Здравствуйте! Пришлите, пожалуйста, фотографии доступных партий.',
    transport: 'Здравствуйте! Хочу обсудить заказ и условия перевозки.',
  },
  uk: {
    general: 'Добрий день! Підкажіть, які партії зараз доступні?',
    photos: 'Добрий день! Надішліть, будь ласка, фотографії доступних партій.',
    transport: 'Добрий день! Хочу обговорити замовлення й умови перевезення.',
  },
  en: {
    general: 'Hello! Please tell me which batches are currently available.',
    photos: 'Hello! Please send photos of the currently available batches.',
    transport: 'Hello! I would like to discuss an order and transport terms.',
  },
};

export function whatsappUrl(message: WhatsappMessage | string, locale: Locale = 'pl'): string {
  const text = message in messages[locale] ? messages[locale][message as WhatsappMessage] : message;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function productWhatsappUrl(productName: string, locale: Locale): string {
  const text: Record<Locale, string> = {
    pl: `Dzień dobry, interesuje mnie ${productName}. Proszę o potwierdzenie dostępności i aktualnej ceny.`,
    ru: `Здравствуйте! Меня интересует ${productName}. Подтвердите, пожалуйста, наличие и актуальную цену.`,
    uk: `Добрий день! Мене цікавить ${productName}. Підтвердьте, будь ласка, наявність і актуальну ціну.`,
    en: `Hello! I am interested in ${productName}. Please confirm availability and the current price.`,
  };
  return whatsappUrl(text[locale], locale);
}
