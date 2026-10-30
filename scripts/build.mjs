import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { marked } from 'marked';
import { integrateFeatureAtlas } from './integrate-feature-atlas.mjs';
import { integrateFrenchAtlas } from './integrate-feature-atlas-fr.mjs';
import { buildMarkdownPages, walk } from './markdown-pages.mjs';
import {buildSchemaPages,referenceBase} from './schema-pages.mjs';

const base = '/OG-Knowledge-Base';
const origin = 'https://patlittle.github.io';
const data = JSON.parse(await readFile('content/ogl/versions.json', 'utf8'));
const template = await readFile('site/templates/page.html', 'utf8');
const out = 'dist';
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const labels = JSON.parse(await readFile('content/ogl/labels.json', 'utf8'));
const section = lang => `${base}/${lang}/${lang==='en'?'open-government-licence':'licence-du-gouvernement-ouvert'}/`;
const home = lang => `${base}/${lang}/`;
const link = (href, text) => `<gcds-link href="${esc(href)}">${esc(text)}</gcds-link>`;
const heading = (text,tag='h2') => `<gcds-heading tag="${tag}">${esc(text)}</gcds-heading>`;
const urls=[];
await rm(out, {recursive:true,force:true}); await mkdir(out,{recursive:true});
await cp('site/assets',`${out}/assets`,{recursive:true});
await cp('content/ogl',`${out}/sources/ogl`,{recursive:true,filter: source => !source.endsWith('labels.json')});
async function page(lang, path, title, description, body, counterpart, kind='section') {
  if ([`${base}/en/tools/`, `${base}/en/tools/feature-atlas/`, `${base}/fr/outils/`, `${base}/fr/outils/atlas-des-fonctionnalites/`].includes(path) || urls.includes(path)) throw Error('Duplicate page route: '+path);
  const t=labels[lang];
  const values={portalUrl:lang==='en'?'https://open.canada.ca/en':'https://ouvert.canada.ca/fr',portalLabel:lang==='en'?'Open.Canada.ca':'Ouvert.Canada.ca',statusLabel:lang==='en'?'System Status':'État du système',lang,title:esc(title),siteTitle:esc(t.siteTitle),description:esc(description),canonical:origin+path,english:origin+(lang==='en'?path:counterpart),french:origin+(lang==='fr'?path:counterpart),base,opposite:counterpart,home:home(lang),navLabel:t.nav,homeLabel:t.home,referenceLabel:lang==='en'?'Reference':'Références',sectionUrl:referenceBase(base,lang),homeCurrent:kind==='home'?'current':'',sectionCurrent:!['home','page'].includes(kind)?'current':'',body,footerLinks:esc(JSON.stringify({[t.repo]:'https://github.com/PatLittle/OG-Knowledge-Base',[t.home]:home(lang)}))};
  let html=template.replace(/\{\{(\w+)\}\}/g,(_,k)=>values[k]);
  if (!counterpart) html=html.replace(/  <link rel="alternate"[^>]*>\n/g, '').replace(' lang-href="undefined"', '');
  const file=`${out}${path.slice(base.length)}index.html`;await mkdir(file.slice(0,file.lastIndexOf('/')),{recursive:true});await writeFile(file,html);urls.push(path);
}
for (const lang of ['en','fr']) {
 const t=labels[lang],other=lang==='en'?'fr':'en';

 const cards=data.versions.filter(x=>!x.current).map(v=>`<gcds-card card-title="${esc(t['v'+v.version.replace('.','')])}" card-title-tag="h3" href="${section(lang)}v${v.version}/" badge="${t.version} ${v.version}"><p>${esc(t['period'+v.version.replace('.','')])}</p><p>${t.sourceDate} : <time datetime="${v.sources[lang].date}">${v.sources[lang].date}</time></p></gcds-card>`).join('');
 await page(lang,section(lang),t.title,t.intro,`<p class="eyebrow">${t.reference}</p>${heading(t.title,'h1')}<p class="lead">${t.intro}</p><section class="current-panel"><span class="status">${t.current}</span><h2>${t.v20} · ${t.version} 2.0</h2><p>${t.sourceDate} : <time datetime="2022-12-02">2022-12-02</time></p><div class="actions">${link(section(lang)+'v2.0/',t.read)} ${link(official(lang),t.official)}</div></section>${heading(t.previous)}<gcds-grid columns="1fr" columns-tablet="1fr 1fr" gap="400">${cards}</gcds-grid>${heading(t.source)}<p class="section-intro">${t.notes}</p><p>${t.note2}</p><p>${t.dateNote}</p>`,section(other));
 for(const v of data.versions) {
   const s=v.sources[lang];const md=await readFile(`content/ogl/${lang}/${v.version}.md`,'utf8');
   // Keep the licence text downloadable; separate capture metadata from the legal text.
   let legal=md.replace(/^\s*# [^\n]*\n/,'');
   legal=legal.split(/\n-{3,}\s*\n/)[0].split(/\n## "(?:Page details|Détails de la page)"/)[0].trim();
   const toc=[];const counts=new Map();
   const renderer=new marked.Renderer();
   renderer.heading=function({tokens,depth}) {const text=this.parser.parseInline(tokens);const plain=text.replace(/<[^>]+>/g,'').replace(/&[^;]+;/g,'');let slug=plain.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const n=counts.get(slug)||0;counts.set(slug,n+1);if(n)slug+='-'+n;if(depth===2)toc.push({text,slug});return `<h${depth} id="${slug}">${text}</h${depth}>\n`;};
   const legalHtml=marked.parse(legal,{renderer});
   const sidebar=`<aside class="doc-sidebar"><gcds-side-nav label="${t.section}"><gcds-nav-link href="${section(lang)}">${t.overview}</gcds-nav-link>${data.versions.map(w=>`<gcds-nav-link href="${section(lang)}v${w.version}/" ${w.version===v.version?'current':''}>${t.version} ${w.version}${w.current?' · '+t.current:''}</gcds-nav-link>`).join('')}</gcds-side-nav><nav class="toc" aria-label="${t.toc}"><h2>${t.toc}</h2><ul>${toc.map(x=>`<li><a href="#${x.slug}">${x.text}</a></li>`).join('')}<li><a href="#archived-original">${t.source}</a></li></ul></nav></aside>`;
   const screenshotUrl=base+'/'+s.screenshot;
   const sources=`<section class="source-notes" id="archived-original">${heading(t.source)}<p>${t.notes}</p><p>${s.archive?link(s.archive,t.archive):link(official(lang),t.official)}</p><figure class="archived-original"><a href="${screenshotUrl}" aria-label="${esc(t.screenshot)}"><img src="${screenshotUrl}" width="${s.width}" height="${s.height}" alt="${esc(t['v'+v.version.replace('.','')]+' – '+t.version+' '+v.version+' ('+lang+')')}" loading="lazy"></a><figcaption>${t.sourceDate} : <time datetime="${s.date}">${s.date}</time></figcaption></figure></section><div class="actions download-source">${link(base+`/sources/ogl/${lang}/${v.version}.md`,t.download)}</div>`;
   const body=`<p class="eyebrow">${t.reference} · ${t.version} ${v.version}</p>${heading(t['v'+v.version.replace('.','')],'h1')}<div class="metadata"><span class="status">${v.current?t.current:t.status}</span><span>${t.sourceDate} : <time datetime="${s.date}">${s.date}</time></span></div>${!v.current?`<div class="intro-band"><p><strong>${t.historical}.</strong> ${t.historicalText}</p></div>`:''}${v.current?`<div class="actions">${link(official(lang),t.official)}</div>`:''}<div class="doc-layout">${sidebar}<article class="licence-text" aria-label="${esc(t['v'+v.version.replace('.','')])}">${legalHtml}${sources}</article></div>`;
   await page(lang,section(lang)+`v${v.version}/`,t['v'+v.version.replace('.','')]+' · '+t.version+' '+v.version,t.intro,body,section(other)+`v${v.version}/`,'version');
 }
}
await buildSchemaPages({base,page,esc,heading,link});
await buildMarkdownPages({base, page});
function official(lang){return lang==='en'?'https://open.canada.ca/en/open-government-licence-canada':'https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada';}
await writeFile(`${out}/index.html`, (await readFile('site/templates/language-choice.html', 'utf8')).trimEnd().replaceAll('{{origin}}', origin).replaceAll('{{base}}', base));
await writeFile(`${out}/404.html`, (await readFile('site/templates/404.html', 'utf8')).trimEnd().replaceAll('{{origin}}', origin).replaceAll('{{base}}', base));
await writeFile(`${out}/.nojekyll`,'');
await writeFile(`${out}/robots.txt`,`User-agent: *\nAllow: /\nSitemap: ${origin}${base}/sitemap.xml\n`);
await writeFile(`${out}/sitemap.xml`,`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[base+'/',...urls].map(u=>`<url><loc>${origin}${u}</loc></url>`).join('')}</urlset>\n`);

// Integrate the two interactive Atlas editions after rendering the shared pages.
await integrateFeatureAtlas(out);
await integrateFrenchAtlas(out);

// Standalone bilingual HTML is authored once, under content/.
await mkdir(out+'/tools/whattf8',{recursive:true});
await cp('content/tools/whattf8.html',out+'/tools/whattf8/index.html');

console.log(`Built ${(await walk(out)).filter(file => file.endsWith('.html')).length} HTML pages in dist/`);
