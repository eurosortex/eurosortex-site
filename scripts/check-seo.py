#!/usr/bin/env python3
"""Audit built public HTML: indexing, schema, navigation and responsive images."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
from collections import Counter, deque
import json, re, xml.etree.ElementTree as ET
from urllib.robotparser import RobotFileParser
root = Path(__file__).resolve().parents[1] / 'dist'
assert (root / 'index.html').is_file(), 'Run the production build before this audit'

class Page(HTMLParser):

    def __init__(self):
        super().__init__()
        self.tags = []
        self.ids = set()
        self.duplicate_ids = set()
        self.visible_text = []
        self.skipped_depth = 0
        self.title = ''
        self.h1 = 0
        self.capture = None
        self.json = []
        self.buf = ''

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self.tags.append((tag, a))
        if tag in ('script', 'style'):
            self.skipped_depth += 1
        if 'id' in a:
            if a['id'] in self.ids:
                self.duplicate_ids.add(a['id'])
            self.ids.add(a['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.capture = 'title'
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.capture = 'json'
            self.buf = ''

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skipped_depth -= 1
        if tag == 'title':
            self.capture = None
        if tag == 'script' and self.capture == 'json':
            self.json.append(json.loads(self.buf))
            self.capture = None

    def handle_data(self, data):
        if self.skipped_depth == 0:
            self.visible_text.append(data)
        if self.capture == 'title':
            self.title += data
        if self.capture == 'json':
            self.buf += data
pages = {}
for f in root.rglob('*.html'):
    path = '/' + f.relative_to(root).as_posix().removesuffix('index.html')
    p = Page()
    html = f.read_text()
    p.feed(html)
    pages[path] = p
    assert not re.match('^/en(/|$)', path), path
    locale = 'ru' if path.startswith('/ru/') else 'uk' if path.startswith('/uk/') else 'pl'
    robots = [a['content'] for t, a in p.tags if t == 'meta' and a.get('name') == 'robots']
    expected = 'noindex, follow' if locale != 'pl' or path in ('/404.html', '/opinie/') else 'index, follow, max-image-preview:large'
    assert robots == [expected], (path, robots)
    assert any((t == 'html' and a.get('lang') == locale for t, a in p.tags)), (path, 'lang')
    assert p.h1 == 1, (path, 'h1')
    assert not p.duplicate_ids, (path, 'duplicate IDs', p.duplicate_ids)
    assert not re.search('Unii Europejskiej|European Union|całej UE|Cała Unia Europejska|по всей территории ЕС|по всій території ЄС', html), path
    for attr, val in [('name', 'description'), ('property', 'og:locale')]:
        vals = [a['content'] for t, a in p.tags if t == 'meta' and a.get(attr) == val]
        assert len(vals) == 1 and vals[0], (path, val)
        if val == 'og:locale':
            assert vals[0] == locale + '_PL'
    canonical = [a['href'] for t, a in p.tags if t == 'link' and a.get('rel') == 'canonical']
    assert canonical == ['https://eurosortex.com' + ('/404/' if path == '/404.html' else path)], (path, canonical)
    if path == '/404.html':
        assert any((a.get('name') == 'robots' and 'noindex' in a.get('content', '') for t, a in p.tags))
for path, p in pages.items():
    for tag, a in p.tags:
        if tag != 'a' or not a.get('href'):
            continue
        u = urlparse(a['href'])
        if u.scheme and u.scheme not in ('http', 'https'):
            continue
        if u.netloc and u.netloc != 'eurosortex.com':
            continue
        target = u.path or path
        assert target in pages or (root / target.lstrip('/')).is_file(), (path, 'broken link', target)
        if u.fragment and target in pages:
            assert unquote(u.fragment) in pages[target].ids, (path, 'broken anchor', a['href'])
locs = {e.text for e in ET.parse(root / 'sitemap-0.xml').iter() if e.tag.endswith('}loc')}
assert locs == {'https://eurosortex.com' + p for p in pages if p not in ('/404.html', '/opinie/') and (not p.startswith(('/ru/', '/uk/')))}, locs
robots_file = RobotFileParser()
robots_file.parse((root / 'robots.txt').read_text().splitlines())
assert robots_file.site_maps() == ['https://eurosortex.com/sitemap-index.xml']
for path in pages:
    assert robots_file.can_fetch('Googlebot', 'https://eurosortex.com' + path), (path, 'robots prevents reading noindex/canonical')
for path, page in pages.items():
    for tag, attrs in page.tags:
        if tag == 'img':
            assert robots_file.can_fetch('Googlebot-Image', 'https://eurosortex.com' + attrs['src'])
        if tag == 'meta' and attrs.get('property') == 'og:image':
            image = urlparse(attrs['content'])
            assert image.netloc == 'eurosortex.com'
            assert (root / image.path.lstrip('/')).is_file(), (path, 'missing social image')
assert max(Counter((p.title for p in pages.values())).values()) == 1
rules = [line.split() for line in (root / '_redirects').read_text().splitlines() if line and (not line.startswith('#'))]
assert len({r[0] for r in rules}) == len(rules)
for source, target, status in rules:
    assert target in pages and status == '301' and (source not in pages), (source, target, status)
    assert not any((r[0] == target for r in rules)), 'redirect chain'

def nodes(value):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from nodes(child)
    elif isinstance(value, list):
        for child in value:
            yield from nodes(child)
for path, page in pages.items():
    schema = list(nodes(page.json))
    visible = ' '.join(' '.join(page.visible_text).split())
    for item in schema:
        if item.get('@type') in ('Question', 'Answer'):
            value = item.get('name') if item['@type'] == 'Question' else item.get('text')
            assert ' '.join(value.split()) in visible, (path, 'schema content absent from page', value)
    if path != '/404.html':
        organizations = [n for n in schema if n.get('@type') == 'Organization' and 'legalName' in n]
        assert len(organizations) == 1, (path, 'one complete organization per page')
        assert organizations[0]['address']['addressCountry'] == 'PL'
    if path == '/':
        websites = [n for n in schema if n.get('@type') == 'WebSite']
        assert len(websites) == 1 and websites[0]['name'] == 'EuroSortex Group'
        assert websites[0]['url'] == 'https://eurosortex.com/'
    crumbs = [n for n in schema if n.get('@type') == 'BreadcrumbList']
    assert len(crumbs) <= 1, (path, 'duplicate breadcrumb schemas')
    for crumb in crumbs:
        items = crumb['itemListElement']
        assert [i['position'] for i in items] == list(range(1, len(items) + 1))
        assert items[0]['item'] in ['https://eurosortex.com/', 'https://eurosortex.com/ru/', 'https://eurosortex.com/uk/']
    for product in [n for n in schema if n.get('@type') == 'Product']:
        assert product['image'] and product['name'] and product['sku']
        assert product['itemCondition'] == 'https://schema.org/UsedCondition'
        offer = product['offers']
        price = offer['priceSpecification']
        assert offer['priceCurrency'] == 'PLN' and float(offer['price']) > 0
        assert price['unitCode'] == 'KGM' and price['valueAddedTaxIncluded'] is False
        assert offer['seller']['@id'] == 'https://eurosortex.com/#organization'
        assert 'brand' not in product, 'Wholesaler must not be presented as clothing manufacturer'
    for tag, attrs in page.tags:
        if tag != 'img':
            continue
        # Empty alt is correct for decorative photos (for example a hero background).
        assert 'alt' in attrs, (path, 'missing image alt attribute')
        assert int(attrs['width']) > 0 and int(attrs['height']) > 0, (path, 'missing intrinsic image dimensions')
        assert attrs.get('srcset') and attrs.get('sizes'), (path, 'image is not responsive')
        if attrs.get('fetchpriority') == 'high':
            assert attrs.get('loading') != 'lazy', path
        sources = [attrs['src']] + [item.strip().split()[0] for item in attrs['srcset'].split(',')]
        for src in sources:
            assert (root / unquote(urlparse(src).path).lstrip('/')).is_file(), (path, 'missing image', src)
# All indexable pages must be reachable through real HTML links from the homepage.
visited = {'/'}
queue = deque(['/'])
while queue:
    current = queue.popleft()
    for tag, attrs in pages[current].tags:
        if tag != 'a':
            continue
        url = urlparse(attrs.get('href', ''))
        if url.netloc and url.netloc != 'eurosortex.com':
            continue
        target = url.path or current
        if target in pages and target not in visited:
            visited.add(target)
            queue.append(target)
assert set(pages) - visited <= {'/404.html'}, ('orphan pages', set(pages) - visited)
descriptions = [a['content'] for page in pages.values() for t, a in page.tags if t == 'meta' and a.get('name') == 'description']
assert len(descriptions) == len(set(descriptions)), 'Duplicate meta descriptions'
for source in (root.parent / 'src/assets/images').rglob('*'):
    if source.is_file():
        original = root.parent / 'public/images' / source.relative_to(root.parent / 'src/assets/images')
        assert original.read_bytes() == source.read_bytes(), f'Update both original and responsive source: {source.name}'
print(f'PASS: {len(pages)} pages, {len(locs)} sitemap URLs, {len(rules)} redirects; metadata, Polish-only indexing, visitor translations, JSON-LD, internal links, anchors and responsive images verified.')
