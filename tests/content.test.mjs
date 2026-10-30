import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { relative } from 'node:path';
import { walk, parsePage } from '../scripts/markdown-pages.mjs';

test('new Markdown pages derive routes, headings and optional translations', () => {
  const document = parsePage('---\ntitle: A guide\ndescription: Publishing data\ntranslation: /fr/guides/donnees/\n---\n\nSome text.\n\n## Café\n\n## Café\n', 'en/guides/data.md');
  assert.equal(document.route, '/en/guides/data/');
  assert.equal(document.translation, '/fr/guides/donnees/');
  assert.match(document.body, /<h1>A guide<\/h1>/);
  assert.match(document.body, /id="cafe"/);
  assert.match(document.body, /id="cafe-1"/);
  assert.throws(() => parsePage('No metadata', 'en/test.md'), /metadata/);
  assert.throws(() => parsePage('---\ntitle: X\n---\nBody', 'en/test.md'), /description/);
});

test('every built page has exactly one entry in the content tree', async () => {
  const routes = new Set();
  for (const file of await walk('content/pages')) {
    const name = relative('content/pages', file).replaceAll('\\', '/');
    let output;
    if (name.endsWith('.md')) {
      const document = parsePage(await readFile(file, 'utf8'), name);
      output = document.route.slice(1) + 'index.html';
    } else if (name.endsWith('.source.json')) {
      output = name.replace(/\.source\.json$/, '.html');
      const pointer = JSON.parse(await readFile(file, 'utf8'));
      assert.ok(pointer.sources?.length, `${file}: source paths required`);
      for (const source of pointer.sources) await access(source);
    } else throw Error(`Unexpected file in page tree: ${file}`);
    assert.ok(!routes.has(output), `Duplicate content entry: ${output}`);
    routes.add(output);
    await access('dist/' + output);
  }
  const built = (await walk('dist')).filter(f => f.endsWith('.html')).map(f => relative('dist', f).replaceAll('\\', '/'));
  assert.deepEqual([...routes].sort(), built.sort(), 'Every output page must have a discoverable source');
});
