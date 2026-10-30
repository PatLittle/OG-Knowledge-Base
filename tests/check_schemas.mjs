import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {localize,fieldGroups,filterFields,diagramNodes} from '../site/assets/schema-viewer.js';
const manifest=JSON.parse(await readFile('content/schemas/snapshots/manifest.json','utf8'));
const config=JSON.parse(await readFile('content/schemas/config.json','utf8'));
for(const kind of ['dataset','organization']){
 const discovery=JSON.parse(await readFile(`content/schemas/snapshots/${kind}-list.json`,'utf8'));
 assert.equal(discovery.success,true);
 assert.deepEqual([...discovery.result].sort(),manifest.schemas.filter(s=>s.kind===kind).map(s=>s.type).sort());
}
for(const item of config.documented){
 const record=manifest.schemas.find(s=>s.kind===item.kind&&s.type===item.type);
 assert.ok(record);
 const response=JSON.parse(await readFile('content/schemas/snapshots/'+record.path,'utf8'));
 assert.equal(response.success,true);
 assert.equal(response.result[`${item.kind}_type`],item.type);
 for(const group of fieldGroups(response.result)){
  assert.equal(group.fields.length,record.field_counts[group.key]);
  assert.ok(filterFields(group.fields,'',true).every(f=>f.required===true));
  for(const f of group.fields)assert.ok(filterFields(group.fields,f.field_name).includes(f));
  const all=[];
  for(let i=0;i<group.fields.length;i+=8)all.push(...diagramNodes(group.fields,i).visible);
  assert.deepEqual(all,group.fields,'Diagram pagination must expose every field exactly once');
 }
 const snapshot=await readFile('dist/data/schemas/'+record.path,'utf8');
 assert.deepEqual(JSON.parse(snapshot),response,'Published response must preserve all API values');
}
assert.equal(localize({en:'Title',fr:'Titre'},'fr'),'Titre');
assert.equal(localize('URL','fr'),'URL');
assert.equal(localize(null,'en','id'),'id');
const sample=[{field_name:'référence',required:true},{field_name:'title',validators:'not_empty'},{field_name:'name',required:false}];
assert.deepEqual(filterFields(sample,'reference'),[sample[0]]);
assert.deepEqual(filterFields(sample,'',true),[sample[0]],'Do not infer required:true from validator names');
assert.deepEqual(filterFields(sample,'impossible'),[]);
console.log('Validated CKAN discovery, snapshots, bilingual labels, filters and complete diagram pagination.');
