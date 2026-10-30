// Parse all inline scripts in the generated English/French atlases without running them.
import {readFile} from 'node:fs/promises';
import {Script} from 'node:vm';

for (const [lang,path] of [
  ['en','dist/en/tools/feature-atlas/index.html'],
  ['fr','dist/fr/outils/atlas-des-fonctionnalites/index.html']
]) {
  const html=await readFile(path,'utf8');
  const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .map(match=>match[1]).filter(body=>body.trim());
  if(scripts.length<3)throw Error(lang+': missing expected interactive scripts');
  scripts.forEach((script,i)=>{
    try {new Script(script,{filename:lang+'-feature-atlas-inline-'+(i+1)+'.js'});}
    catch(error){throw Error(lang+' inline script '+(i+1)+' failed syntax check: '+error.message);}
  });
  if(!html.includes('ckanAtlasTour')||!html.includes('diagramRoot'))throw Error(lang+': tour or diagram missing');
  if(lang==='fr'&&!html.includes('Commencer la visite guidée'))throw Error('French tour launch untranslated');
  console.log('Validated '+lang+' Atlas: '+scripts.length+' inline scripts parse successfully.');
}
