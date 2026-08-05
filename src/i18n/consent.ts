import type { Locale } from '../config/locales';

interface ConsentCopy {
  title: string;
  description: string;
  acceptAll: string;
  rejectOptional: string;
  settings: string;
  settingsTitle: string;
  necessaryTitle: string;
  necessaryDescription: string;
  analyticsTitle: string;
  analyticsDescription: string;
  advertisingTitle: string;
  advertisingDescription: string;
  alwaysActive: string;
  save: string;
  close: string;
  reopen: string;
}

export const consentCopy: Record<Locale, ConsentCopy> = {
  pl: {
    title: 'Ustawienia prywatności',
    description:
      'Za Twoją zgodą używamy plików cookie i podobnych technologii do analityki oraz pomiaru reklam. Wybór możesz później zmienić.',
    acceptAll: 'Akceptuję wszystkie',
    rejectOptional: 'Tylko niezbędne',
    settings: 'Dostosuj',
    settingsTitle: 'Wybierz zakres zgody',
    necessaryTitle: 'Niezbędne',
    necessaryDescription: 'Zapamiętują ustawienia prywatności i zapewniają podstawowe działanie strony.',
    analyticsTitle: 'Analityka',
    analyticsDescription: 'Pomaga nam zrozumieć, jak odwiedzający korzystają ze strony.',
    advertisingTitle: 'Pomiar reklam',
    advertisingDescription: 'Pozwala mierzyć skuteczność kampanii i tworzyć grupy odbiorców.',
    alwaysActive: 'Zawsze aktywne',
    save: 'Zapisz wybór',
    close: 'Zamknij ustawienia',
    reopen: 'Ustawienia prywatności',
  },
  ru: {
    title: 'Настройки конфиденциальности',
    description:
      'С вашего согласия мы используем cookie и похожие технологии для аналитики и измерения рекламы. Выбор можно изменить позже.',
    acceptAll: 'Принять все',
    rejectOptional: 'Только необходимые',
    settings: 'Настроить',
    settingsTitle: 'Выберите согласия',
    necessaryTitle: 'Необходимые',
    necessaryDescription: 'Сохраняют настройки конфиденциальности и обеспечивают базовую работу сайта.',
    analyticsTitle: 'Аналитика',
    analyticsDescription: 'Помогает понять, как посетители пользуются сайтом.',
    advertisingTitle: 'Измерение рекламы',
    advertisingDescription: 'Позволяет оценивать кампании и создавать рекламные аудитории.',
    alwaysActive: 'Всегда включены',
    save: 'Сохранить выбор',
    close: 'Закрыть настройки',
    reopen: 'Настройки конфиденциальности',
  },
  uk: {
    title: 'Налаштування конфіденційності',
    description:
      'За вашою згодою ми використовуємо cookie та схожі технології для аналітики й вимірювання реклами. Вибір можна змінити пізніше.',
    acceptAll: 'Прийняти всі',
    rejectOptional: 'Лише необхідні',
    settings: 'Налаштувати',
    settingsTitle: 'Оберіть згоди',
    necessaryTitle: 'Необхідні',
    necessaryDescription: 'Зберігають налаштування конфіденційності та забезпечують базову роботу сайту.',
    analyticsTitle: 'Аналітика',
    analyticsDescription: 'Допомагає зрозуміти, як відвідувачі користуються сайтом.',
    advertisingTitle: 'Вимірювання реклами',
    advertisingDescription: 'Дає змогу оцінювати кампанії та створювати рекламні аудиторії.',
    alwaysActive: 'Завжди ввімкнені',
    save: 'Зберегти вибір',
    close: 'Закрити налаштування',
    reopen: 'Налаштування конфіденційності',
  },
  en: {
    title: 'Privacy settings',
    description:
      'With your consent, we use cookies and similar technologies for analytics and advertising measurement. You can change your choice later.',
    acceptAll: 'Accept all',
    rejectOptional: 'Necessary only',
    settings: 'Customise',
    settingsTitle: 'Choose your consent',
    necessaryTitle: 'Necessary',
    necessaryDescription: 'Remember your privacy settings and provide the site’s basic functionality.',
    analyticsTitle: 'Analytics',
    analyticsDescription: 'Helps us understand how visitors use the website.',
    advertisingTitle: 'Advertising measurement',
    advertisingDescription: 'Lets us measure campaigns and create advertising audiences.',
    alwaysActive: 'Always active',
    save: 'Save selection',
    close: 'Close settings',
    reopen: 'Privacy settings',
  },
};
