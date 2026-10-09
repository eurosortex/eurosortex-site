// Fictional layout examples, not customer testimonials. Keep the visible disclosure
// and noindex until these are replaced with genuine reviews approved for publication.
export interface ReviewExample {
  name: string;
  city: string;
  shop: string;
  title: string;
  text: string;
  items: { productId: string; kg: number }[];
}

export const reviewExamples: ReviewExample[] = [
  {
    name: 'Agnieszka K.', city: 'Poznań', shop: 'Mały sklep second-hand',
    title: 'Pomoc przy pierwszym zamówieniu.',
    text: 'Na początek wybrałam mix odzieży i bluzy. Zdjęcia partii pomogły mi podjąć decyzję. Miałam sporo pytań, ale mogłam spokojnie ustalić szczegóły przed zakupem.',
    items: [{ productId: 'mix-standart', kg: 100 }, { productId: 'urban-sweatshirts', kg: 50 }],
  },
  {
    name: 'Monika W.', city: 'Gdańsk', shop: 'Sklep z odzieżą dziecięcą',
    title: 'Uzupełnienie działu dziecięcego.',
    text: 'Wzięłam na próbę 50 kg odzieży dziecięcej. Różne kolory i fasony, choć rozmiarów nie było po równo. Przy kolejnej partii dopytam o większe dzieci. Kontakt konkretny.',
    items: [{ productId: 'kids-wear', kg: 50 }],
  },
  {
    name: 'Tomasz B.', city: 'Wrocław', shop: 'Sklep stacjonarny',
    title: 'Sprawnie i konkretnie.',
    text: 'Dostałem zdjęcia bluz, ustaliliśmy szczegóły i tyle — bez dziesięciu telefonów. Towar pasuje do mojego działu casual. Następnym razem zapytam też o męskie swetry.',
    items: [{ productId: 'urban-sweatshirts', kg: 100 }],
  },
  {
    name: 'Katarzyna P.', city: 'Łódź', shop: 'Butik second-hand',
    title: 'Dzianiny do mojego butiku.',
    text: 'Wybrałam 75 kg swetrów damskich, bo klientki często o nie pytają. Nie każdy fason pasował do mojego sklepu, ale przed zakupem mogłam dopytać o skład partii. To było dla mnie ważniejsze niż sama cena.',
    items: [{ productId: 'ladies-sweaters', kg: 75 }],
  },
  {
    name: 'Michał Z.', city: 'Lublin', shop: 'Rodzinny second-hand',
    title: 'Towar na chłodniejsze miesiące.',
    text: 'Z żoną wybraliśmy mix zimowy i kurtki. Wcześniej omówiliśmy proporcje, bo u nas przeważa dział damski. Po dostawie posegregowaliśmy rzeczy pod własną ekspozycję.',
    items: [{ productId: 'winter-assortment', kg: 150 }, { productId: 'classic-outwear', kg: 100 }],
  },
  {
    name: 'Joanna M.', city: 'Szczecin', shop: 'Sklep odzieżowy',
    title: 'Obuwie na mały regał.',
    text: 'Nie mam dużego działu z butami, więc zależało mi na obejrzeniu modeli przed decyzją. Zamówiłam obuwie sezonowe. Nadal sprawdzam, które rozmiary najlepiej pasują do potrzeb moich klientów.',
    items: [{ productId: 'season-shoes', kg: 50 }],
  },
  {
    name: 'Paweł R.', city: 'Bydgoszcz', shop: 'Sklep second-hand',
    title: 'Coś do męskiej części sklepu.',
    text: 'Zamówiłem swetry męskie, żeby uzupełnić dział. Szukałem klasycznych fasonów do codziennego noszenia. Na plus normalny kontakt i jasne ustalenia przed zamówieniem.',
    items: [{ productId: 'men-sweaters', kg: 100 }],
  },
  {
    name: 'Ewa S.', city: 'Kraków', shop: 'Osiedlowy sklep z odzieżą',
    title: 'Mix jako baza asortymentu.',
    text: 'Do 150 kg mixu odzieży dobrałam 50 kg damskich swetrów. U mnie kupują różne klientki, więc taki zestaw ma sens. Część rzeczy zostawiłam na kolejną zmianę ekspozycji.',
    items: [{ productId: 'mix-standart', kg: 150 }, { productId: 'ladies-sweaters', kg: 50 }],
  },
  {
    name: 'Magdalena L.', city: 'Rzeszów', shop: 'Niewielki second-hand',
    title: 'Czas na spokojny wybór.',
    text: 'O kurtki dopytywałam kilka razy. Mogłam ustalić szczegóły przed decyzją, bez pośpiechu. Następnym razem wcześniej zapytam o dostępność, żeby lepiej zaplanować zmianę wystawy.',
    items: [{ productId: 'classic-outwear', kg: 50 }],
  },
  {
    name: 'Dorota J.', city: 'Toruń', shop: 'Osiedlowy second-hand',
    title: 'Dwa działy w jednym zamówieniu.',
    text: 'Potrzebowałam dziecięcych rzeczy i bluz dla dorosłych. Wzięłam po 50 kg, bo na zapleczu mam mało miejsca. Najpierw dopytałam o obie partie na WhatsAppie — tak było mi najwygodniej.',
    items: [{ productId: 'kids-wear', kg: 50 }, { productId: 'urban-sweatshirts', kg: 50 }],
  },
  {
    name: 'Piotr D.', city: 'Katowice', shop: 'Sklep z odzieżą używaną',
    title: 'Wiedziałem, o co zapytać.',
    text: 'Przy 200 kg mixu chciałem wcześniej zobaczyć zdjęcia i znać koszt transportu. Ustaliliśmy to przed decyzją. Sam mix i tak trzeba potem przejrzeć i poukładać pod swój sklep.',
    items: [{ productId: 'mix-standart', kg: 200 }],
  },
  {
    name: 'Anna C.', city: 'Olsztyn', shop: 'Butik z odzieżą używaną',
    title: 'Swetry na zmianę ekspozycji.',
    text: 'Zależało mi na dzianinach, nie na całym mixie. Zamówiłam 100 kg damskich swetrów. Były różne fasony, więc na wieszaki wybrałam najpierw te, o które zwykle pytają moje klientki.',
    items: [{ productId: 'ladies-sweaters', kg: 100 }],
  },
  {
    name: 'Marcin F.', city: 'Kielce', shop: 'Rodzinny sklep odzieżowy',
    title: 'Najpierw ustalenia, potem zakup.',
    text: 'Braliśmy mix zimowy i męskie swetry. Przed zamówieniem zapytałem o termin, bo musiałem zaplanować miejsce na towar. Dobrze, że dało się omówić wszystko w jednej rozmowie.',
    items: [{ productId: 'winter-assortment', kg: 100 }, { productId: 'men-sweaters', kg: 50 }],
  },
  {
    name: 'Justyna N.', city: 'Opole', shop: 'Mały second-hand',
    title: 'Na początek mniejsza partia.',
    text: 'Wybrałam 50 kg obuwia. Nie chciałam od razu zapełniać całego regału jednym zakupem. Dopytałam o sezon i rozmiary; na zdjęciach łatwiej było mi ocenić, czy to kierunek dla mojego sklepu.',
    items: [{ productId: 'season-shoes', kg: 50 }],
  },
  {
    name: 'Beata W.', city: 'Białystok', shop: 'Sklep second-hand',
    title: 'Kurtki i bluzy zamiast kolejnego mixu.',
    text: 'Tym razem potrzebowałam konkretnych kategorii: 100 kg odzieży wierzchniej i 50 kg bluz. Miałam kilka pytań o stan rzeczy. Odpowiedzi pomogły mi zdecydować, co wziąć na tę dostawę.',
    items: [{ productId: 'classic-outwear', kg: 100 }, { productId: 'urban-sweatshirts', kg: 50 }],
  },
];
