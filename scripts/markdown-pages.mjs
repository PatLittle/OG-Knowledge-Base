import { readFile, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { marked } from 'marked';
import { parse as parseYaml } from 'yaml';

export async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files.sort();
}

export function parsePage(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw Error(`${filename}: start with YAML metadata between --- lines`);
  const metadata = parseYaml(match[1]);
  for (const key of ['title', 'description']) {
    if (typeof metadata?.[key] !== 'string' || !metadata[key].trim()) {
      throw Error(`${filename}: missing ${key}`);
    }
  }
  const path = filename.replaceAll('\\', '/');
  const lang = path.split('/')[0];
  if (!['en', 'fr'].includes(lang) || !path.endsWith('.md')) {
    throw Error(`${filename}: Markdown pages must be under en/ or fr/`);
  }
  const route = '/' + (path.endsWith('/index.md') ? path.slice(0, -8) : path.slice(0, -3) + '/');
  if (metadata.translation !== undefined &&
      (typeof metadata.translation !== 'string' ||
       !metadata.translation.startsWith(lang === 'en' ? '/fr/' : '/en/') ||
       !metadata.translation.endsWith('/') || /[?#]|\.\./.test(metadata.translation))) {
    throw Error(`${filename}: translation must be the other language's /path/`);
  }
  const ids = new Map();
  const renderer = new marked.Renderer();
  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const slug = text.replace(/<[^>]*>/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    const count = ids.get(slug) || 0;
    ids.set(slug, count + 1);
    return `<h${depth} id="${slug}${count ? '-' + count : ''}">${text}</h${depth}>\n`;
  };
  let body = marked.parse(match[2], { renderer });
  if (!/<h1[\s>]|<gcds-heading[^>]*tag="h1"/.test(body)) {
    const title = metadata.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    body = `<h1>${title}</h1>\n` + body;
  }
  return { ...metadata, lang, route, body };
}

export async function buildMarkdownPages({ base, page }) {
  const root = 'content/pages';
  for (const filename of await walk(root)) {
    if (!filename.endsWith('.md')) continue;
    const document = parsePage(await readFile(filename, 'utf8'), relative(root, filename).split(sep).join('/'));
    await page(document.lang, base + document.route, document.title, document.description,
      document.body, document.translation ? base + document.translation : undefined, document.kind || 'page');
  }
}
