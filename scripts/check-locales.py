from pathlib import Path
from html.parser import HTMLParser
from collections import Counter

# Legal translations additionally identify the authoritative Polish version.
# Compare layout and navigation independently of translated text length.
class Page(HTMLParser):
 def __init__(self):super().__init__();self.main=False;self.tags=[];self.langs={};self.form_locales=[]
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='main':self.main=True
  if t=='input' and a.get('name')=='locale':self.form_locales.append(a.get('value'))
  if self.main and t not in ('script','style') and a.get('class') != 'translation-notice': self.tags.append((t, ' '.join(c for c in a.get('class','').split() if c != 'is-current')))
  if t=='a' and a.get('data-analytics-language-to'):self.langs[a['data-analytics-language-to']]=a['href']
 def handle_endtag(self,t):
  if t=='main':self.main=False
root = Path(__file__).resolve().parents[1] / 'dist'
assert (root / 'index.html').is_file(), 'Build the site before checking translations'
pages={}
for f in root.rglob('index.html'):
 p=Page();p.feed(f.read_text());pages['/'+str(f.relative_to(root)).removesuffix('index.html')]=p
count=0
for path,p in pages.items():
 if path.startswith(('/ru/','/uk/')):continue
 for lang in ['ru','uk']:
  target=p.langs.get(lang);assert target in pages,(path,lang,target)
  if path!='/':assert target not in ('/ru/','/uk/'),(path,'switch resets to home')
  q=pages[target]
  assert all(value == lang for value in q.form_locales), (target, 'Incorrect form language')
  assert q.langs.get('pl') == path, (target, 'Incorrect return link to Polish page')
  assert p.tags == q.tags, (path, lang, 'Different page structure', Counter(p.tags)-Counter(q.tags), Counter(q.tags)-Counter(p.tags))
  count+=1
print(f'PASS: {count} translated counterparts have matching main-page structure and language links.')
