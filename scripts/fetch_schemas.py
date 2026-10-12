"""Discover CKAN Scheming schemas and store verified API responses atomically.

No CKAN keys or dependencies required. A failed endpoint leaves the prior snapshot
untouched. Dataset schemas are requested with expanded=true; organization requests
use the supplied endpoint without adding unsupported expansion parameters.
"""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen
import hashlib
import json
import re
import shutil
import tempfile
import time

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / 'content/schemas/config.json').read_text())
TARGET = ROOT / 'content/schemas/snapshots'

def fetch(url):
    for attempt in range(3):
        try:
            req = Request(url, headers={'User-Agent': 'OG-Knowledge-Base-schema-sync/1.0', 'Accept': 'application/json'})
            with urlopen(req, timeout=60) as response:
                data = json.load(response)
            if data.get('success') is not True or 'result' not in data:
                raise ValueError(f'CKAN action failed: {url}')
            return data
        except Exception:
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)

def serialized(data):
    return json.dumps(data, ensure_ascii=False, indent=2) + '\n'

def retrieve(item):
    kind, name = item
    if not isinstance(name, str) or not re.fullmatch(r'[a-zA-Z0-9_-]+', name):
        raise ValueError(f'Unsafe schema type: {name!r}')
    query = {'type': name}
    if kind == 'dataset': query['expanded'] = 'true'
    url = CONFIG['api_base'] + f'scheming_{kind}_schema_show?' + urlencode(query)
    payload = fetch(url)
    schema = payload['result']
    if not isinstance(schema, dict) or schema.get(f'{kind}_type') != name:
        raise ValueError(f'Unexpected schema response: {url}')
    groups = ('dataset_fields', 'resource_fields') if kind == 'dataset' else ('fields',)
    for key in groups:
        if not isinstance(schema.get(key), list):
            raise ValueError(f'Missing field array {key}: {url}')
        if any(not isinstance(f, dict) or not isinstance(f.get('field_name'), str) for f in schema[key]):
            raise ValueError(f'Invalid field definitions: {url}')
    return {'kind': kind, 'type': name, 'url': url, 'path': f'{kind}/{name}.json',
            'expanded': kind == 'dataset', 'payload': payload,
            'field_counts': {key: len(schema[key]) for key in groups}}

def main():
    now = datetime.now(timezone.utc).isoformat(timespec='seconds').replace('+00:00', 'Z')
    discoveries = {}
    for kind in ('dataset', 'organization'):
        url = CONFIG['api_base'] + f'scheming_{kind}_schema_list'
        payload = fetch(url)
        names = payload['result']
        if not isinstance(names, list) or not all(isinstance(x, str) for x in names) or len(names) != len(set(names)):
            raise ValueError(f'Invalid schema discovery list: {url}')
        discoveries[kind] = {'url': url, 'payload': payload}
    available = {(kind, name) for kind, entry in discoveries.items() for name in entry['payload']['result']}
    expected = {(x['kind'], x['type']) for x in CONFIG['documented']}
    if not expected <= available:
        raise ValueError(f'Documented schemas missing from discovery: {expected - available}')
    items = sorted(available)
    records = list(ThreadPoolExecutor(max_workers=4).map(retrieve, items))
    old = json.loads((TARGET / 'manifest.json').read_text()) if (TARGET / 'manifest.json').exists() else {}
    prior = {(x['kind'], x['type']): x for x in old.get('schemas', [])}
    with tempfile.TemporaryDirectory(prefix='ckan-schemas-') as temporary:
        stage = Path(temporary)
        for kind, entry in discoveries.items():
            (stage / f'{kind}-list.json').write_text(serialized(entry['payload']))
        manifest = {'api_base': CONFIG['api_base'], 'checked_at': now, 'schemas': []}
        for record in records:
            body = serialized(record.pop('payload'))
            digest = hashlib.sha256(body.encode()).hexdigest()
            before = prior.get((record['kind'], record['type']), {})
            record['sha256'] = digest
            record['updated_at'] = before.get('updated_at', now) if before.get('sha256') == digest else now
            record['documented'] = (record['kind'], record['type']) in expected
            manifest['schemas'].append(record)
            destination = stage / record['path']
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(body)
        (stage / 'manifest.json').write_text(serialized(manifest))
        # All requests and validations succeeded before replacing any committed data.
        TARGET.parent.mkdir(parents=True, exist_ok=True)
        backup = TARGET.with_name('snapshots-backup')
        if backup.exists(): shutil.rmtree(backup)
        if TARGET.exists(): TARGET.rename(backup)
        try: shutil.copytree(stage, TARGET)
        except Exception:
            if TARGET.exists(): shutil.rmtree(TARGET)
            if backup.exists(): backup.rename(TARGET)
            raise
        if backup.exists(): shutil.rmtree(backup)
    print(f'Discovered and saved {len(records)} schemas ({len(expected)} documented). Checked {now}.')

if __name__ == '__main__':
    main()
