import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script } from 'node:vm';

const html = await readFile('content/tools/whattf8.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new Script(script, { filename: 'whattf8-inline.js' });
const utilities = script.slice(script.indexOf('// Encoding utilities'), script.indexOf('// Page state'));
const api = new Script(utilities + '\n({bom,choose,binary,inspectBinary,exportBytes,proxyRequestUrl})').runInNewContext({ TextDecoder, TextEncoder, URL, Uint8Array });
const bytes = text => new TextEncoder().encode(text);

test('BOM detection reports exact hex and distinguishes UTF-32 from UTF-16', () => {
  for (const [values, encoding, hex] of [
    [[0xEF,0xBB,0xBF], 'UTF-8', 'EF BB BF'],
    [[0xFF,0xFE,0x41,0], 'UTF-16LE', 'FF FE'],
    [[0xFE,0xFF,0,0x41], 'UTF-16BE', 'FE FF'],
    [[0xFF,0xFE,0,0], 'UTF-32LE', 'FF FE 00 00'],
    [[0,0,0xFE,0xFF], 'UTF-32BE', '00 00 FE FF']
  ]) {
    const mark = api.bom(new Uint8Array(values));
    assert.equal(mark.encoding, encoding);
    assert.equal(mark.hex, hex);
  }
  assert.equal(api.bom(bytes('plain text')), null);
  assert.equal(api.choose(new Uint8Array([72,0,101,0,108,0,108,0,111,0])), 'utf-16le');
});

test('UTF-8 and UTF-8-SIG exports preserve characters and emit the selected BOM', () => {
  const text = 'Français — 日本語\r\n';
  const plain = api.exportBytes(text, false);
  const signed = api.exportBytes(text, true);
  assert.equal(api.bom(plain), null);
  assert.deepEqual(Array.from(signed.subarray(0,3)), [0xEF,0xBB,0xBF]);
  assert.deepEqual(Array.from(signed.subarray(3)), Array.from(plain));
  assert.equal(new TextDecoder().decode(signed), text);
  const originallySigned = new Uint8Array([0xEF,0xBB,0xBF,...bytes(text)]);
  assert.equal(api.bom(api.exportBytes(new TextDecoder().decode(originallySigned), false)), null);
});

test('binary encoding inspection reports evidence without treating containers as plain text', () => {
  const pdf = bytes('%PDF-1.7\n1 0 obj << /Title <FEFF00480069> >> endobj');
  assert.equal(api.binary(pdf, 'download', 'application/octet-stream'), true);
  assert.equal(api.inspectBinary(pdf).encoding, 'UTF-16BE');
  assert.equal(api.inspectBinary(pdf).scope, 'embedded');
  assert.equal(api.inspectBinary(bytes('%PDF-1.7\nstream\ncompressed bytes')), null);
  assert.equal(api.inspectBinary(bytes('{\\rtf1\\ansi\\ansicpg1252 Text}')).encoding, 'Windows-1252');
  assert.equal(api.binary(bytes('name,value\nCafé,2'), 'data.csv', 'application/octet-stream'), false);
  assert.equal(api.binary(bytes('<svg><text>Café</text></svg>'), 'data.svg', 'image/svg+xml'), false);
  assert.equal(api.binary(new Uint8Array([80,75,3,4,0,0]), 'file.docx', ''), true);
  assert.equal(api.inspectBinary(new Uint8Array([80,75,3,4,0,0])), null);
});

test('proxy is optional and supports encoded prefixes, placeholders and raw URL proxies', () => {
  const source = 'https://example.org/data.csv?x=1&lang=fr';
  assert.equal(api.proxyRequestUrl(source, null), source);
  assert.equal(api.proxyRequestUrl(source, 'https://proxy.example/?url='), 'https://proxy.example/?url=' + encodeURIComponent(source));
  assert.equal(api.proxyRequestUrl(source, 'https://proxy.example/?url={url}&key=test'), 'https://proxy.example/?url=' + encodeURIComponent(source) + '&key=test');
  assert.equal(api.proxyRequestUrl(source, 'https://proxy.example/{rawUrl}'), 'https://proxy.example/' + source);
  assert.throws(() => api.proxyRequestUrl(source, ''), /proxy/);
  assert.throws(() => api.proxyRequestUrl(source, 'javascript:{url}'));
  assert.throws(() => api.proxyRequestUrl('file:///tmp/a', null), /source/);
});

test('error summary receives GCDS link-to-message objects and clears stale errors', () => {
  const elements = {
    errors: { hidden:true, focus() { this.focused = true; } },
    errorSummary: { setAttribute(name, value) { this[name] = value; } },
    status: { hidden:false }
  };
  const functions = script.slice(script.indexOf('function error('), script.indexOf('function status('));
  const summary = new Script(functions + '\n({error,clearError})').runInNewContext({ $: id => elements[id] });
  summary.error('Enter a valid URL.', 'url');
  assert.deepEqual(JSON.parse(elements.errorSummary['error-links']), { '#url':'Enter a valid URL.' });
  assert.equal(elements.errors.hidden, false);
  assert.equal(elements.errors.focused, true);
  assert.equal(elements.status.hidden, true);
  summary.clearError();
  assert.deepEqual(JSON.parse(elements.errorSummary['error-links']), {});
  assert.equal(elements.errors.hidden, true);
  assert.doesNotMatch(html, /id="errorText"/);
});

test('English and French include every interface label', () => {
  const dictionaries = new Script(script.slice(script.indexOf('const dictionary='), script.indexOf('// Encoding utilities')) + '\ndictionary').runInNewContext();
  assert.deepEqual(Object.keys(dictionaries.en).sort(), Object.keys(dictionaries.fr).sort());
  for (const [, key] of html.matchAll(/data-i="([^"]+)"/g)) {
    assert.equal(typeof dictionaries.en[key], 'string', key);
    assert.equal(typeof dictionaries.fr[key], 'string', key);
  }
});
