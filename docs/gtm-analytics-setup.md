# EuroSortex: GTM, GA4 и рекламная аналитика

Этот документ описывает настройку контейнера `GTM-WJ29JSMT` для событий, которые сайт уже отправляет в `dataLayer`.

Официальные справочники:

- [Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)
- [Google Tag Manager dataLayer](https://developers.google.com/tag-platform/tag-manager/datalayer)
- [Рекомендуемые события GA4](https://support.google.com/analytics/answer/9267735)
- [Проверка Consent Mode в Tag Assistant](https://developers.google.com/tag-platform/security/guides/consent-debugging)

## 1. Что уже реализовано на сайте

- Google Tag Manager загружается на всех языковых версиях.
- Consent Mode v2 задаёт `denied` до выбора посетителя.
- Выбор хранится 180 дней в first-party cookie `eurosortex_consent`.
- Отдельно управляются согласия на аналитику и рекламное измерение.
- При отказе включён `ads_data_redaction`; для рекламных идентификаторов включён `url_passthrough`.
- В `dataLayer` нет телефона, email, текста WhatsApp-сообщения и других персональных данных посетителя.

ID контейнера можно переопределить при сборке переменной `PUBLIC_GTM_ID`. Если переменная не задана, используется `GTM-WJ29JSMT`.

## 2. События dataLayer

| Event | Когда отправляется | Основные параметры |
| --- | --- | --- |
| `consent_update` | Сохранённый или новый выбор согласия | `analytics_consent`, `advertising_consent`, `consent_source` |
| `whatsapp_click` | Клик по CTA WhatsApp | `placement`, `contact_method`, `product_id`, `product_name`, `page_language` |
| `phone_click` | Клик по телефону | `placement`, `contact_method`, `page_language` |
| `email_click` | Клик по email | `placement`, `contact_method`, `page_language` |
| `select_item` | Выбор товара перед переходом в WhatsApp | `item_id`, `item_name`, `item_category`, `price`, `currency`, `value`, `items` |
| `catalog_filter` | Выбор фильтра каталога | `filter_key`, `filter_label`, `page_language` |
| `language_change` | Смена языка | `language_from`, `language_to`, `placement` |
| `section_view` | В поле зрения попало не менее 45% раздела | `section_id`, `page_language` |
| `scroll_depth` | Достигнуты 25%, 50%, 75% или 90% страницы | `percent_scrolled`, `page_language` |
| `outbound_click` | Переход на внешний домен, кроме WhatsApp | `link_domain`, `placement`, `page_language` |

До загрузки GTM также задаются постоянные параметры страницы: `page_locale`, `page_language`, `page_type` (`landing_page` или `legal_document`) и `business_model=b2b_wholesale`.

## 3. Базовая настройка GA4 в GTM

Опубликованный контейнер сейчас загружает Measurement ID `G-6HWBS12TQT`. Перед финальной публикацией изменений в GTM нужно подтвердить, что это нужный GA4 property компании.

1. Включить в GTM встроенную переменную `Event`.
2. Создать Google tag с Measurement ID GA4 и триггером `Initialization — All Pages`.
3. Оставить встроенные проверки согласия Google tag включёнными. Для advanced Consent Mode не добавлять блокирующее условие «fire only when granted»: при `denied` Google сам ограничивает поведение тега.
4. Создать Data Layer Variables версии 2:
   - `placement`
   - `contact_method`
   - `page_language`
   - `product_id`
   - `product_name`
   - `filter_key`
   - `filter_label`
   - `language_from`
   - `language_to`
   - `section_id`
   - `percent_scrolled`
   - `link_domain`
   - `item_id`, `item_name`, `item_category`, `price`, `currency`, `value`, `item_list_id`, `item_list_name`, `items`
5. Создать Custom Event trigger с выражением:

   ```text
   ^(whatsapp_click|phone_click|email_click|catalog_filter|language_change|section_view|scroll_depth|outbound_click)$
   ```

6. Создать GA4 Event tag:
   - Event name: `{{Event}}`
   - Event parameters: передать соответствующие Data Layer Variables из шага 4.
   - Trigger: регулярное выражение из шага 5.
7. Для `select_item` создать отдельный GA4 Event tag и trigger `select_item`. Передать `currency`, `value`, `item_list_id`, `item_list_name` и массив `items`.
8. `consent_update` не отправлять как пользовательское событие в GA4: оно нужно для диагностики GTM и согласий.

В GA4 → Admin → Custom definitions создать event-scoped dimensions минимум для `placement`, `contact_method`, `page_language`, `product_id`, `filter_key` и `section_id`.

## 4. Конверсии и Google Ads

Для текущего сайта контакт происходит вне сайта, поэтому измеряется намерение связаться, а не подтверждённая продажа.

Рекомендуемая иерархия:

| Событие | Роль на старте | Google Ads Count |
| --- | --- | --- |
| `whatsapp_click` | Primary conversion | One |
| `phone_click` | Primary при достаточном объёме, иначе Secondary | One |
| `email_click` | Secondary | One |
| `select_item` | Engagement / аудитория, не конверсия | — |
| `section_view`, `scroll_depth` | Ремаркетинговые аудитории | — |

1. Связать GA4 property с Google Ads.
2. Отметить выбранные контактные события как key events в GA4.
3. Импортировать их в Google Ads как conversion actions.
4. Установить модель атрибуции Data-driven и окно конверсии, соответствующее B2B-циклу продаж.
5. Создать Conversion Linker с триггером `All Pages`.
6. Не учитывать одну и ту же конверсию одновременно через импорт GA4 и отдельный Google Ads Conversion tag как две Primary-конверсии — это задвоит результат.

Когда появится CRM-процесс, следующая ступень качества — сохранять `gclid`/`wbraid`/`gbraid` вместе с лидом и импортировать офлайн-статусы `qualify_lead` и `close_convert_lead`. Именно подтверждённые квалифицированные лиды лучше всего подходят для Smart Bidding.

## 5. Meta Ads и другие рекламные системы

После получения Pixel ID можно установить официальный/проверенный GTM template и сопоставить:

- `select_item` → `ViewContent`
- `whatsapp_click`, `phone_click`, `email_click` → `Contact`

Для сторонних шаблонов и Custom HTML обязательно добавить consent requirements для рекламного хранения и рекламных пользовательских данных. Не передавать email, телефон или содержимое сообщения в `dataLayer` без отдельной реализации enhanced conversions и юридической проверки.

## 6. Аудитории

Полезный стартовый набор в GA4:

- посетили каталог: `section_view`, `section_id=oferta`;
- интересовались конкретной категорией: `catalog_filter` или `select_item` по `item_category`;
- высокая вовлечённость без контакта: `scroll_depth=75|90`, исключить контактные события;
- начали контакт через WhatsApp;
- сегменты по `page_language`;
- посетители с `select_item`, но без `whatsapp_click`.

Публиковать аудитории в Google Ads следует после связывания продуктов и проверки consent signals.

## 7. Проверка перед публикацией GTM

В GTM Preview / Tag Assistant проверить четыре сценария в чистом профиле браузера:

1. До выбора: все четыре сигнала Consent Mode имеют `denied`; рекламные и аналитические cookies не создаются.
2. «Только необходимые»: состояние остаётся `denied`, выбор сохраняется после перехода на другую страницу.
3. Только аналитика: `analytics_storage=granted`, три рекламных сигнала остаются `denied`.
4. Принять все: все четыре сигнала становятся `granted`; GA4 события видны в DebugView.

Дополнительно проверить, что один клик WhatsApp создаёт ровно одно `whatsapp_click`, а Google Ads не получает две одинаковые Primary-конверсии.
