// Generate the French Feature Atlas from the reviewed English build output.
import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import {join} from 'node:path';
const B='/OG-Knowledge-Base', O='https://patlittle.github.io';
const EN_T=B+'/en/tools/', EN_A=EN_T+'feature-atlas/';
const FR_T=B+'/fr/outils/', FR_A=FR_T+'atlas-des-fonctionnalites/';
const gh='https://github.com/PatLittle/OG-Knowledge-Base';
const htmlEscape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const reEsc=s=>s.replace(/[.*+?^$()|[\]{}\\]/g,'\\$&');
const frHeader=other=>'<gcds-header lang-href="'+other+'" skip-to-href="#main-content"><a class="site-brand" slot="signature" href="'+B+'/fr/"><span class="brand-mark" aria-hidden="true">OG</span><span>Base de connaissances du gouvernement ouvert</span></a><gcds-top-nav slot="menu" label="Navigation principale"><gcds-nav-link slot="home" href="'+B+'/fr/">Accueil</gcds-nav-link><gcds-nav-link href="'+B+'/fr/references/">Références</gcds-nav-link><gcds-nav-link href="'+FR_T+'" current>Outils</gcds-nav-link><gcds-nav-link href="https://ouvert.canada.ca/fr">Ouvert.Canada.ca</gcds-nav-link><gcds-nav-link href="https://open-data.github.io/status-statut/">État du système</gcds-nav-link></gcds-top-nav></gcds-header>';
const frFooter='<gcds-footer display="compact" sub-links=\''+htmlEscape(JSON.stringify({'Dépôt GitHub':gh,'Accueil':B+'/fr/'}))+'\'></gcds-footer>';
async function walk(dir){const all=[];for(const x of await readdir(dir,{withFileTypes:true})){const p=join(dir,x.name);if(x.isDirectory())all.push(...await walk(p));else if(x.isFile()&&x.name.endsWith('.html'))all.push(p)}return all;}
async function translate(english){
 const files=['main','extensions','tour','ui'];
 const dictionaries=await Promise.all(files.map(name=>readFile('content/tools/fr/'+name+'.json','utf8').then(JSON.parse)));
 const entries=Object.entries(Object.assign({},...dictionaries)).sort((a,b)=>b[0].length-a[0].length);
 let result=english,applied=0;
 for(const [en,fr] of entries){
   if(en===fr)continue;
   const before=result;
   result=result.split("'"+en+"'").join("'"+fr.replaceAll('\\','\\\\').replaceAll("'","\\'")+"'");
   result=result.split('"'+en+'"').join('"'+fr.replaceAll('"','\\"')+'"');
   result=result.replace(new RegExp('(>\\s*)'+reEsc(en)+'(?=\\s*<)','g'),(_,prefix)=>prefix+htmlEscape(fr));
   if(result!==before)applied++;
 }
 // Update the tour counter and the dynamic API docs label inside template literals.
 result=result.replace(/Step (\$\{stepIndex\+1\}) of (\$\{tourSteps\.length\})/g,'Étape $1 sur $2');
 result=result.replace(/Docs: (\$\{method\}) ↗/g,'Documentation : $1 ↗');
 if(applied<260)throw Error('Insufficient French translation coverage: '+applied+' entries');
 for(const name of ['diagramRoot','ckanAtlasTour','_table_metadata','datastore_search','resource_view_list'])if(!result.includes(name))throw Error('Missing technical name '+name);
 console.log('French Atlas translated text entries: '+applied);
 return result;
}
function addFrenchMeta(html,frPath){
 html=html.replace('<link rel="alternate" hreflang="en"', '<link rel="alternate" hreflang="fr" href="'+O+frPath+'"><link rel="alternate" hreflang="en"');
 return html.replace('<gcds-header skip-to-href=', '<gcds-header lang-href="'+frPath+'" skip-to-href=');
}
function frHead(page,title,enPath,frPath,description){
 page=page.replace('<html lang="en">','<html lang="fr">');
 page=page.replace('<title>'+ (enPath===EN_T?'Tools':'Feature Atlas')+' | Open Government Knowledge Base</title>','<title>'+title+' | Base de connaissances du gouvernement ouvert</title>');
 page=page.replace('<link rel="canonical" href="'+O+enPath+'">','<link rel="canonical" href="'+O+frPath+'">');
 page=page.replace(/<meta name="description" content="[^"]*">/,'<meta name="description" content="'+htmlEscape(description)+'">');
 return page.replace(/<gcds-header[\s\S]*?<\/gcds-header>/,frHeader(enPath));
}
export async function integrateFrenchAtlas(out='dist'){
 const enIndexPath=join(out,'en','tools','index.html'), enAtlasPath=join(out,'en','tools','feature-atlas','index.html');
 let enIndex=await readFile(enIndexPath,'utf8'), enAtlas=await readFile(enAtlasPath,'utf8');
 enIndex=addFrenchMeta(enIndex,FR_T);enAtlas=addFrenchMeta(enAtlas,FR_A);
 enIndex=enIndex.replace('badge="English preview"','badge="Interactive"').replace('The English edition is available for review. The French edition will follow after feedback.','Available in English and French.');
 enAtlas=enAtlas.replace('English edition for review · French edition to follow.','English edition · French version also available.');
 await writeFile(enIndexPath,enIndex);await writeFile(enAtlasPath,enAtlas);
 let atlas=frHead(await translate(enAtlas),'Atlas des fonctionnalités',EN_A,FR_A,'Atlas interactif des fonctionnalités CKAN et DataStore du portail Open.Canada.ca/data.');
 atlas=atlas.replace('<nav class="kb-crumb" aria-label="Breadcrumb"><a href="'+EN_T+'">Tools</a> / Feature Atlas</nav>','<nav class="kb-crumb" aria-label="Fil d’Ariane"><a href="'+FR_T+'">Outils</a> / Atlas des fonctionnalités</nav>');
 atlas=atlas.replace('Feature Atlas ·','Atlas des fonctionnalités ·');
 atlas=atlas.replace('<p class="kb-english">English edition · French version also available.</p>','<p class="kb-english">Atlas des fonctionnalités · Version française</p>');
 atlas=atlas.replace(/<gcds-footer[\s\S]*?<\/gcds-footer>/,frFooter);
 if(!atlas.includes('Étape')||!atlas.includes('visite guidée'))throw Error('French tour translation absent');
 let index=frHead(enIndex,'Outils',EN_T,FR_T,'Outils interactifs pour découvrir et utiliser Open.Canada.ca.');
 index=index.replace('<p class="eyebrow">Tools</p>','<p class="eyebrow">Outils</p>');
 index=index.replace('<gcds-heading tag="h1">Tools</gcds-heading>','<gcds-heading tag="h1">Outils</gcds-heading>');
 index=index.replace('Interactive tools for understanding and using Open.Canada.ca.','Outils interactifs pour comprendre et utiliser les données d’Open.Canada.ca.');
 index=index.replace('card-title="Feature Atlas"','card-title="Atlas des fonctionnalités"').replace('href="'+EN_A+'"','href="'+FR_A+'"').replace('badge="Interactive"','badge="Interactif"');
 index=index.replace('Interactive guide to CKAN metadata, DataStore, public API routes and extensions, with a guided tour.','Guide interactif des métadonnées CKAN, de DataStore, des routes d’API publiques et des extensions, avec visite guidée.');
 index=index.replace('Available in English and French.','Consultez l’atlas interactif en français ou en anglais.');
 index=index.replace("<gcds-card card-title=\"Canadian Open Data API Lab\" card-title-tag=\"h2\" href=\"https://open-data.github.io/open-data-api-lab\"><p>A collection of practical examples and interactive demonstrations for working with Canada’s Open Data APIs.</p></gcds-card>","<gcds-card card-title=\"Laboratoire des API de données ouvertes du Canada\" card-title-tag=\"h2\" href=\"https://open-data.github.io/open-data-api-lab\"><p>Une collection d’exemples pratiques et de démonstrations interactives pour utiliser les API de données ouvertes du Canada.</p></gcds-card>");
 index=index.replace('card-title="WhatTF8 — Character encoding"','card-title="WhatTF8 — Encodage des caractères"').replace('href="'+B+'/tools/whattf8/?lang=en"','href="'+B+'/tools/whattf8/?lang=fr"').replace('Inspect file or URL encodings, diagnose character issues, and download a UTF-8 copy.','Analyser l’encodage des fichiers ou des URL, vérifier les caractères et télécharger une copie UTF-8.'); 
 index=index.replace(/<gcds-footer[\s\S]*?<\/gcds-footer>/,frFooter);
 await mkdir(join(out,'fr','outils','atlas-des-fonctionnalites'),{recursive:true});
 await writeFile(join(out,'fr','outils','index.html'),index);
 await writeFile(join(out,'fr','outils','atlas-des-fonctionnalites','index.html'),atlas);
 for(const file of await walk(join(out,'fr'))){
  if(file.endsWith('/outils/index.html')||file.endsWith('/outils/atlas-des-fonctionnalites/index.html'))continue;
  let html=await readFile(file,'utf8');
  if(!html.includes('href="'+FR_T+'"'))html=html.replace('</gcds-top-nav>','<gcds-nav-link href="'+FR_T+'">Outils</gcds-nav-link></gcds-top-nav>');
  if(file===join(out,'fr','index.html'))html=html.replace('</gcds-grid>','<gcds-card card-title="Atlas des fonctionnalités" card-title-tag="h3" href="'+FR_A+'" badge="Outils"><p>Explorez les bases de données CKAN, les API publiques, les vues des ressources et la visite guidée.</p></gcds-card></gcds-grid>');
  await writeFile(file,html);
 }
 const sitemap=join(out,'sitemap.xml'),xml=await readFile(sitemap,'utf8');
 await writeFile(sitemap,xml.replace('</urlset>','<url><loc>'+O+FR_T+'</loc></url><url><loc>'+O+FR_A+'</loc></url></urlset>'));
}
