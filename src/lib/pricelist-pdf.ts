import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { products, formatPrice } from '../data/products';
import { polishProductShortNames } from '../i18n/marketing';
import { company, contact } from '../config/contact';
import { brandAssets } from '../config/brandAssets';

/** Generated at build time from the same catalogue as the website. */
export async function createPricelistPdf() {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  doc.setTitle('EuroSortex - Cennik hurtowy');
  doc.setAuthor(company.brandName);
  doc.setSubject('Ceny netto odzieży i obuwia używanego');
  doc.setLanguage('pl-PL');
  const [regularBytes, boldBytes, logoBytes] = await Promise.all([
    readFile(resolve('src/assets/fonts/LiberationSans-Regular.ttf')),
    readFile(resolve('src/assets/fonts/LiberationSans-Bold.ttf')),
    readFile(resolve('public', brandAssets.logo.replace(/^\//, ''))),
  ]);
  const regular = await doc.embedFont(regularBytes, { subset: true });
  const bold = await doc.embedFont(boldBytes, { subset: true });
  const logo = await doc.embedPng(logoBytes);
  const page = doc.addPage([595.28, 841.89]);
  const green = rgb(0.118, 0.302, 0.2);
  const ink = rgb(0.14, 0.17, 0.15);
  const muted = rgb(0.36, 0.4, 0.36);
  const border = rgb(0.85, 0.88, 0.85);
  const tint = rgb(0.96, 0.97, 0.95);
  const white = rgb(1, 1, 1);
  const x = 42;
  const width = 511.28;
  const right = x + width;
  const text = (value: string, left: number, y: number, size = 11, strong = false, color = ink) => {
    page.drawText(value, { x: left, y, size, font: strong ? bold : regular, color });
  };
  const aligned = (value: string, edge: number, y: number, strong = false) => {
    const font = strong ? bold : regular;
    text(value, edge - font.widthOfTextAtSize(value, 11), y, 11, strong);
  };
  page.drawImage(logo, { x, y: 756, width: 48, height: 48 });
  text('EuroSortex Group', 103, 784, 20, true, green);
  text('Hurtownia odzieży używanej | Warszawa', 103, 765, 10, false, muted);
  text('Cennik hurtowy', x, 710, 26, true);
  text('Odzież i obuwie używane. Minimum: 50 kg każdej pozycji.', x, 687, 11, false, muted);
  const generatedOn = new Intl.DateTimeFormat('pl-PL', { timeZone: 'Europe/Warsaw', day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date());
  text(`Wygenerowano: ${generatedOn}`, x, 660, 9, false, muted);

  const top = 642;
  const headerHeight = 42;
  const rowHeight = 34;
  page.drawRectangle({ x, y: top - headerHeight, width, height: headerHeight, color: green });
  text('Rodzaj towaru', x + 12, top - 25, 11, true, white);
  text('Cena za 1 kg', 323, top - 18, 10, true, white);
  text('netto, PLN', 323, top - 32, 9, false, white);
  text('Koszt 50 kg', 453, top - 18, 10, true, white);
  text('netto, PLN', 453, top - 32, 9, false, white);
  products.forEach((product, index) => {
    const rowTop = top - headerHeight - index * rowHeight;
    if (index % 2 === 0) page.drawRectangle({ x, y: rowTop - rowHeight, width, height: rowHeight, color: tint });
    page.drawLine({ start: { x, y: rowTop - rowHeight }, end: { x: right, y: rowTop - rowHeight }, thickness: 0.5, color: border });
    text(polishProductShortNames[product.name] ?? product.name, x + 12, rowTop - 22, 11);
    aligned(`${formatPrice(product.netPricePlnPerKg, 'pl')} zł`, 411, rowTop - 22, true);
    aligned(`${formatPrice(product.netPricePlnPerKg * 50, 'pl')} zł`, right - 12, rowTop - 22);
  });
  const tableBottom = top - headerHeight - products.length * rowHeight;
  for (const columnX of [x, 304, 432, right]) page.drawLine({ start: { x: columnX, y: top - headerHeight }, end: { x: columnX, y: tableBottom }, thickness: 0.5, color: border });
  text('Ceny netto. VAT i transport doliczamy osobno.', x, tableBottom - 23, 10, false, muted);
  text('Ceny i dostępność potwierdzamy przed zamówieniem.', x, tableBottom - 39, 10, false, muted);

  const termsTop = tableBottom - 65;
  text('WARUNKI ZAMÓWIENIA', x, termsTop, 10, true, green);
  text('Dostawa: 1-3 tygodnie od zaksięgowania pełnej przedpłaty.', x, termsTop - 22, 10);
  text('Płatność: 100% przedpłaty przelewem na podstawie faktury.', x, termsTop - 40, 10);
  text('Transport: wyceniany osobno, opłaca kupujący. Możliwy odbiór własny.', x, termsTop - 58, 10);
  page.drawLine({ start: { x, y: 162 }, end: { x: right, y: 162 }, thickness: 0.7, color: border });
  text('ZAPYTAJ O OFERTĘ', x, 141, 10, true, green);
  text(`${contact.phoneDisplay}  |  ${contact.email}`, x, 122, 11);
  text(`Magazyn: ${company.warehouse.street}, ${company.warehouse.postalCode} ${company.warehouse.city}`, x, 102, 10, false, muted);
  text('eurosortex.com', x, 82, 10, true, green);
  text(`${company.legalName}`, x, 50, 7.5, false, muted);
  text(`NIP ${company.identifiers.nip}  |  KRS ${company.identifiers.krs}`, x, 37, 7.5, false, muted);
  text('1 / 1', right - 20, 37, 8, false, muted);
  return doc.save();
}
