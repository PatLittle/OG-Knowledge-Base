"""Validate the published navigation, language pairs and local source downloads."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json

BASE = '/OG-Knowledge-Base'
ORIGIN = 'https://patlittle.github.io'
ROOT = Path('dist')

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.links = []
        self.alternates = {}
        self.canonical = None
        self.lang = None
        self.toggle = None
        self.h1 = 0
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, f'Duplicate id: {a["id"]}'
            self.ids.add(a['id'])
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'h1' or (tag == 'gcds-heading' and a.get('tag') == 'h1'): self.h1 += 1
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a['href']
        if tag == 'link' and a.get('rel') == 'alternate': self.alternates[a['hreflang']] = a['href']
        if tag == 'gcds-header': self.toggle = a['lang-href']
        for attr in ('href', 'lang-href', 'skip-to-href', 'src'):
            if attr in a: self.links.append(a[attr])
        if tag == 'gcds-footer': self.links.extend(json.loads(a['sub-links']).values())

def local(url, current):
    u = urlsplit(url)
    if u.scheme and u.scheme not in ('http', 'https'): return None, None
    if u.netloc and u.netloc != 'patlittle.github.io': return None, None
    if not u.path: return current, unquote(u.fragment)
    assert u.path.startswith(BASE + '/'), f'Link outside project path: {url}'
    path = ROOT / unquote(u.path[len(BASE)+1:])
    if u.path.endswith('/'): path = path / 'index.html'
    return path, unquote(u.fragment)

files = sorted(ROOT.rglob('*.html'))
pages = {p: Page(p.read_text()) for p in files}
assert len(files) == 22, f'Expected 22 pages including 404; got {len(files)}'
for file, page in pages.items():
    assert page.lang in ('en','fr'), file
    assert '{{' not in file.read_text(), f'Unexpanded template: {file}'
    assert 'gcds-breadcrumbs' not in file.read_text(), f'Redundant breadcrumbs: {file}'
    assert 'gist.github.com' not in file.read_text().lower() and 'github gist' not in file.read_text().lower(), f'External collection reference: {file}'
    for url in page.links:
        target, fragment = local(url, file)
        if target is None: continue
        assert target.is_file(), f'{file}: missing {url}'
        if fragment: assert fragment in pages[target].ids, f'{file}: missing anchor {url}'
    relative = file.relative_to(ROOT).as_posix()
    if relative.startswith(('en/', 'fr/')):
        assert page.h1 == 1, f'{file}: expected one h1'
        expected = ORIGIN + BASE + '/' + relative.removesuffix('index.html')
        assert page.canonical == expected, f'{file}: canonical mismatch'
        assert set(page.alternates) == {'en','fr'}, file
        opposite = 'fr' if page.lang == 'en' else 'en'
        assert page.alternates[page.lang] == expected, file
        assert ORIGIN + page.toggle == page.alternates[opposite], file
        target,_ = local(page.toggle,file)
        assert pages[target].toggle == expected.removeprefix(ORIGIN), f'{file}: nonreciprocal toggle'
        assert pages[target].lang == opposite, file
        assert pages[target].alternates[page.lang] == expected, file
for source in Path('content/ogl').rglob('*.md'):
    target = ROOT / 'sources/ogl' / source.relative_to('content/ogl')
    assert source.read_bytes() == target.read_bytes(), f'Changed licence source: {source}'
# Verify the final legal clauses survived rendering for both archival versions.
for lang, section in [('en','open-government-licence'),('fr','licence-du-gouvernement-ouvert')]:
    for version, ending in [('1.0','8.6'),('1.1','7.3'),('2.0','Versioning' if lang=='en' else 'Version')]:
        text=(ROOT/lang/section/f'v{version}'/'index.html').read_text()
        assert ending in text, f'Truncated licence: {lang} {version}'
        assert text.index('download-source') > text.index('</figure>'), f'Download above archive: {lang} {version}'
        assert 'Back to all versions' not in text and 'Retour à toutes les versions' not in text
        assert 'assets/ogl/' in text, f'Missing stored screenshot: {lang} {version}'
print(f'Validated {len(files)} HTML pages: project paths, anchors, language pairs, canonicals and six licence downloads and repository-hosted screenshots.')
