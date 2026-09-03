import { company, contact } from '../config/contact';
import type { LegalDocumentKey } from '../config/legal';
import type { Locale } from '../config/locales';

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'note'; text: string };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  metaDescription: string;
  eyebrow: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}

export interface LegalUi {
  backHome: string;
  documents: string;
  language: string;
  privacy: string;
  electronicServices: string;
  salesTerms: string;
  translationNotice?: string;
}

const operator = company.legalName;
const registeredAddress = `${company.registeredOffice.street}, ${company.registeredOffice.postalCode} ${company.registeredOffice.city}`;
const warehouseAddress = `${company.warehouse.street}, ${company.warehouse.postalCode} ${company.warehouse.city}`;
const registry = `KRS ${company.identifiers.krs}, NIP ${company.identifiers.nip}, REGON ${company.identifiers.regon}`;
const registryDetails = `${company.registryCourt}; ${registry}; kapitał zakładowy: ${company.shareCapital}`;

const plPrivacy: LegalDocument = {
  title: 'Polityka prywatności',
  metaDescription: 'Polityka prywatności serwisu EuroSortex Group: przetwarzanie danych, kontakt, WhatsApp, Google oraz Microsoft Clarity.',
  eyebrow: 'DOKUMENTY PRAWNE',
  effectiveDateLabel: 'Obowiązuje od',
  effectiveDate: '3 września 2026 r.',
  intro: 'Niniejsza Polityka wyjaśnia, w jaki sposób przetwarzamy dane osobowe osób odwiedzających serwis eurosortex.com oraz kontaktujących się z nami w sprawach handlowych.',
  sections: [
    {
      title: '1. Administrator danych',
      blocks: [
        { type: 'paragraph', text: `Administratorem danych osobowych jest ${operator} z siedzibą pod adresem ${registeredAddress}, ${registry}. EuroSortex Group jest nazwą handlową używaną przez Administratora.` },
        { type: 'paragraph', text: `W sprawach dotyczących danych osobowych można skontaktować się pod adresem ${contact.email} lub telefonicznie: ${contact.phoneDisplay}.` },
      ],
    },
    {
      title: '2. Jakie dane przetwarzamy',
      blocks: [
        { type: 'list', items: [
          'dane przekazane przez formularz serwisu, w korespondencji e-mail, rozmowie telefonicznej lub wiadomości WhatsApp, w szczególności imię i nazwisko, numer telefonu, adres e-mail, nazwa firmy, NIP i treść zapytania;',
          'dane osób reprezentujących klientów lub działających jako ich pracownicy i współpracownicy;',
          'dane dotyczące zapytań, ofert, zamówień, płatności, dostaw, faktur i reklamacji;',
          'dane techniczne związane z korzystaniem z serwisu, takie jak adres IP, typ urządzenia i przeglądarki, czas żądania, odwiedzony adres URL oraz logi bezpieczeństwa; po uzyskaniu odpowiedniej zgody także parametry kampanii UTM, identyfikatory kliknięć reklamowych, strona wejścia i referrer;',
          'informacje o działaniach w serwisie zapisywane lokalnie w warstwie danych, np. kliknięcie numeru telefonu, WhatsApp, filtra katalogu lub zmiana języka; dane te mogą zostać przekazane do narzędzi pomiarowych wyłącznie zgodnie z opisem w punkcie 9.',
        ] },
      ],
    },
    {
      title: '3. Cele i podstawy prawne',
      blocks: [
        { type: 'list', items: [
          'udzielenie odpowiedzi, przygotowanie oferty i podjęcie działań przed zawarciem umowy — art. 6 ust. 1 lit. b RODO, gdy osoba, której dane dotyczą, jest stroną planowanej umowy;',
          'kontakt z przedstawicielami, pracownikami i współpracownikami kontrahentów — prawnie uzasadniony interes Administratora polegający na prowadzeniu komunikacji B2B, art. 6 ust. 1 lit. f RODO;',
          'zawarcie i wykonanie umowy, obsługa płatności, dostawy oraz reklamacji — art. 6 ust. 1 lit. b RODO lub art. 6 ust. 1 lit. f RODO w odniesieniu do osób kontaktowych kontrahenta;',
          'wypełnienie obowiązków księgowych, podatkowych i innych obowiązków prawnych — art. 6 ust. 1 lit. c RODO;',
          'ustalenie, dochodzenie i obrona roszczeń oraz zapobieganie nadużyciom — prawnie uzasadniony interes Administratora, art. 6 ust. 1 lit. f RODO;',
          'zapewnienie bezpieczeństwa, diagnostyka błędów i administrowanie serwisem — prawnie uzasadniony interes Administratora, art. 6 ust. 1 lit. f RODO;',
          'analityka i pomiar reklamy — wyłącznie na podstawie uprzedniej zgody, art. 6 ust. 1 lit. a RODO.',
        ] },
      ],
    },
    {
      title: '4. Odbiorcy danych i transfery poza EOG',
      blocks: [
        { type: 'paragraph', text: 'Dane mogą być udostępniane dostawcom hostingu, obsługi IT, systemu CRM (Kommo), poczty elektronicznej, księgowości, bankom, przewoźnikom, doradcom prawnym i podatkowym oraz organom publicznym, gdy wymagają tego przepisy.' },
        { type: 'paragraph', text: 'W przypadku kontaktu przez WhatsApp dane są przetwarzane również przez Meta Platforms Ireland Limited. Usługi pocztowe oraz narzędzia Google mogą być świadczone przez Google Ireland Limited, a Microsoft Clarity — przez podmioty z grupy Microsoft. Dostawcy ci mogą korzystać z infrastruktury lub podwykonawców poza Europejskim Obszarem Gospodarczym, stosując odpowiedni mechanizm legalizujący transfer, w szczególności decyzję stwierdzającą odpowiedni stopień ochrony albo standardowe klauzule umowne.' },
      ],
    },
    {
      title: '5. Okres przechowywania',
      blocks: [
        { type: 'list', items: [
          'zapytania, które nie doprowadziły do zawarcia umowy — przez czas potrzebny do obsługi sprawy, a następnie do upływu okresu uzasadnionego możliwością powrotu do rozmów lub obrony przed roszczeniami;',
          'dane związane z umową — przez okres wykonywania umowy, a następnie do upływu terminów przedawnienia roszczeń;',
          'dokumenty księgowe i podatkowe — przez okres wymagany przepisami;',
          'logi techniczne — przez okres ustalony przez dostawcę hostingu i nie dłużej, niż jest to potrzebne do zapewnienia bezpieczeństwa i diagnostyki, chyba że konkretny log stanowi dowód incydentu;',
          'dane atrybucji marketingowej zapisane w pamięci przeglądarki — do 90 dni, nie dłużej niż do wycofania odpowiedniej zgody;',
          'nagrania sesji Microsoft Clarity — co do zasady przez 30 dni; nagrania oznaczone jako ulubione mogą być przechowywane do 9 miesięcy;',
          'dane przetwarzane na podstawie zgody — do jej wycofania lub do ustania celu, w zależności od tego, co nastąpi wcześniej.',
        ] },
      ],
    },
    {
      title: '6. Prawa osób, których dane dotyczą',
      blocks: [
        { type: 'paragraph', text: `W zależności od podstawy przetwarzania przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, wniesienia sprzeciwu oraz wycofania zgody w dowolnym momencie. Żądanie można przesłać na ${contact.email}. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania.` },
        { type: 'paragraph', text: 'Osobie, której dane dotyczą, przysługuje także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.' },
      ],
    },
    {
      title: '7. Dobrowolność podania danych',
      blocks: [
        { type: 'paragraph', text: 'Podanie danych jest dobrowolne, ale dane kontaktowe i informacje potrzebne do identyfikacji zamówienia są niezbędne do udzielenia odpowiedzi, przygotowania oferty lub zawarcia i wykonania umowy. Dane wymagane przepisami księgowymi i podatkowymi są obowiązkowe po zawarciu transakcji.' },
      ],
    },
    {
      title: '8. WhatsApp i odnośniki zewnętrzne',
      blocks: [
        { type: 'paragraph', text: 'Kliknięcie przycisku WhatsApp otwiera usługę należącą do Meta. Wiadomość z przygotowaną treścią nie jest wysyłana automatycznie — użytkownik decyduje o jej wysłaniu. Meta przetwarza dane także jako odrębny administrator na zasadach opisanych we własnej polityce prywatności. Serwis może zawierać również inne odnośniki do usług zewnętrznych, za których zasady prywatności Administrator nie odpowiada.' },
      ],
    },
    {
      title: '9. Google Tag Manager, Microsoft Clarity i pamięć urządzenia',
      blocks: [
        { type: 'paragraph', text: 'Serwis korzysta z Google Tag Managera do technicznego zarządzania tagami. Google Consent Mode został skonfigurowany domyślnie z odmową dostępu do pamięci reklamowej i analitycznej. Panel ustawień prywatności pozwala zaakceptować wszystkie technologie opcjonalne, odrzucić je albo osobno wybrać analitykę i pomiar reklam. Wybór jest zapisywany w niezbędnym cookie eurosortex_consent przez 180 dni i można go później zmienić za pomocą odnośnika w stopce.' },
        { type: 'paragraph', text: 'Za zgodą na analitykę Microsoft Clarity rejestruje sposób korzystania z serwisu, w tym kliknięcia, przewijanie, odwiedzane sekcje i nagrania sesji, oraz tworzy mapy cieplne. Treści wrażliwe są domyślnie maskowane. Clarity respektuje sygnały Google Consent Mode, dlatego analityczne cookies są używane dopiero po uzyskaniu odpowiedniej zgody.' },
        { type: 'paragraph', text: 'Po uzyskaniu zgody na analitykę lub pomiar reklam serwis może zapisać przez maksymalnie 90 dni dane pierwszego i ostatniego kontaktu z kampanią: parametry UTM, identyfikatory kliknięć reklamowych, stronę wejścia, referrer i czas kontaktu. Dane te są dołączane do dobrowolnie wysłanego zapytania i przekazywane do systemu CRM, aby ustalić źródło zapytania i mierzyć skuteczność działań marketingowych. Wycofanie obu zgód usuwa zapis z pamięci przeglądarki.' },
        { type: 'paragraph', text: 'Pobranie kodu Google lub Microsoft może powodować techniczne połączenie z serwerami dostawcy i przekazanie danych sieciowych, takich jak adres IP i informacje o przeglądarce. Administrator okresowo weryfikuje konfigurację kontenera tagów.' },
        { type: 'note', text: 'W przeglądarce można niezależnie ograniczyć lub usunąć cookies i inne dane stron. Zablokowanie niezbędnej pamięci technicznej może wpłynąć na działanie części serwisu.' },
      ],
    },
    {
      title: '10. Zautomatyzowane decyzje i zmiany Polityki',
      blocks: [
        { type: 'paragraph', text: 'Administrator nie podejmuje wobec użytkowników decyzji wywołujących skutki prawne wyłącznie w sposób zautomatyzowany i nie prowadzi profilowania w tym celu.' },
        { type: 'paragraph', text: 'Polityka może zostać zmieniona w razie zmiany prawa, dostawców lub sposobu działania serwisu. Aktualna wersja i data jej obowiązywania są publikowane na tej stronie.' },
      ],
    },
  ],
};

const plElectronicServices: LegalDocument = {
  title: 'Regulamin usług elektronicznych',
  metaDescription: 'Regulamin korzystania z serwisu EuroSortex Group oraz świadczenia usług drogą elektroniczną.',
  eyebrow: 'DOKUMENTY PRAWNE',
  effectiveDateLabel: 'Obowiązuje od',
  effectiveDate: '5 sierpnia 2026 r.',
  intro: 'Regulamin określa zasady nieodpłatnego korzystania z serwisu eurosortex.com. Nie reguluje sprzedaży towarów, której dotyczą odrębne Ogólne Warunki Sprzedaży B2B i indywidualna oferta.',
  sections: [
    {
      title: '1. Usługodawca',
      blocks: [
        { type: 'paragraph', text: `Usługodawcą jest ${operator}, ${registeredAddress}; ${registryDetails}. Adres elektroniczny: ${contact.email}, telefon: ${contact.phoneDisplay}. EuroSortex Group jest nazwą handlową Usługodawcy.` },
      ],
    },
    {
      title: '2. Definicje',
      blocks: [
        { type: 'list', items: [
          'Serwis — strona internetowa dostępna w domenie eurosortex.com wraz z jej wersjami językowymi;',
          'Użytkownik — każda osoba korzystająca z Serwisu;',
          'Usługi elektroniczne — funkcje Serwisu świadczone na odległość na indywidualne żądanie Użytkownika;',
          'Usługodawca — podmiot wskazany w punkcie 1.',
        ] },
      ],
    },
    {
      title: '3. Rodzaje i zakres usług',
      blocks: [
        { type: 'paragraph', text: 'Usługodawca świadczy nieodpłatnie usługi polegające na udostępnianiu treści strony, katalogu informacyjnego, filtrowaniu pozycji katalogu, wyborze wersji językowej oraz udostępnianiu odnośników umożliwiających zainicjowanie kontaktu telefonicznego, e-mail lub przez WhatsApp.' },
        { type: 'paragraph', text: 'Serwis nie posiada kont użytkowników, koszyka ani płatności online. Wyświetlenie produktu i ceny nie umożliwia zawarcia umowy sprzedaży bezpośrednio w Serwisie.' },
      ],
    },
    {
      title: '4. Wymagania techniczne',
      blocks: [
        { type: 'list', items: [
          'urządzenie z dostępem do Internetu i aktualną przeglądarką obsługującą HTML5 i CSS;',
          'włączona obsługa JavaScript dla pełnego działania filtrowania, menu i funkcji pomiarowych;',
          'program pocztowy, telefon lub konto WhatsApp — wyłącznie jeśli Użytkownik chce skorzystać z odpowiedniego kanału zewnętrznego;',
          'zalecane jest korzystanie z aktualnego oprogramowania i ochrony urządzenia przed złośliwym kodem.',
        ] },
      ],
    },
    {
      title: '5. Zawarcie i rozwiązanie umowy',
      blocks: [
        { type: 'paragraph', text: 'Umowa o świadczenie usługi elektronicznej zostaje zawarta z chwilą rozpoczęcia korzystania z wybranej funkcji Serwisu. Ma charakter jednorazowy i wygasa po zakończeniu korzystania z tej funkcji lub opuszczeniu Serwisu. Użytkownik może w każdej chwili zakończyć korzystanie bez składania dodatkowego oświadczenia.' },
      ],
    },
    {
      title: '6. Zasady korzystania',
      blocks: [
        { type: 'paragraph', text: 'Użytkownik powinien korzystać z Serwisu zgodnie z prawem, dobrymi obyczajami, niniejszym Regulaminem i z poszanowaniem praw Usługodawcy oraz osób trzecich.' },
        { type: 'list', items: [
          'zakazane jest dostarczanie lub rozpowszechnianie treści bezprawnych;',
          'zakazane jest wprowadzanie złośliwego kodu, zakłócanie działania Serwisu, obchodzenie zabezpieczeń i nieuprawnione testowanie podatności;',
          'zakazane jest automatyczne pobieranie treści w skali obciążającej infrastrukturę lub naruszającej prawa do bazy danych;',
          'Użytkownik nie może podszywać się pod inne osoby ani wykorzystywać danych kontaktowych do przesyłania bezprawnych komunikatów.',
        ] },
      ],
    },
    {
      title: '7. Treści handlowe i dostępność towaru',
      blocks: [
        { type: 'paragraph', text: 'Treści Serwisu, w tym katalog, ceny, zdjęcia, proporcje składu i informacje o dostępności, mają charakter informacyjny i stanowią zaproszenie do rozpoczęcia rozmów handlowych. Nie są ofertą w rozumieniu art. 66 Kodeksu cywilnego. Aktualną partię, cenę i warunki potwierdza indywidualna oferta Usługodawcy.' },
      ],
    },
    {
      title: '8. Odpowiedzialność i przerwy techniczne',
      blocks: [
        { type: 'paragraph', text: 'Usługodawca dokłada należytej staranności, aby Serwis był dostępny i bezpieczny, ale może wprowadzać przerwy związane z konserwacją, aktualizacją, awarią lub zdarzeniami pozostającymi poza jego kontrolą. Usługodawca nie odpowiada za działanie zewnętrznych usług telekomunikacyjnych, pocztowych ani WhatsApp.' },
        { type: 'paragraph', text: 'Usługodawca poprawia stwierdzone błędy, jednak nie gwarantuje stałej dostępności konkretnego towaru ani niezmienności treści katalogu.' },
      ],
    },
    {
      title: '9. Reklamacje dotyczące Serwisu',
      blocks: [
        { type: 'paragraph', text: `Reklamację dotyczącą usługi elektronicznej można przesłać na ${contact.email}. Zgłoszenie powinno zawierać dane umożliwiające kontakt, opis problemu, datę jego wystąpienia, adres podstrony oraz — jeśli to możliwe — zrzut ekranu.` },
        { type: 'paragraph', text: 'Usługodawca odpowiada na reklamację bez zbędnej zwłoki, nie później niż w ciągu 14 dni od otrzymania kompletnego zgłoszenia. Termin ten nie dotyczy reklamacji towaru, które podlegają OWS B2B i indywidualnym ustaleniom.' },
      ],
    },
    {
      title: '10. Dane osobowe i prawa autorskie',
      blocks: [
        { type: 'paragraph', text: 'Zasady przetwarzania danych osobowych opisuje Polityka prywatności. Treści, układ, grafiki, zdjęcia i oznaczenia Serwisu mogą być chronione prawem autorskim, prawem do baz danych lub prawami do oznaczeń. Korzystanie z Serwisu nie przenosi tych praw na Użytkownika.' },
      ],
    },
    {
      title: '11. Postanowienia końcowe',
      blocks: [
        { type: 'paragraph', text: 'Do Regulaminu stosuje się prawo polskie. W sprawach nieuregulowanych zastosowanie mają w szczególności Kodeks cywilny oraz ustawa o świadczeniu usług drogą elektroniczną. Bezwzględnie obowiązujące prawa osób, którym przepisy przyznają szczególną ochronę, pozostają nienaruszone.' },
        { type: 'paragraph', text: 'Usługodawca może zmienić Regulamin z ważnej przyczyny, w szczególności w razie zmiany prawa, funkcji Serwisu lub danych Usługodawcy. Nowa wersja obowiązuje od daty wskazanej na stronie i nie narusza praw nabytych przed zmianą.' },
      ],
    },
  ],
};

const plSalesTerms: LegalDocument = {
  title: 'Ogólne Warunki Sprzedaży B2B',
  metaDescription: 'Ogólne Warunki Sprzedaży B2B EuroSortex Group dla hurtowych zamówień sortowanej odzieży używanej.',
  eyebrow: 'DOKUMENTY PRAWNE',
  effectiveDateLabel: 'Obowiązuje od',
  effectiveDate: '5 sierpnia 2026 r.',
  intro: 'OWS regulują hurtową sprzedaż towarów przedsiębiorcom. Nie stanowią oferty i mają zastosowanie do zamówienia, jeżeli zostały udostępnione Kupującemu przed zawarciem umowy.',
  sections: [
    {
      title: '1. Sprzedawca i zakres OWS',
      blocks: [
        { type: 'paragraph', text: `Sprzedawcą jest ${operator}, ${registeredAddress}; ${registryDetails}; e-mail: ${contact.email}, tel. ${contact.phoneDisplay}. Magazyn i miejsce możliwego odbioru po uprzednim uzgodnieniu: ${warehouseAddress}.` },
        { type: 'paragraph', text: 'OWS dotyczą wyłącznie umów zawieranych z przedsiębiorcami, gdy zakup ma dla Kupującego charakter zawodowy i pozostaje w bezpośrednim związku z jego działalnością gospodarczą. Sprzedawca nie prowadzi w tym kanale sprzedaży konsumenckiej.' },
      ],
    },
    {
      title: '2. Definicje i kolejność dokumentów',
      blocks: [
        { type: 'list', items: [
          'Kupujący — przedsiębiorca składający zapytanie lub zamówienie w związku zawodowym z prowadzoną działalnością;',
          'Towar — używana odzież, obuwie lub dodatki sprzedawane hurtowo w partiach;',
          'Partia — konkretna ilość Towaru o parametrach wskazanych w indywidualnej ofercie lub potwierdzeniu zamówienia;',
          'Oferta — indywidualna propozycja Sprzedawcy określająca co najmniej Towar, cenę albo sposób jej obliczenia i okres ważności;',
          'Umowa — umowa sprzedaży zawarta po przyjęciu Oferty zgodnie z punktem 4.',
        ] },
        { type: 'paragraph', text: 'W razie sprzeczności pierwszeństwo mają: indywidualne pisemne ustalenia stron, Oferta lub potwierdzenie zamówienia, następnie OWS. Treści Serwisu mają charakter pomocniczy.' },
      ],
    },
    {
      title: '3. Informacje na stronie i właściwości Towaru',
      blocks: [
        { type: 'paragraph', text: 'Katalog, ceny, zdjęcia, nazwy klas, procentowy skład i udział odzieży markowej na stronie są informacjami orientacyjnymi i zaproszeniem do negocjacji w rozumieniu art. 71 Kodeksu cywilnego. Nie rezerwują Towaru i nie stanowią publicznej oferty.' },
        { type: 'paragraph', text: 'Towar jest używany i sprzedawany w partiach hurtowych. Różnice fasonów, marek, rozmiarów, kolorów, stopnia zużycia i składu są naturalną cechą takiej partii. Wiążące są wyłącznie parametry, klasa, dopuszczalne odchylenia oraz zdjęcia konkretnej Partii wyraźnie wskazane w Ofercie.' },
        { type: 'paragraph', text: 'Oznaczenia „gatunek 1”, „gatunek 2”, udziały procentowe oraz ewentualny udział rzeczy nienadających się do dalszej sprzedaży wymagają doprecyzowania w Ofercie dotyczącej danej Partii. Kupujący powinien przed przyjęciem Oferty zgłosić wymagane parametry i przeznaczenie Towaru.' },
      ],
    },
    {
      title: '4. Zapytanie, Oferta i zawarcie Umowy',
      blocks: [
        { type: 'paragraph', text: 'Kupujący może przesłać zapytanie przez WhatsApp, e-mail lub telefonicznie. Zapytanie i automatycznie przygotowana treść wiadomości nie są zamówieniem wiążącym Sprzedawcę.' },
        { type: 'paragraph', text: 'Sprzedawca przekazuje indywidualną Ofertę lub potwierdzenie dostępności. Umowa zostaje zawarta, gdy Kupujący przyjmie Ofertę w jej okresie ważności w sposób wskazany przez Sprzedawcę, chyba że Oferta uzależnia zawarcie Umowy od zaksięgowania pełnej przedpłaty. Zmiana Oferty przez Kupującego wymaga wyraźnego potwierdzenia Sprzedawcy.' },
        { type: 'paragraph', text: 'Kupujący przekazuje prawidłowe dane firmy, NIP, dane osoby uprawnionej do działania oraz dane dostawy. Sprzedawca może zweryfikować status przedsiębiorcy i umocowanie osoby kontaktowej.' },
      ],
    },
    {
      title: '5. Cena, VAT i płatność',
      blocks: [
        { type: 'paragraph', text: 'Ceny w Serwisie i Ofercie są cenami netto w PLN, chyba że wyraźnie wskazano inaczej. Do ceny dolicza się VAT według stawki obowiązującej w dniu powstania obowiązku podatkowego. Koszt transportu, palet, dodatkowego pakowania lub innych usług nie jest wliczony, o ile Oferta nie stanowi inaczej.' },
        { type: 'paragraph', text: 'Standardowym warunkiem jest 100% przedpłaty przelewem na rachunek wskazany przez Sprzedawcę, na podstawie dokumentu płatniczego wystawionego przez Sprzedawcę. Płatność uważa się za dokonaną w chwili uznania rachunku Sprzedawcy. Kupujący nie jest uprawniony do potrącenia swojej wierzytelności bez uprzedniej pisemnej zgody Sprzedawcy, z wyjątkiem wierzytelności prawomocnie stwierdzonych.' },
      ],
    },
    {
      title: '6. Rezerwacja i brak dostępności',
      blocks: [
        { type: 'paragraph', text: 'Towar zostaje zarezerwowany dopiero na zasadach wskazanych w Ofercie, co do zasady po zaksięgowaniu pełnej przedpłaty. Do tego czasu dostępność może się zmienić.' },
        { type: 'paragraph', text: 'Jeżeli mimo zawarcia Umowy wykonanie całości lub części zamówienia okaże się niemożliwe, Sprzedawca niezwłocznie poinformuje Kupującego i — według uzgodnienia — zaproponuje partię zastępczą, nowy termin albo zwróci zapłatę za niewykonaną część. Nie ogranicza to odpowiedzialności, której nie można wyłączyć na mocy prawa.' },
      ],
    },
    {
      title: '7. Dostawa, odbiór i przejście ryzyka',
      blocks: [
        { type: 'paragraph', text: 'Standardowy przewidywany termin przygotowania i dostawy wynosi 1–3 tygodnie od zaksięgowania pełnej przedpłaty, o ile Oferta nie wskazuje innego terminu. Termin jest wiążący tylko wtedy, gdy został wyraźnie oznaczony jako gwarantowany.' },
        { type: 'paragraph', text: 'Transport opłaca Kupujący. Sprzedawca może pomóc w jego organizacji, Kupujący może wskazać własnego przewoźnika albo odebrać Towar po uzgodnieniu terminu. Jeżeli strony nie postanowią inaczej, ryzyko przypadkowej utraty lub uszkodzenia przechodzi na Kupującego z chwilą wydania Towaru Kupującemu lub przewoźnikowi wybranemu bądź zaakceptowanemu przez Kupującego.' },
        { type: 'paragraph', text: 'Kupujący zapewnia możliwość rozładunku i sprawdza liczbę opakowań oraz widoczne uszkodzenia przy odbiorze. Uszkodzenie transportowe należy wpisać do dokumentu przewozowego i, o ile to możliwe, sporządzić protokół oraz zdjęcia w obecności przewoźnika.' },
      ],
    },
    {
      title: '8. Własność Towaru',
      blocks: [
        { type: 'paragraph', text: 'Własność Towaru przechodzi na Kupującego po zapłacie pełnej ceny i wszystkich uzgodnionych kosztów. Do tego czasu Kupujący nie może rozporządzać Towarem w sposób naruszający zastrzeżenie własności.' },
      ],
    },
    {
      title: '9. Kontrola i reklamacje',
      blocks: [
        { type: 'paragraph', text: 'Kupujący jest zobowiązany zbadać Towar w czasie i w sposób przyjęty przy towarach tego rodzaju. Braki ilościowe, pomyłkę asortymentu i wady możliwe do stwierdzenia przy zwykłym odbiorze należy zgłosić bez zbędnej zwłoki, nie później niż w ciągu 3 dni roboczych od odbioru. Wady ukryte należy zgłosić nie później niż w ciągu 3 dni roboczych od ich wykrycia.' },
        { type: 'paragraph', text: `Reklamację należy wysłać na ${contact.email}, wskazując numer faktury lub zamówienia, oznaczenie Partii, opis i zakres niezgodności, datę jej stwierdzenia oraz dołączając zdjęcia lub nagranie. Na żądanie Sprzedawcy Kupujący zabezpieczy kwestionowany Towar do oględzin i nie będzie go dalej sprzedawał ani przetwarzał do czasu udokumentowania reklamacji.` },
        { type: 'paragraph', text: 'Jeżeli reklamacja jest zasadna, Sprzedawca — odpowiednio do charakteru niezgodności i według własnego wyboru — uzupełni brak, wymieni zakwestionowaną część, obniży cenę albo zwróci cenę tej części. Strony mogą uzgodnić inne rozwiązanie.' },
      ],
    },
    {
      title: '10. Rękojmia, zwroty i odpowiedzialność',
      blocks: [
        { type: 'paragraph', text: 'Na podstawie art. 558 § 1 Kodeksu cywilnego odpowiedzialność Sprzedawcy z tytułu rękojmi za wady zostaje wyłączona w najszerszym zakresie dopuszczalnym prawem. Wyłączenie nie jest skuteczne, jeżeli Sprzedawca podstępnie zataił wadę. Uzgodniona procedura reklamacyjna pozostaje wiążąca.' },
        { type: 'paragraph', text: 'Kupującemu nie przysługuje konsumenckie prawo odstąpienia w terminie 14 dni. Zwrot pełnowartościowego Towaru jest możliwy wyłącznie po uprzedniej pisemnej zgodzie Sprzedawcy i na uzgodnionych warunkach.' },
        { type: 'paragraph', text: 'Z zastrzeżeniem szkody wyrządzonej umyślnie oraz innych przypadków, w których ograniczenie jest niedopuszczalne, łączna odpowiedzialność Sprzedawcy związana z danym zamówieniem jest ograniczona do wartości netto części zamówienia, której dotyczy zdarzenie. Sprzedawca nie odpowiada za utracone korzyści, przestoje ani pośrednie szkody gospodarcze.' },
      ],
    },
    {
      title: '11. Siła wyższa',
      blocks: [
        { type: 'paragraph', text: 'Strona nie odpowiada za niewykonanie lub opóźnienie spowodowane zdarzeniem pozostającym poza jej rozsądną kontrolą, w szczególności katastrofą, pożarem, powodzią, epidemią, wojną, zamieszkami, decyzją władz, awarią infrastruktury, blokadą transportu lub istotnym zakłóceniem łańcucha dostaw. Strona dotknięta zdarzeniem niezwłocznie informuje drugą stronę i podejmuje rozsądne działania ograniczające skutki.' },
      ],
    },
    {
      title: '12. Poufność, dane i własność intelektualna',
      blocks: [
        { type: 'paragraph', text: 'Niepubliczne warunki Oferty, zdjęcia Partii i informacje handlowe przekazane z zastrzeżeniem poufności nie mogą być udostępniane osobom trzecim poza zakresem koniecznym do realizacji Umowy lub wymaganym prawem.' },
        { type: 'paragraph', text: 'Zasady przetwarzania danych osobowych określa Polityka prywatności. Umowa nie przenosi na Kupującego praw do marki EuroSortex Group, zdjęć, opisów ani innych materiałów Sprzedawcy.' },
      ],
    },
    {
      title: '13. Prawo właściwe i postanowienia końcowe',
      blocks: [
        { type: 'paragraph', text: 'Do OWS i Umów stosuje się prawo polskie. Spory będą rozstrzygane przez sąd powszechny właściwy miejscowo dla siedziby Sprzedawcy, chyba że bezwzględnie obowiązujący przepis stanowi inaczej.' },
        { type: 'paragraph', text: 'Nieważność jednego postanowienia nie wpływa na pozostałe. Sprzedawca może zmienić OWS na przyszłość; do danego zamówienia stosuje się wersję udostępnioną Kupującemu przed zawarciem Umowy. Polska wersja językowa jest wersją wiążącą, a tłumaczenia służą wygodzie kontrahentów.' },
      ],
    },
  ],
};

function translatedDocument(
  source: LegalDocument,
  translation: Omit<LegalDocument, 'eyebrow' | 'effectiveDate'> & { eyebrow?: string; effectiveDate?: string },
): LegalDocument {
  return {
    ...translation,
    eyebrow: translation.eyebrow ?? source.eyebrow,
    effectiveDate: translation.effectiveDate ?? source.effectiveDate,
  };
}

const ruPrivacy = translatedDocument(plPrivacy, {
  title: 'Политика конфиденциальности',
  metaDescription: 'Политика конфиденциальности EuroSortex Group: обработка данных, обращения, WhatsApp, Google и Microsoft Clarity.',
  eyebrow: 'ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ',
  effectiveDateLabel: 'Действует с',
  effectiveDate: '3 сентября 2026 г.',
  intro: 'Настоящая Политика объясняет, как обрабатываются персональные данные посетителей eurosortex.com и лиц, обращающихся к нам по коммерческим вопросам.',
  sections: [
    { title: '1. Администратор данных', blocks: [
      { type: 'paragraph', text: `Администратор данных — ${operator}, адрес: ${registeredAddress}, ${registry}. EuroSortex Group является торговым наименованием Администратора.` },
      { type: 'paragraph', text: `По вопросам персональных данных: ${contact.email}, телефон ${contact.phoneDisplay}.` },
    ] },
    { title: '2. Какие данные обрабатываются', blocks: [{ type: 'list', items: [
      'данные из формы сайта, email, телефонных разговоров и WhatsApp: имя, телефон, email, компания, NIP и содержание обращения;',
      'данные представителей, работников и подрядчиков клиентов;',
      'данные обращений, предложений, заказов, оплат, доставок, фактур и рекламаций;',
      'технические данные: IP-адрес, устройство, браузер, время запроса, URL и журналы безопасности; после получения соответствующего согласия также UTM-параметры, рекламные идентификаторы кликов, страница входа и referrer;',
      'события интерфейса, сохранённые в локальном слое данных, например клики по телефону, WhatsApp, фильтрам и смене языка; передача в измерительные системы возможна только согласно разделу 9.',
    ] }] },
    { title: '3. Цели и правовые основания', blocks: [{ type: 'list', items: [
      'ответ, подготовка предложения и действия до заключения договора — ст. 6(1)(b) GDPR, если субъект данных является стороной договора;',
      'B2B-контакт с представителями контрагентов — законный интерес в деловой коммуникации, ст. 6(1)(f) GDPR;',
      'заключение и исполнение договора, оплата, доставка и рекламации — ст. 6(1)(b) либо 6(1)(f) GDPR для контактных лиц;',
      'бухгалтерские, налоговые и иные юридические обязанности — ст. 6(1)(c) GDPR;',
      'установление, предъявление и защита требований, предотвращение злоупотреблений — ст. 6(1)(f) GDPR;',
      'безопасность, диагностика и администрирование сайта — ст. 6(1)(f) GDPR;',
      'аналитика и измерение рекламы — только с предварительного согласия по ст. 6(1)(a) GDPR.',
    ] }] },
    { title: '4. Получатели и передача за пределы ЕЭЗ', blocks: [
      { type: 'paragraph', text: 'Данные могут получать поставщики хостинга, IT, CRM-системы (Kommo), email, бухгалтерии, банки, перевозчики, юридические и налоговые консультанты, а также органы власти в предусмотренных законом случаях.' },
      { type: 'paragraph', text: 'При использовании WhatsApp данные также обрабатывает Meta Platforms Ireland Limited; почту и инструменты Google может предоставлять Google Ireland Limited, а Microsoft Clarity — компании группы Microsoft. Их инфраструктура или подрядчики могут находиться вне ЕЭЗ. Передача осуществляется на основании применимого решения об адекватности либо стандартных договорных положений.' },
    ] },
    { title: '5. Сроки хранения', blocks: [{ type: 'list', items: [
      'обращения без договора — до завершения вопроса, затем на период, обоснованный возможным продолжением переговоров или защитой требований;',
      'договорные данные — во время исполнения и до истечения сроков давности требований;',
      'бухгалтерские и налоговые документы — в установленные законом сроки;',
      'технические журналы — по срокам хостинг-провайдера и не дольше необходимого для безопасности и диагностики, кроме журналов, являющихся доказательством инцидента;',
      'данные маркетинговой атрибуции в памяти браузера — до 90 дней и не дольше, чем до отзыва соответствующего согласия;',
      'записи сессий Microsoft Clarity — как правило, 30 дней; записи, отмеченные как избранные, могут храниться до 9 месяцев;',
      'данные на основании согласия — до его отзыва или прекращения цели.',
    ] }] },
    { title: '6. Права субъектов данных', blocks: [
      { type: 'paragraph', text: `В зависимости от основания обработки доступны права доступа, исправления, удаления, ограничения, переноса, возражения и отзыва согласия. Запросы: ${contact.email}. Отзыв не влияет на законность предшествующей обработки.` },
      { type: 'paragraph', text: 'Также можно подать жалобу Председателю польского Управления по защите персональных данных (Prezes UODO).' },
    ] },
    { title: '7. Добровольность предоставления', blocks: [{ type: 'paragraph', text: 'Предоставление данных добровольно, однако контактные сведения и данные заказа необходимы для ответа, предложения или исполнения договора. После сделки сведения, требуемые бухгалтерским и налоговым законодательством, обязательны.' }] },
    { title: '8. WhatsApp и внешние ссылки', blocks: [{ type: 'paragraph', text: 'Кнопка WhatsApp открывает сервис Meta. Подготовленное сообщение не отправляется автоматически. Пользователь сам решает, отправлять ли его. Meta также обрабатывает данные как самостоятельный администратор по собственной политике. Администратор не отвечает за правила конфиденциальности других внешних сайтов.' }] },
    { title: '9. Google Tag Manager, Microsoft Clarity и память устройства', blocks: [
      { type: 'paragraph', text: 'Сайт использует Google Tag Manager для технического управления тегами. Google Consent Mode по умолчанию запрещает рекламное и аналитическое хранение. Панель конфиденциальности позволяет принять все необязательные технологии, отклонить их либо отдельно выбрать аналитику и измерение рекламы. Выбор хранится в необходимом cookie eurosortex_consent 180 дней и позднее может быть изменён по ссылке в подвале.' },
      { type: 'paragraph', text: 'С согласия на аналитику Microsoft Clarity регистрирует использование сайта, включая клики, прокрутку, посещённые разделы и записи сессий, и создаёт тепловые карты. Чувствительное содержимое по умолчанию маскируется. Clarity учитывает сигналы Google Consent Mode, поэтому аналитические cookies используются только после соответствующего согласия.' },
      { type: 'paragraph', text: 'После согласия на аналитику или измерение рекламы сайт может хранить до 90 дней данные первого и последнего контакта с кампанией: UTM-параметры, рекламные идентификаторы кликов, страницу входа, referrer и время контакта. Эти данные добавляются к добровольно отправленной заявке и передаются в CRM для определения источника заявки и измерения эффективности маркетинга. Отзыв обеих согласий удаляет запись из памяти браузера.' },
      { type: 'paragraph', text: 'Загрузка кода Google или Microsoft может установить техническое соединение с серверами поставщика и передать сетевые данные, включая IP и сведения браузера. Конфигурация контейнера периодически проверяется.' },
      { type: 'note', text: 'Пользователь может ограничивать и удалять cookies и данные сайтов в браузере. Блокировка необходимой технической памяти может повлиять на работу сайта.' },
    ] },
    { title: '10. Автоматизированные решения и изменения', blocks: [
      { type: 'paragraph', text: 'Администратор не принимает исключительно автоматизированных решений с юридическими последствиями и не профилирует пользователей для этой цели.' },
      { type: 'paragraph', text: 'Политика может обновляться при изменении закона, поставщиков или сайта. Актуальная версия и дата действия публикуются здесь.' },
    ] },
  ],
});

const ruElectronicServices = translatedDocument(plElectronicServices, {
  title: 'Правила оказания электронных услуг',
  metaDescription: 'Правила использования сайта EuroSortex Group и оказания электронных услуг.',
  eyebrow: 'ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ',
  effectiveDateLabel: 'Действуют с',
  effectiveDate: '5 августа 2026 г.',
  intro: 'Правила регулируют бесплатное использование eurosortex.com. Продажа регулируется отдельными B2B OWS и индивидуальным предложением.',
  sections: [
    { title: '1. Поставщик услуг', blocks: [{ type: 'paragraph', text: `Поставщик — ${operator}, ${registeredAddress}; ${registryDetails}. Email: ${contact.email}, телефон: ${contact.phoneDisplay}. EuroSortex Group — торговое наименование Поставщика.` }] },
    { title: '2. Определения', blocks: [{ type: 'list', items: ['Сайт — eurosortex.com и его языковые версии;', 'Пользователь — любое лицо, использующее Сайт;', 'Электронные услуги — функции Сайта, предоставляемые дистанционно по индивидуальному запросу;', 'Поставщик — лицо, указанное в разделе 1.'] }] },
    { title: '3. Виды и объём услуг', blocks: [
      { type: 'paragraph', text: 'Бесплатные услуги включают просмотр страниц и информационного каталога, фильтрацию, выбор языка и ссылки для начала звонка, email или общения в WhatsApp.' },
      { type: 'paragraph', text: 'На Сайте нет аккаунтов, корзины и онлайн-оплаты. Просмотр товара и цены не заключает договор непосредственно на Сайте.' },
    ] },
    { title: '4. Технические требования', blocks: [{ type: 'list', items: ['устройство с Интернетом и современным браузером HTML5/CSS;', 'JavaScript для полной работы фильтров, меню и измерительных функций;', 'email-клиент, телефон или WhatsApp — только для соответствующего внешнего канала;', 'актуальное ПО и защита устройства от вредоносного кода.'] }] },
    { title: '5. Заключение и прекращение договора', blocks: [{ type: 'paragraph', text: 'Договор об электронной услуге заключается при начале использования выбранной функции и прекращается после завершения функции или выхода с Сайта. Пользователь может прекратить использование в любое время без дополнительного заявления.' }] },
    { title: '6. Правила использования', blocks: [
      { type: 'paragraph', text: 'Пользователь обязан соблюдать закон, добрые обычаи, настоящие Правила и права третьих лиц.' },
      { type: 'list', items: ['запрещён незаконный контент;', 'запрещены вредоносный код, помехи, обход защиты и несанкционированное тестирование;', 'запрещена автоматическая массовая загрузка, перегружающая инфраструктуру или нарушающая права на базу данных;', 'запрещены выдача себя за другое лицо и использование контактов для незаконных сообщений.'] },
    ] },
    { title: '7. Коммерческая информация', blocks: [{ type: 'paragraph', text: 'Каталог, цены, фотографии, состав и доступность носят информационный характер и являются приглашением к переговорам, а не офертой по ст. 66 Гражданского кодекса Польши. Конкретную партию, цену и условия подтверждает индивидуальное предложение.' }] },
    { title: '8. Ответственность и перерывы', blocks: [
      { type: 'paragraph', text: 'Поставщик заботится о доступности и безопасности, но может проводить обслуживание и не отвечает за сбои, находящиеся вне разумного контроля, включая внешнюю связь, email и WhatsApp.' },
      { type: 'paragraph', text: 'Ошибки исправляются после обнаружения, но постоянная доступность товара и неизменность каталога не гарантируются.' },
    ] },
    { title: '9. Жалобы на Сайт', blocks: [
      { type: 'paragraph', text: `Жалоба направляется на ${contact.email} и должна содержать контакт, описание, дату, URL и по возможности скриншот.` },
      { type: 'paragraph', text: 'Ответ предоставляется без неоправданной задержки, не позднее 14 дней после полного обращения. Товарные рекламации регулируются OWS B2B.' },
    ] },
    { title: '10. Данные и интеллектуальная собственность', blocks: [{ type: 'paragraph', text: 'Персональные данные регулируются Политикой конфиденциальности. Тексты, структура, графика, фотографии и обозначения могут охраняться законом; использование Сайта не передаёт права Пользователю.' }] },
    { title: '11. Заключительные положения', blocks: [
      { type: 'paragraph', text: 'Применяется польское право, включая Гражданский кодекс и закон об электронных услугах. Императивные права защищённых лиц сохраняются.' },
      { type: 'paragraph', text: 'Правила могут меняться при изменении закона, функций или данных Поставщика. Новая версия действует с указанной даты и не нарушает ранее приобретённых прав.' },
    ] },
  ],
});

const ruSalesTerms = translatedDocument(plSalesTerms, {
  title: 'Общие условия продаж B2B',
  metaDescription: 'Общие условия оптовых B2B-продаж сортированной одежды EuroSortex Group.',
  eyebrow: 'ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ',
  effectiveDateLabel: 'Действуют с',
  effectiveDate: '5 августа 2026 г.',
  intro: 'OWS регулируют оптовые продажи предпринимателям. Они не являются офертой и применяются, если были предоставлены Покупателю до заключения договора.',
  sections: [
    { title: '1. Продавец и область применения', blocks: [
      { type: 'paragraph', text: `Продавец — ${operator}, ${registeredAddress}; ${registryDetails}; ${contact.email}, ${contact.phoneDisplay}. Склад и возможный самовывоз после согласования: ${warehouseAddress}.` },
      { type: 'paragraph', text: 'OWS применяются только к предпринимателям, когда покупка носит профессиональный характер и непосредственно связана с их деятельностью. В этом канале потребительские продажи не осуществляются.' },
    ] },
    { title: '2. Определения и приоритет документов', blocks: [
      { type: 'list', items: ['Покупатель — предприниматель, приобретающий товар в профессиональной связи со своей деятельностью;', 'Товар — бывшая в употреблении одежда, обувь или аксессуары, продаваемые оптовыми партиями;', 'Партия — конкретное количество Товара с параметрами индивидуального предложения;', 'Предложение — индивидуальные условия Продавца с Товаром, ценой или способом расчёта и сроком действия;', 'Договор — договор продажи, заключённый по разделу 4.'] },
      { type: 'paragraph', text: 'При противоречии применяются: индивидуальные письменные договорённости, Предложение/подтверждение заказа, затем OWS. Сайт имеет вспомогательный характер.' },
    ] },
    { title: '3. Сайт и свойства товара', blocks: [
      { type: 'paragraph', text: 'Каталог, цены, фотографии, классы, состав и доля брендов ориентировочны и являются приглашением к переговорам по ст. 71 Гражданского кодекса Польши. Они не резервируют товар и не являются публичной офертой.' },
      { type: 'paragraph', text: 'Товар бывший в употреблении. Различия фасонов, брендов, размеров, цветов, износа и состава естественны. Обязательны только параметры, класс, допуски и фотографии конкретной Партии, прямо включённые в Предложение.' },
      { type: 'paragraph', text: 'Обозначения сорта 1/2, проценты и возможная доля вещей, непригодных к дальнейшей продаже, должны уточняться в Предложении. До принятия условий Покупатель сообщает требуемые параметры и назначение.' },
    ] },
    { title: '4. Запрос, Предложение и Договор', blocks: [
      { type: 'paragraph', text: 'Запрос можно направить через WhatsApp, email или телефон. Запрос и подготовленный текст сообщения не связывают Продавца.' },
      { type: 'paragraph', text: 'Продавец направляет индивидуальное Предложение или подтверждение. Договор заключается при принятии в срок указанным способом, если Предложение не ставит заключение в зависимость от полной предоплаты. Изменения Покупателя требуют прямого подтверждения Продавца.' },
      { type: 'paragraph', text: 'Покупатель сообщает верные данные компании, NIP, полномочного лица и доставки. Продавец вправе проверить статус и полномочия.' },
    ] },
    { title: '5. Цена, VAT и оплата', blocks: [
      { type: 'paragraph', text: 'Цены указаны нетто в PLN, если прямо не указано иное. Добавляется VAT по применимой ставке. Транспорт, палеты, дополнительная упаковка и услуги не включены, если Предложение не предусматривает иное.' },
      { type: 'paragraph', text: 'Стандартное условие — 100% предоплата переводом на счёт Продавца по его платёжному документу. Оплата совершена при зачислении. Зачёт требований Покупателя требует предварительного письменного согласия, кроме требований, подтверждённых вступившим в силу решением.' },
    ] },
    { title: '6. Резервирование и отсутствие товара', blocks: [
      { type: 'paragraph', text: 'Товар резервируется по правилам Предложения, обычно после полной предоплаты. До этого доступность может измениться.' },
      { type: 'paragraph', text: 'Если исполнение невозможно, Продавец незамедлительно сообщает и по согласованию предлагает замену, новый срок либо возвращает оплату за неисполненную часть. Неисключаемая законом ответственность сохраняется.' },
    ] },
    { title: '7. Доставка, получение и риск', blocks: [
      { type: 'paragraph', text: 'Обычный ожидаемый срок — 1–3 недели после полной предоплаты, если Предложение не устанавливает иной. Срок гарантирован только при прямом обозначении.' },
      { type: 'paragraph', text: 'Транспорт оплачивает Покупатель. Возможны помощь Продавца, перевозчик Покупателя или самовывоз. Если не согласовано иное, риск переходит при передаче Покупателю либо выбранному/принятому им перевозчику.' },
      { type: 'paragraph', text: 'Покупатель обеспечивает разгрузку и проверяет упаковки и видимые повреждения. Транспортный ущерб фиксируется в документе перевозчика, протоколе и фотографиях.' },
    ] },
    { title: '8. Право собственности', blocks: [{ type: 'paragraph', text: 'Право собственности переходит после полной оплаты цены и согласованных расходов. До этого Покупатель не вправе распоряжаться Товаром вопреки оговорке о сохранении собственности.' }] },
    { title: '9. Проверка и рекламации', blocks: [
      { type: 'paragraph', text: 'Покупатель проверяет Товар обычным для такого товара способом. Количество, ассортимент и видимые недостатки заявляются без задержки, не позднее 3 рабочих дней после получения; скрытые — не позднее 3 рабочих дней после обнаружения.' },
      { type: 'paragraph', text: `Рекламация на ${contact.email} должна содержать номер фактуры/заказа, Партию, описание, объём, дату и фото/видео. По требованию спорный Товар сохраняется для осмотра и не продаётся/не перерабатывается до документирования.` },
      { type: 'paragraph', text: 'При обоснованной рекламации Продавец по своему выбору восполняет недостачу, заменяет спорную часть, снижает цену либо возвращает цену этой части. Возможна иная договорённость.' },
    ] },
    { title: '10. Rękojmia, возвраты и ответственность', blocks: [
      { type: 'paragraph', text: 'По ст. 558 §1 Гражданского кодекса Польши ответственность по rękojmia исключается в максимально допустимом объёме. Исключение недействительно при умышленном сокрытии недостатка. Согласованная процедура рекламации сохраняется.' },
      { type: 'paragraph', text: 'Потребительского 14-дневного отказа нет. Возврат надлежащего Товара возможен только с предварительного письменного согласия Продавца.' },
      { type: 'paragraph', text: 'Кроме умышленного вреда и случаев, где ограничение запрещено, общая ответственность ограничена нетто-стоимостью затронутой части заказа. Упущенная выгода, простой и косвенные хозяйственные убытки не возмещаются.' },
    ] },
    { title: '11. Форс-мажор', blocks: [{ type: 'paragraph', text: 'Сторона не отвечает за событие вне разумного контроля: катастрофу, пожар, наводнение, эпидемию, войну, беспорядки, решение властей, аварию инфраструктуры, транспортную блокаду или существенный сбой цепочки поставок. Она уведомляет другую сторону и ограничивает последствия.' }] },
    { title: '12. Конфиденциальность, данные и права', blocks: [
      { type: 'paragraph', text: 'Непубличные условия, фотографии Партии и конфиденциальная коммерческая информация не передаются третьим лицам кроме необходимого для Договора или закона.' },
      { type: 'paragraph', text: 'Данные регулируются Политикой конфиденциальности. Договор не передаёт права на EuroSortex Group, фотографии, описания и материалы.' },
    ] },
    { title: '13. Право и заключительные положения', blocks: [
      { type: 'paragraph', text: 'Применяется польское право. Споры рассматривает суд по месту нахождения Продавца, если императивная норма не требует иного.' },
      { type: 'paragraph', text: 'Недействительность отдельного условия не затрагивает остальные. Изменения действуют на будущее; к заказу применяется версия до Договора. Обязательна польская версия, переводы предоставлены для удобства.' },
    ] },
  ],
});

const enPrivacy = translatedDocument(plPrivacy, {
  title: 'Privacy Policy',
  metaDescription: 'EuroSortex Group Privacy Policy covering enquiries, WhatsApp, Google tools and Microsoft Clarity.',
  eyebrow: 'LEGAL DOCUMENTS',
  effectiveDateLabel: 'Effective from',
  effectiveDate: '3 September 2026',
  intro: 'This Policy explains how we process the personal data of visitors to eurosortex.com and people who contact us about business matters.',
  sections: [
    { title: '1. Data controller', blocks: [
      { type: 'paragraph', text: `The controller is ${operator}, registered at ${registeredAddress}, ${registry}. EuroSortex Group is a trading name used by the Controller.` },
      { type: 'paragraph', text: `Privacy enquiries may be sent to ${contact.email} or made by phone at ${contact.phoneDisplay}.` },
    ] },
    { title: '2. Data we process', blocks: [{ type: 'list', items: [
      'data supplied through the website form, by email, phone or WhatsApp, including name, phone number, email, company, tax number and enquiry content;',
      'data of representatives, employees and contractors of customers;',
      'enquiry, offer, order, payment, delivery, invoice and complaint data;',
      'technical data such as IP address, device and browser type, request time, URL and security logs; after the relevant consent, this may also include UTM campaign parameters, advertising click identifiers, the landing page and referrer;',
      'interface events stored in the local data layer, such as phone, WhatsApp, catalogue filter and language clicks; transmission to measurement tools is governed by section 9.',
    ] }] },
    { title: '3. Purposes and legal bases', blocks: [{ type: 'list', items: [
      'replying, preparing an offer and pre-contract steps — Article 6(1)(b) GDPR where the data subject is the prospective contracting party;',
      'B2B contact with a customer’s representatives — legitimate interest in business communication, Article 6(1)(f) GDPR;',
      'forming and performing contracts, payments, delivery and complaints — Article 6(1)(b), or Article 6(1)(f) for a customer’s contact persons;',
      'accounting, tax and other legal duties — Article 6(1)(c) GDPR;',
      'establishing, pursuing and defending claims and preventing abuse — Article 6(1)(f) GDPR;',
      'website security, diagnostics and administration — Article 6(1)(f) GDPR;',
      'analytics and advertising measurement — prior consent under Article 6(1)(a) GDPR.',
    ] }] },
    { title: '4. Recipients and transfers outside the EEA', blocks: [
      { type: 'paragraph', text: 'Recipients may include hosting, IT, CRM (Kommo), email and accounting providers, banks, carriers, legal and tax advisers, and public authorities where required by law.' },
      { type: 'paragraph', text: 'WhatsApp use also involves Meta Platforms Ireland Limited. Email and Google tools may be provided by Google Ireland Limited, and Microsoft Clarity by Microsoft group entities. Their infrastructure or subcontractors may be outside the EEA. Transfers rely on an applicable adequacy decision or safeguards such as standard contractual clauses.' },
    ] },
    { title: '5. Retention', blocks: [{ type: 'list', items: [
      'enquiries without a contract — until the matter is completed and then for a period justified by possible resumed talks or claims;',
      'contract data — during performance and until relevant limitation periods expire;',
      'accounting and tax records — for the statutory period;',
      'technical logs — under the host’s retention rules and no longer than needed for security and diagnostics, unless a log is evidence of an incident;',
      'marketing attribution data stored in browser storage — for up to 90 days and no longer than until the relevant consent is withdrawn;',
      'Microsoft Clarity session recordings — normally for 30 days; recordings marked as favorites may be retained for up to 9 months;',
      'consent-based data — until consent is withdrawn or the purpose ends.',
    ] }] },
    { title: '6. Your rights', blocks: [
      { type: 'paragraph', text: `Depending on the legal basis, you may request access, correction, erasure, restriction, portability, object to processing or withdraw consent. Contact ${contact.email}. Withdrawal does not affect earlier lawful processing.` },
      { type: 'paragraph', text: 'You may also complain to the President of the Polish Personal Data Protection Office (Prezes UODO).' },
    ] },
    { title: '7. Whether data is required', blocks: [{ type: 'paragraph', text: 'Providing data is voluntary, but contact and order details are necessary to reply, prepare an offer or perform a contract. Accounting and tax information becomes mandatory after a transaction.' }] },
    { title: '8. WhatsApp and external links', blocks: [{ type: 'paragraph', text: 'The WhatsApp button opens Meta’s service. A prepared message is not sent automatically; the user chooses whether to send it. Meta also acts as an independent controller under its own policy. The Controller is not responsible for the privacy rules of other external sites.' }] },
    { title: '9. Google Tag Manager, Microsoft Clarity and device storage', blocks: [
      { type: 'paragraph', text: 'The site uses Google Tag Manager to manage tags. Google Consent Mode denies advertising and analytics storage by default. The privacy panel lets users accept all optional technologies, reject them or select analytics and advertising measurement separately. The choice is stored in the necessary eurosortex_consent cookie for 180 days and can later be changed through the footer link.' },
      { type: 'paragraph', text: 'With analytics consent, Microsoft Clarity records how the site is used, including clicks, scrolling, visited sections and session recordings, and generates heatmaps. Sensitive content is masked by default. Clarity honors Google Consent Mode signals, so analytics cookies are used only after the relevant consent.' },
      { type: 'paragraph', text: 'After consent to analytics or advertising measurement, the Website may store first- and last-touch campaign data for up to 90 days: UTM parameters, advertising click identifiers, landing page, referrer and capture time. This data is attached to a voluntarily submitted enquiry and transferred to the CRM to identify the enquiry source and measure marketing effectiveness. Withdrawing both consents removes the stored record from browser storage.' },
      { type: 'paragraph', text: 'Loading Google or Microsoft code may establish a technical connection to the provider’s servers and transfer network data such as the IP address and browser information. The tag container is reviewed periodically.' },
      { type: 'note', text: 'Browser settings can restrict or delete cookies and other site data. Blocking essential technical storage may affect some features.' },
    ] },
    { title: '10. Automated decisions and changes', blocks: [
      { type: 'paragraph', text: 'The Controller does not make decisions producing legal effects solely by automated means and does not profile users for that purpose.' },
      { type: 'paragraph', text: 'This Policy may change when law, providers or the site changes. The current version and effective date are published here.' },
    ] },
  ],
});

const enElectronicServices = translatedDocument(plElectronicServices, {
  title: 'Electronic Services Terms',
  metaDescription: 'Terms governing use of the EuroSortex Group website and its electronic services.',
  eyebrow: 'LEGAL DOCUMENTS',
  effectiveDateLabel: 'Effective from',
  effectiveDate: '5 August 2026',
  intro: 'These Terms govern free use of eurosortex.com. Sales are governed separately by the B2B Sales Terms and an individual offer.',
  sections: [
    { title: '1. Service provider', blocks: [{ type: 'paragraph', text: `The provider is ${operator}, ${registeredAddress}; ${registryDetails}. Email: ${contact.email}; phone: ${contact.phoneDisplay}. EuroSortex Group is the Provider’s trading name.` }] },
    { title: '2. Definitions', blocks: [{ type: 'list', items: ['Website — eurosortex.com and its language versions;', 'User — anyone using the Website;', 'Electronic Services — Website functions supplied remotely at the User’s individual request;', 'Provider — the entity identified in section 1.'] }] },
    { title: '3. Services', blocks: [
      { type: 'paragraph', text: 'Free services include viewing pages and the information catalogue, filtering catalogue items, choosing a language, and links that initiate phone, email or WhatsApp contact.' },
      { type: 'paragraph', text: 'There are no user accounts, basket or online payment. Viewing a product and price does not conclude a sale directly on the Website.' },
    ] },
    { title: '4. Technical requirements', blocks: [{ type: 'list', items: ['an Internet-connected device and current HTML5/CSS browser;', 'JavaScript for the full filter, menu and measurement functionality;', 'an email client, phone or WhatsApp account only when using that external channel;', 'current software and protection against malicious code are recommended.'] }] },
    { title: '5. Formation and termination', blocks: [{ type: 'paragraph', text: 'An electronic service agreement begins when the User starts the relevant function and ends when the function is completed or the Website is left. The User may stop at any time without a separate notice.' }] },
    { title: '6. Acceptable use', blocks: [
      { type: 'paragraph', text: 'Users must comply with law, good practice, these Terms and third-party rights.' },
      { type: 'list', items: ['unlawful content is prohibited;', 'malware, interference, circumvention of controls and unauthorised security testing are prohibited;', 'automated extraction that overloads infrastructure or infringes database rights is prohibited;', 'impersonation and use of contact details for unlawful messages are prohibited.'] },
    ] },
    { title: '7. Commercial information', blocks: [{ type: 'paragraph', text: 'Catalogue content, prices, photographs, composition and availability are informative invitations to negotiate, not offers under Article 66 of the Polish Civil Code. The current batch, price and terms are confirmed in an individual offer.' }] },
    { title: '8. Liability and downtime', blocks: [
      { type: 'paragraph', text: 'The Provider uses reasonable care but may perform maintenance and is not liable for failures beyond reasonable control, including external telecom, email and WhatsApp services.' },
      { type: 'paragraph', text: 'Identified errors are corrected, but continuous availability of a product or unchanged catalogue content is not guaranteed.' },
    ] },
    { title: '9. Website complaints', blocks: [
      { type: 'paragraph', text: `Send complaints to ${contact.email} with contact details, description, date, URL and, where possible, a screenshot.` },
      { type: 'paragraph', text: 'The Provider replies without undue delay and no later than 14 days after receiving a complete submission. Goods complaints follow the B2B Sales Terms.' },
    ] },
    { title: '10. Data and intellectual property', blocks: [{ type: 'paragraph', text: 'Personal data is governed by the Privacy Policy. Website text, layout, graphics, images and marks may be protected; use of the Website does not transfer rights to the User.' }] },
    { title: '11. Final provisions', blocks: [
      { type: 'paragraph', text: 'Polish law applies, including the Civil Code and the Electronic Services Act. Mandatory rights of specially protected persons remain unaffected.' },
      { type: 'paragraph', text: 'The Terms may change due to law, functionality or Provider data. A new version applies from its stated date without affecting accrued rights.' },
    ] },
  ],
});

const enSalesTerms = translatedDocument(plSalesTerms, {
  title: 'B2B Sales Terms',
  metaDescription: 'EuroSortex Group B2B terms for wholesale orders of sorted second-hand clothing.',
  eyebrow: 'LEGAL DOCUMENTS',
  effectiveDateLabel: 'Effective from',
  effectiveDate: '5 August 2026',
  intro: 'These Terms govern wholesale sales to businesses. They are not an offer and apply when supplied to the Buyer before the contract is made.',
  sections: [
    { title: '1. Seller and scope', blocks: [
      { type: 'paragraph', text: `The Seller is ${operator}, ${registeredAddress}; ${registryDetails}; ${contact.email}, ${contact.phoneDisplay}. Warehouse and possible collection by appointment: ${warehouseAddress}.` },
      { type: 'paragraph', text: 'These Terms apply only to business buyers where the purchase is professional and directly connected with their business. Consumer sales are not conducted through this channel.' },
    ] },
    { title: '2. Definitions and priority', blocks: [
      { type: 'list', items: ['Buyer — a business purchasing in a professional connection with its activity;', 'Goods — used clothing, footwear or accessories sold in wholesale batches;', 'Batch — a specific quantity with parameters in the individual offer;', 'Offer — the Seller’s individual proposal stating the Goods, price or calculation method and validity;', 'Contract — the sale contract formed under section 4.'] },
      { type: 'paragraph', text: 'Priority is: individual written terms, Offer/order confirmation, then these Terms. Website content is supplementary.' },
    ] },
    { title: '3. Website information and Goods', blocks: [
      { type: 'paragraph', text: 'Catalogue entries, prices, photographs, grades, composition and branded shares are indicative invitations to negotiate under Article 71 of the Polish Civil Code. They do not reserve Goods or form a public offer.' },
      { type: 'paragraph', text: 'Goods are used and sold in wholesale batches. Variations in style, brand, size, colour, wear and mix are inherent. Only parameters, grade, tolerances and photographs of a specific Batch expressly included in the Offer are binding.' },
      { type: 'paragraph', text: 'Grade 1/2, percentages and any share unsuitable for resale must be specified in the Batch Offer. The Buyer must state required parameters and intended use before accepting.' },
    ] },
    { title: '4. Enquiry, Offer and Contract', blocks: [
      { type: 'paragraph', text: 'An enquiry may be made by WhatsApp, email or phone. An enquiry or prefilled message does not bind the Seller.' },
      { type: 'paragraph', text: 'The Seller sends an individual Offer or confirmation. A Contract forms when the Buyer accepts within validity in the stated manner, unless the Offer makes formation conditional on full prepayment. Buyer changes require express Seller confirmation.' },
      { type: 'paragraph', text: 'The Buyer provides correct company, tax, authority and delivery data. The Seller may verify business status and authority.' },
    ] },
    { title: '5. Price, VAT and payment', blocks: [
      { type: 'paragraph', text: 'Prices are net PLN unless expressly stated otherwise. VAT is added at the applicable rate. Transport, pallets, extra packing and services are excluded unless the Offer says otherwise.' },
      { type: 'paragraph', text: 'The standard term is 100% prepayment by bank transfer to the Seller’s stated account against its payment document. Payment occurs on credit. Set-off requires prior written consent except for claims finally adjudicated.' },
    ] },
    { title: '6. Reservation and unavailability', blocks: [
      { type: 'paragraph', text: 'Goods are reserved under the Offer, normally after full prepayment. Availability may change before then.' },
      { type: 'paragraph', text: 'If performance becomes impossible, the Seller promptly informs the Buyer and, as agreed, offers a substitute, new date or refund for the unperformed part. Liability that cannot legally be excluded remains.' },
    ] },
    { title: '7. Delivery, collection and risk', blocks: [
      { type: 'paragraph', text: 'The standard expected period is 1–3 weeks after full prepayment unless the Offer states otherwise. A date is guaranteed only if expressly marked as such.' },
      { type: 'paragraph', text: 'Transport is paid by the Buyer. The Seller may assist, the Buyer may nominate a carrier, or collect. Unless agreed otherwise, risk passes on delivery to the Buyer or a carrier chosen or accepted by the Buyer.' },
      { type: 'paragraph', text: 'The Buyer arranges unloading and checks package count and visible damage. Transport damage must be recorded on the transport document and, where possible, in a report and photographs with the carrier.' },
    ] },
    { title: '8. Title', blocks: [{ type: 'paragraph', text: 'Title passes after full price and agreed costs are paid. Until then, the Buyer may not dispose of the Goods contrary to the retention of title.' }] },
    { title: '9. Inspection and complaints', blocks: [
      { type: 'paragraph', text: 'The Buyer inspects in the customary time and manner. Quantity, assortment and ordinary visible defects must be reported without undue delay and no later than 3 business days after receipt; hidden defects no later than 3 business days after discovery.' },
      { type: 'paragraph', text: `A complaint to ${contact.email} must include invoice/order, Batch, description, scope, date and photos/video. On request, disputed Goods must be preserved for inspection and not resold or processed until documented.` },
      { type: 'paragraph', text: 'For a valid complaint the Seller may, at its choice, supply a shortage, replace the affected part, reduce the price or refund that part. Another solution may be agreed.' },
    ] },
    { title: '10. Statutory warranty, returns and liability', blocks: [
      { type: 'paragraph', text: 'Under Article 558 §1 of the Polish Civil Code, statutory defect warranty (rękojmia) is excluded to the fullest extent permitted. It is ineffective for fraudulent concealment. The agreed complaint procedure remains.' },
      { type: 'paragraph', text: 'There is no consumer 14-day withdrawal right. Conforming Goods may be returned only with prior written Seller consent.' },
      { type: 'paragraph', text: 'Except for intentional harm and non-excludable cases, total liability is capped at the net value of the affected part of the order. Lost profit, downtime and indirect economic loss are excluded.' },
    ] },
    { title: '11. Force majeure', blocks: [{ type: 'paragraph', text: 'A party is not liable for events beyond reasonable control, including disaster, fire, flood, epidemic, war, disorder, authority action, infrastructure failure, transport blockade or material supply-chain disruption. It must promptly notify and mitigate.' }] },
    { title: '12. Confidentiality, data and rights', blocks: [
      { type: 'paragraph', text: 'Non-public Offer terms, Batch photographs and confidential commercial information may not be disclosed except as needed for the Contract or law.' },
      { type: 'paragraph', text: 'Personal data is governed by the Privacy Policy. No rights to EuroSortex Group, photographs, descriptions or materials are transferred.' },
    ] },
    { title: '13. Governing law and final terms', blocks: [
      { type: 'paragraph', text: 'Polish law applies. Courts at the Seller’s registered office have jurisdiction unless mandatory law provides otherwise.' },
      { type: 'paragraph', text: 'Invalidity of one term does not affect the rest. Amendments apply prospectively; the version supplied before the Contract applies. The Polish version is binding and translations are for convenience.' },
    ] },
  ],
});

const ukPrivacy: LegalDocument = {
  title: 'Політика конфіденційності',
  metaDescription: 'Політика конфіденційності EuroSortex Group: обробка даних, звернення, WhatsApp, Google та Microsoft Clarity.',
  eyebrow: 'ЮРИДИЧНІ ДОКУМЕНТИ',
  effectiveDateLabel: 'Чинна з',
  effectiveDate: '3 вересня 2026 р.',
  intro: 'Ця Політика пояснює, як обробляються персональні дані відвідувачів eurosortex.com та осіб, які звертаються до нас із комерційних питань.',
  sections: [
    { title: '1. Адміністратор даних', blocks: [
      { type: 'paragraph', text: `Адміністратором є ${operator}, адреса: ${registeredAddress}, ${registry}. EuroSortex Group є торговельною назвою Адміністратора.` },
      { type: 'paragraph', text: `З питань персональних даних: ${contact.email}, телефон ${contact.phoneDisplay}.` },
    ] },
    { title: '2. Які дані ми обробляємо', blocks: [{ type: 'list', items: [
      'дані, надані через форму сайту, електронною поштою, телефоном або через WhatsApp: ім’я, номер телефону, email, назва компанії, NIP і зміст звернення;',
      'дані представників, працівників і підрядників клієнтів;',
      'дані щодо запитів, пропозицій, замовлень, оплат, доставок, фактур і рекламацій;',
      'технічні дані: IP-адреса, пристрій, браузер, час запиту, URL і журнали безпеки; після отримання відповідної згоди також UTM-параметри, рекламні ідентифікатори кліків, сторінка входу та referrer;',
      'події інтерфейсу в локальному шарі даних, наприклад натискання телефону, WhatsApp, фільтрів і зміни мови; передавання до вимірювальних систем регулюється розділом 9.',
    ] }] },
    { title: '3. Цілі та правові підстави', blocks: [{ type: 'list', items: [
      'відповідь, підготовка пропозиції та дії до укладення договору — ст. 6(1)(b) GDPR, якщо суб’єкт даних є стороною договору;',
      'B2B-контакт із представниками контрагентів — законний інтерес у діловій комунікації, ст. 6(1)(f) GDPR;',
      'укладення й виконання договору, оплата, доставка та рекламації — ст. 6(1)(b) або 6(1)(f) GDPR для контактних осіб;',
      'бухгалтерські, податкові та інші юридичні обов’язки — ст. 6(1)(c) GDPR;',
      'встановлення, пред’явлення та захист вимог, запобігання зловживанням — ст. 6(1)(f) GDPR;',
      'безпека, діагностика й адміністрування сайту — ст. 6(1)(f) GDPR;',
      'аналітика та вимірювання реклами — лише за попередньою згодою відповідно до ст. 6(1)(a) GDPR.',
    ] }] },
    { title: '4. Одержувачі та передавання за межі ЄЕЗ', blocks: [
      { type: 'paragraph', text: 'Дані можуть отримувати постачальники хостингу, IT, CRM-системи (Kommo), електронної пошти й бухгалтерії, банки, перевізники, юридичні та податкові консультанти, а також органи влади у випадках, передбачених законом.' },
      { type: 'paragraph', text: 'У разі використання WhatsApp дані також обробляє Meta Platforms Ireland Limited; поштові сервіси та інструменти Google може надавати Google Ireland Limited, а Microsoft Clarity — компанії групи Microsoft. Їхня інфраструктура або підрядники можуть перебувати поза ЄЕЗ. Передавання ґрунтується на застосовному рішенні про належний рівень захисту або стандартних договірних положеннях.' },
    ] },
    { title: '5. Строки зберігання', blocks: [{ type: 'list', items: [
      'звернення без договору — до завершення питання, а далі на строк, обґрунтований можливим продовженням переговорів або захистом вимог;',
      'договірні дані — під час виконання та до спливу строків позовної давності;',
      'бухгалтерські й податкові документи — протягом установлених законом строків;',
      'технічні журнали — за правилами хостинг-провайдера й не довше, ніж потрібно для безпеки та діагностики, крім журналів, що є доказом інциденту;',
      'дані маркетингової атрибуції в пам’яті браузера — до 90 днів і не довше, ніж до відкликання відповідної згоди;',
      'записи сесій Microsoft Clarity — зазвичай протягом 30 днів; записи, позначені як вибрані, можуть зберігатися до 9 місяців;',
      'дані на підставі згоди — до її відкликання або припинення відповідної мети.',
    ] }] },
    { title: '6. Права суб’єктів даних', blocks: [
      { type: 'paragraph', text: `Залежно від підстави обробки можна вимагати доступу, виправлення, видалення, обмеження, перенесення, заперечити проти обробки або відкликати згоду. Звернення: ${contact.email}. Відкликання не впливає на законність попередньої обробки.` },
      { type: 'paragraph', text: 'Також можна подати скаргу Голові польського Управління із захисту персональних даних (Prezes UODO).' },
    ] },
    { title: '7. Добровільність надання', blocks: [{ type: 'paragraph', text: 'Надання даних є добровільним, але контактні відомості та дані замовлення потрібні для відповіді, пропозиції або виконання договору. Після операції відомості, яких вимагає бухгалтерське й податкове законодавство, є обов’язковими.' }] },
    { title: '8. WhatsApp і зовнішні посилання', blocks: [{ type: 'paragraph', text: 'Кнопка WhatsApp відкриває сервіс Meta. Підготовлене повідомлення не надсилається автоматично — користувач сам вирішує, чи надсилати його. Meta також обробляє дані як самостійний адміністратор за власною політикою. Адміністратор не відповідає за правила конфіденційності інших зовнішніх сайтів.' }] },
    { title: '9. Google Tag Manager, Microsoft Clarity і пам’ять пристрою', blocks: [
      { type: 'paragraph', text: 'Сайт використовує Google Tag Manager для технічного керування тегами. Google Consent Mode за замовчуванням забороняє рекламне й аналітичне зберігання. Панель конфіденційності дає змогу прийняти всі необов’язкові технології, відхилити їх або окремо вибрати аналітику та вимірювання реклами. Вибір зберігається в необхідному cookie eurosortex_consent протягом 180 днів і згодом може бути змінений через посилання у футері.' },
      { type: 'paragraph', text: 'За згодою на аналітику Microsoft Clarity реєструє використання сайту, зокрема кліки, прокручування, відвідані розділи й записи сесій, та створює теплові карти. Чутливий вміст за замовчуванням маскується. Clarity враховує сигнали Google Consent Mode, тому аналітичні cookies використовуються лише після відповідної згоди.' },
      { type: 'paragraph', text: 'Після згоди на аналітику або вимірювання реклами сайт може зберігати до 90 днів дані першого й останнього контакту з кампанією: UTM-параметри, рекламні ідентифікатори кліків, сторінку входу, referrer і час контакту. Ці дані додаються до добровільно надісланого запиту та передаються до CRM для визначення джерела запиту й вимірювання ефективності маркетингу. Відкликання обох згод видаляє запис із пам’яті браузера.' },
      { type: 'paragraph', text: 'Завантаження коду Google або Microsoft може встановити технічне з’єднання із серверами постачальника й передати мережеві дані, зокрема IP та відомості браузера. Конфігурація контейнера періодично перевіряється.' },
      { type: 'note', text: 'У браузері можна обмежити або видалити cookies та інші дані сайтів. Блокування необхідної технічної пам’яті може вплинути на роботу сайту.' },
    ] },
    { title: '10. Автоматизовані рішення та зміни', blocks: [
      { type: 'paragraph', text: 'Адміністратор не приймає виключно автоматизованих рішень із юридичними наслідками й не профілює користувачів із цією метою.' },
      { type: 'paragraph', text: 'Політика може оновлюватися у разі зміни законодавства, постачальників або сайту. Актуальна версія й дата дії публікуються тут.' },
    ] },
  ],
};

const ukElectronicServices: LegalDocument = {
  title: 'Правила надання електронних послуг',
  metaDescription: 'Правила користування сайтом EuroSortex Group та надання електронних послуг.',
  eyebrow: 'ЮРИДИЧНІ ДОКУМЕНТИ',
  effectiveDateLabel: 'Чинні з',
  effectiveDate: '5 серпня 2026 р.',
  intro: 'Правила регулюють безоплатне користування eurosortex.com. Продаж регулюється окремими B2B OWS та індивідуальною пропозицією.',
  sections: [
    { title: '1. Надавач послуг', blocks: [{ type: 'paragraph', text: `Надавач — ${operator}, ${registeredAddress}; ${registryDetails}. Email: ${contact.email}, телефон: ${contact.phoneDisplay}. EuroSortex Group — торговельна назва Надавача.` }] },
    { title: '2. Визначення', blocks: [{ type: 'list', items: ['Сайт — eurosortex.com і його мовні версії;', 'Користувач — будь-яка особа, яка користується Сайтом;', 'Електронні послуги — функції Сайту, що надаються дистанційно на індивідуальний запит;', 'Надавач — особа, зазначена в розділі 1.'] }] },
    { title: '3. Види та обсяг послуг', blocks: [
      { type: 'paragraph', text: 'Безоплатні послуги охоплюють перегляд сторінок та інформаційного каталогу, фільтрування, вибір мови й посилання для початку дзвінка, email або спілкування через WhatsApp.' },
      { type: 'paragraph', text: 'На Сайті немає облікових записів, кошика й онлайн-оплати. Перегляд товару та ціни не укладає договір безпосередньо на Сайті.' },
    ] },
    { title: '4. Технічні вимоги', blocks: [{ type: 'list', items: ['пристрій із доступом до Інтернету та сучасний браузер із HTML5/CSS;', 'JavaScript для повної роботи фільтрів, меню та вимірювальних функцій;', 'email-клієнт, телефон або WhatsApp — лише для відповідного зовнішнього каналу;', 'рекомендовано актуальне програмне забезпечення й захист від шкідливого коду.'] }] },
    { title: '5. Укладення та припинення договору', blocks: [{ type: 'paragraph', text: 'Договір про електронну послугу укладається на початку користування відповідною функцією та припиняється після завершення функції або виходу із Сайту. Користувач може припинити користування будь-коли без окремої заяви.' }] },
    { title: '6. Правила користування', blocks: [
      { type: 'paragraph', text: 'Користувач зобов’язаний дотримуватися закону, добрих звичаїв, цих Правил і прав третіх осіб.' },
      { type: 'list', items: ['заборонено незаконний контент;', 'заборонено шкідливий код, перешкоджання, обхід захисту та несанкціоноване тестування;', 'заборонено автоматичне масове завантаження, що перевантажує інфраструктуру або порушує права на базу даних;', 'заборонено видавати себе за іншу особу та використовувати контакти для незаконних повідомлень.'] },
    ] },
    { title: '7. Комерційна інформація', blocks: [{ type: 'paragraph', text: 'Каталог, ціни, фотографії, склад і доступність мають інформаційний характер та є запрошенням до переговорів, а не офертою за ст. 66 Цивільного кодексу Польщі. Конкретну партію, ціну й умови підтверджує індивідуальна пропозиція.' }] },
    { title: '8. Відповідальність і перерви', blocks: [
      { type: 'paragraph', text: 'Надавач дбає про доступність і безпеку, але може проводити технічне обслуговування та не відповідає за збої поза розумним контролем, зокрема зовнішній зв’язок, email і WhatsApp.' },
      { type: 'paragraph', text: 'Виявлені помилки виправляються, однак постійна наявність конкретного товару й незмінність каталогу не гарантуються.' },
    ] },
    { title: '9. Скарги щодо Сайту', blocks: [
      { type: 'paragraph', text: `Скаргу слід надіслати на ${contact.email}, зазначивши контакт, опис, дату, URL і, за можливості, знімок екрана.` },
      { type: 'paragraph', text: 'Відповідь надається без невиправданої затримки, не пізніше 14 днів після отримання повного звернення. Рекламації щодо товару регулюються OWS B2B.' },
    ] },
    { title: '10. Дані та інтелектуальна власність', blocks: [{ type: 'paragraph', text: 'Персональні дані регулюються Політикою конфіденційності. Тексти, структура, графіка, фотографії та позначення можуть охоронятися законом; користування Сайтом не передає права Користувачеві.' }] },
    { title: '11. Прикінцеві положення', blocks: [
      { type: 'paragraph', text: 'Застосовується польське право, зокрема Цивільний кодекс і закон про електронні послуги. Імперативні права осіб зі спеціальним захистом зберігаються.' },
      { type: 'paragraph', text: 'Правила можуть змінюватися у зв’язку зі зміною закону, функцій або даних Надавача. Нова версія діє з указаної дати й не порушує раніше набутих прав.' },
    ] },
  ],
};

const ukSalesTerms: LegalDocument = {
  title: 'Загальні умови продажу B2B',
  metaDescription: 'Загальні умови оптового B2B-продажу сортованого одягу EuroSortex Group.',
  eyebrow: 'ЮРИДИЧНІ ДОКУМЕНТИ',
  effectiveDateLabel: 'Чинні з',
  effectiveDate: '5 серпня 2026 р.',
  intro: 'OWS регулюють оптовий продаж підприємцям. Вони не є офертою та застосовуються, якщо були надані Покупцеві до укладення договору.',
  sections: [
    { title: '1. Продавець і сфера застосування', blocks: [
      { type: 'paragraph', text: `Продавець — ${operator}, ${registeredAddress}; ${registryDetails}; ${contact.email}, ${contact.phoneDisplay}. Склад і можливий самовивіз після погодження: ${warehouseAddress}.` },
      { type: 'paragraph', text: 'OWS застосовуються лише до підприємців, коли покупка має професійний характер і безпосередньо пов’язана з їхньою діяльністю. У цьому каналі споживчий продаж не здійснюється.' },
    ] },
    { title: '2. Визначення та пріоритет документів', blocks: [
      { type: 'list', items: ['Покупець — підприємець, який купує товар у професійному зв’язку зі своєю діяльністю;', 'Товар — уживаний одяг, взуття або аксесуари, що продаються оптовими партіями;', 'Партія — конкретна кількість Товару з параметрами індивідуальної пропозиції;', 'Пропозиція — індивідуальні умови Продавця з Товаром, ціною або способом її розрахунку та строком дії;', 'Договір — договір продажу, укладений за розділом 4.'] },
      { type: 'paragraph', text: 'У разі суперечності застосовуються: індивідуальні письмові домовленості, Пропозиція/підтвердження замовлення, а потім OWS. Сайт має допоміжний характер.' },
    ] },
    { title: '3. Сайт і властивості Товару', blocks: [
      { type: 'paragraph', text: 'Каталог, ціни, фотографії, класи, склад і частка брендових речей є орієнтовним запрошенням до переговорів за ст. 71 Цивільного кодексу Польщі. Вони не резервують Товар і не є публічною офертою.' },
      { type: 'paragraph', text: 'Товар є уживаним. Відмінності фасонів, брендів, розмірів, кольорів, зношення та складу є природними. Обов’язкові лише параметри, клас, допуски й фотографії конкретної Партії, прямо включені до Пропозиції.' },
      { type: 'paragraph', text: 'Позначення ґатунку 1/2, відсотки та можлива частка речей, непридатних для подальшого продажу, мають уточнюватися в Пропозиції. До прийняття умов Покупець повідомляє потрібні параметри й призначення.' },
    ] },
    { title: '4. Запит, Пропозиція та Договір', blocks: [
      { type: 'paragraph', text: 'Запит можна надіслати через WhatsApp, email або телефоном. Запит і підготовлений текст повідомлення не зобов’язують Продавця.' },
      { type: 'paragraph', text: 'Продавець надсилає індивідуальну Пропозицію або підтвердження. Договір укладається після прийняття в межах строку зазначеним способом, якщо Пропозиція не ставить укладення в залежність від повної передплати. Зміни Покупця потребують прямого підтвердження Продавця.' },
      { type: 'paragraph', text: 'Покупець надає правильні дані компанії, NIP, уповноваженої особи й доставки. Продавець може перевірити статус і повноваження.' },
    ] },
    { title: '5. Ціна, VAT та оплата', blocks: [
      { type: 'paragraph', text: 'Ціни зазначено нетто в PLN, якщо прямо не вказано інше. Додається VAT за чинною ставкою. Транспорт, палети, додаткове пакування та послуги не включені, якщо Пропозиція не передбачає інше.' },
      { type: 'paragraph', text: 'Стандартна умова — 100% передплата переказом на рахунок Продавця за його платіжним документом. Оплату здійснено при зарахуванні. Залік вимог Покупця потребує попередньої письмової згоди, крім вимог, остаточно встановлених судом.' },
    ] },
    { title: '6. Резервування та відсутність Товару', blocks: [
      { type: 'paragraph', text: 'Товар резервується за правилами Пропозиції, зазвичай після повної передплати. До цього наявність може змінитися.' },
      { type: 'paragraph', text: 'Якщо виконання неможливе, Продавець невідкладно повідомляє та за погодженням пропонує заміну, новий строк або повертає оплату за невиконану частину. Відповідальність, яку закон не дозволяє виключити, зберігається.' },
    ] },
    { title: '7. Доставка, отримання та ризик', blocks: [
      { type: 'paragraph', text: 'Звичайний очікуваний строк — 1–3 тижні після повної передплати, якщо Пропозиція не встановлює інше. Строк гарантований лише за прямого позначення.' },
      { type: 'paragraph', text: 'Транспорт оплачує Покупець. Можлива допомога Продавця, перевізник Покупця або самовивіз. Якщо не погоджено інше, ризик переходить під час передавання Покупцеві або обраному/схваленому ним перевізнику.' },
      { type: 'paragraph', text: 'Покупець забезпечує розвантаження та перевіряє кількість пакувань і видимі пошкодження. Транспортну шкоду фіксують у документі перевізника, протоколі та фотографіях.' },
    ] },
    { title: '8. Право власності', blocks: [{ type: 'paragraph', text: 'Право власності переходить після повної оплати ціни й погоджених витрат. До цього Покупець не може розпоряджатися Товаром усупереч застереженню про збереження власності.' }] },
    { title: '9. Перевірка та рекламації', blocks: [
      { type: 'paragraph', text: 'Покупець перевіряє Товар звичайним для такого товару способом. Кількість, асортимент і видимі недоліки заявляються без затримки, не пізніше 3 робочих днів після отримання; приховані — не пізніше 3 робочих днів після виявлення.' },
      { type: 'paragraph', text: `Рекламація на ${contact.email} має містити номер фактури/замовлення, Партію, опис, обсяг, дату й фото/відео. На вимогу спірний Товар зберігають для огляду та не продають/не переробляють до документування.` },
      { type: 'paragraph', text: 'За обґрунтованою рекламацією Продавець на свій вибір поповнює нестачу, замінює спірну частину, знижує ціну або повертає ціну цієї частини. Можлива інша домовленість.' },
    ] },
    { title: '10. Rękojmia, повернення та відповідальність', blocks: [
      { type: 'paragraph', text: 'За ст. 558 §1 Цивільного кодексу Польщі відповідальність за rękojmia виключається в максимально допустимому обсязі. Виключення недійсне в разі умисного приховування недоліку. Погоджена процедура рекламації зберігається.' },
      { type: 'paragraph', text: 'Споживчого 14-денного права відмови немає. Повернення належного Товару можливе лише за попередньою письмовою згодою Продавця.' },
      { type: 'paragraph', text: 'Крім умисної шкоди та випадків, де обмеження заборонене, загальна відповідальність обмежена нетто-вартістю відповідної частини замовлення. Упущена вигода, простій і непрямі господарські збитки не відшкодовуються.' },
    ] },
    { title: '11. Форс-мажор', blocks: [{ type: 'paragraph', text: 'Сторона не відповідає за події поза розумним контролем: катастрофу, пожежу, повінь, епідемію, війну, заворушення, рішення влади, аварію інфраструктури, транспортну блокаду або істотний збій ланцюга постачання. Вона повідомляє іншу сторону й обмежує наслідки.' }] },
    { title: '12. Конфіденційність, дані та права', blocks: [
      { type: 'paragraph', text: 'Непублічні умови, фотографії Партії та конфіденційна комерційна інформація не передаються третім особам, крім необхідного для Договору або закону.' },
      { type: 'paragraph', text: 'Дані регулюються Політикою конфіденційності. Договір не передає права на EuroSortex Group, фотографії, описи та матеріали.' },
    ] },
    { title: '13. Право та прикінцеві положення', blocks: [
      { type: 'paragraph', text: 'Застосовується польське право. Спори розглядає суд за місцезнаходженням Продавця, якщо імперативна норма не вимагає іншого.' },
      { type: 'paragraph', text: 'Недійсність окремої умови не впливає на решту. Зміни діють на майбутнє; до замовлення застосовується версія до Договору. Обов’язковою є польська версія, переклади надано для зручності.' },
    ] },
  ],
};

export const legalUi: Record<Locale, LegalUi> = {
  pl: {
    backHome: 'Wróć na stronę główną',
    documents: 'Dokumenty prawne',
    language: 'Język dokumentu',
    privacy: 'Polityka prywatności',
    electronicServices: 'Regulamin usług elektronicznych',
    salesTerms: 'Ogólne Warunki Sprzedaży B2B',
  },
  ru: {
    backHome: 'Вернуться на главную',
    documents: 'Юридические документы',
    language: 'Язык документа',
    privacy: 'Политика конфиденциальности',
    electronicServices: 'Правила электронных услуг',
    salesTerms: 'Условия продаж B2B',
    translationNotice: 'Перевод подготовлен для удобства. Для Regulamin и OWS обязательной является польская версия в пределах, допускаемых императивным правом.',
  },
  uk: {
    backHome: 'Повернутися на головну',
    documents: 'Юридичні документи',
    language: 'Мова документа',
    privacy: 'Політика конфіденційності',
    electronicServices: 'Правила електронних послуг',
    salesTerms: 'Умови продажу B2B',
    translationNotice: 'Переклад надано для зручності. Для Regulamin та OWS обов’язковою є польська версія в межах, дозволених імперативним правом.',
  },
  en: {
    backHome: 'Back to home',
    documents: 'Legal documents',
    language: 'Document language',
    privacy: 'Privacy Policy',
    electronicServices: 'Electronic Services Terms',
    salesTerms: 'B2B Sales Terms',
    translationNotice: 'This translation is provided for convenience. The Polish version of the Electronic Services Terms and B2B Sales Terms is binding to the extent permitted by mandatory law.',
  },
};

export const legalContent: Record<Locale, Record<LegalDocumentKey, LegalDocument>> = {
  pl: { privacy: plPrivacy, electronicServices: plElectronicServices, salesTerms: plSalesTerms },
  ru: { privacy: ruPrivacy, electronicServices: ruElectronicServices, salesTerms: ruSalesTerms },
  uk: { privacy: ukPrivacy, electronicServices: ukElectronicServices, salesTerms: ukSalesTerms },
  en: { privacy: enPrivacy, electronicServices: enElectronicServices, salesTerms: enSalesTerms },
};
