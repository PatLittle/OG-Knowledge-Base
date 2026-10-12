export function localize(value, lang, fallback='') {
  if (value && typeof value === 'object' && !Array.isArray(value)) return value[lang] ?? value.en ?? value.fr ?? fallback;
  return value ?? fallback;
}
export function fieldGroups(schema) {
  return ['dataset_fields', 'resource_fields', 'fields'].filter(key => Array.isArray(schema[key])).map(key => ({key, fields:schema[key]}));
}
export function filterFields(fields, query='', required=false) {
  const normalized=query.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  return fields.filter(field => (!required || field.required===true) && (!normalized || JSON.stringify(field).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(normalized)));
}
export function diagramNodes(fields, start=0, size=8) {
  const visible=fields.slice(start,start+size);
  return {visible,height:Math.max(180,visible.length*86+48),total:fields.length,start};
}

if (typeof document !== 'undefined') {
 const root=document.querySelector('.schema-explorer');
 if(root) initialize(root).catch(() => {
   const message=document.getElementById('schema-message');
   message.textContent=JSON.parse(document.getElementById('schema-ui-labels').textContent).error;
 });
}
async function initialize(root) {
 const t=JSON.parse(document.getElementById('schema-ui-labels').textContent),lang=root.dataset.lang;
 const response=await fetch(root.dataset.schemaUrl);
 if(!response.ok) throw new Error('Snapshot request failed');
 const payload=await response.json();
 if(payload.success!==true || !payload.result) throw new Error('Invalid schema snapshot');
 const schema=payload.result,groups=fieldGroups(schema);
 const $=id=>document.getElementById(id);
 const state={view:'tree',query:'',required:false,group:groups[0].key,page:0,zoom:1};
 const el=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=String(text);return node;};
 const sizeText=value=>Array.isArray(value)?`${value.length} ${t.items}`:`${Object.keys(value).length} ${t.properties}`;
 function jsonNode(key,value,depth=0) {
   const complex=value!==null&&typeof value==='object';
   if(!complex) {const row=el('div','json-leaf');row.append(el('code','json-key',key),el('span',`json-scalar ${typeof value}`,JSON.stringify(value)));return row;}
   const details=el('details','json-branch');const summary=el('summary');summary.append(el('code','json-key',key),el('span','branch-count',sizeText(value)));details.append(summary);
   let loaded=false;
   details.addEventListener('toggle',()=>{if(details.open&&!loaded){loaded=true;const children=el('div','json-children');Object.entries(value).forEach(([k,v])=>children.append(jsonNode(k,v,depth+1)));details.append(children);}});
   return details;
 }
 function fieldNode(field,index) {
   const details=el('details','field-node');const summary=el('summary');
   const main=el('span','field-summary');main.append(el('code','field-name',field.field_name),el('span','field-label',localize(field.label,lang,field.field_name)));
   summary.append(main);
   const badges=el('span','field-badges');
   if(field.required===true)badges.append(el('span','field-required',t.declared));
   if(Array.isArray(field.choices))badges.append(el('span','field-count',`${field.choices.length} ${t.choices}`));
   if(Array.isArray(field.repeating_subfields))badges.append(el('span','field-count',`${field.repeating_subfields.length} ${t.subfields}`));
   summary.append(badges);details.append(summary);let loaded=false;
   details.addEventListener('toggle',()=>{if(details.open&&!loaded){loaded=true;const body=el('div','field-properties');body.append(el('p','field-path',`[${index}].${field.field_name}`));Object.entries(field).forEach(([key,value])=>body.append(jsonNode(key,value)));details.append(body);}});
   return details;
 }
 function filtered(key){return filterFields(schema[key],state.query,state.required);}
 function updateMessage() {
   const matches=groups.reduce((n,g)=>n+filtered(g.key).length,0),all=groups.reduce((n,g)=>n+g.fields.length,0);
   $('schema-message').textContent=state.view==='json'?`${all} ${t.count}`:`${matches} / ${all} ${t.count}`;
 }
 function renderTree() {
   const tree=$('schema-tree');tree.replaceChildren();let total=0;
   groups.forEach(group=>{
     const fields=filtered(group.key);total+=fields.length;
     if(!fields.length)return;
     const branch=el('details','field-group');branch.open=true;
     const title=el('summary');title.append(el('span',null,t[group.key]),el('code',null,group.key),el('span','branch-count',`${fields.length} / ${group.fields.length}`));branch.append(title);
     const list=el('div','field-list');fields.forEach(field=>list.append(fieldNode(field,group.fields.indexOf(field))));branch.append(list);tree.append(branch);
   });
   if(!total)tree.append(el('p','empty-state',t.empty));
   if(!state.query&&!state.required){
     const settings=Object.fromEntries(Object.entries(schema).filter(([key])=>!groups.some(g=>g.key===key)));
     const branch=jsonNode(t.settings,settings);branch.classList.add('schema-settings');tree.append(branch);
   }
 }
 function renderDiagram() {
   const fields=filtered(state.group),diagram=$('schema-diagram');diagram.replaceChildren();
   const maxPage=Math.max(0,Math.ceil(fields.length/8)-1);state.page=Math.min(state.page,maxPage);
   const {visible,height,start}=diagramNodes(fields,state.page*8);
   $('diagram-previous').disabled=state.page===0;$('diagram-next').disabled=state.page===maxPage;
   $('diagram-page').textContent=fields.length?`${t.showing} ${start+1}–${start+visible.length} ${t.of} ${fields.length}`:t.empty;
   if(!visible.length){diagram.append(el('p','empty-state',t.empty));return;}
   const surface=el('div','diagram-surface');surface.style.width='810px';surface.style.height=`${height}px`;surface.style.transform=`scale(${state.zoom})`;surface.style.transformOrigin='top left';
   // Scale the wrapper too, so scrolling reaches the complete zoomed diagram.
   diagram.style.width=`${810*state.zoom}px`;diagram.style.height=`${height*state.zoom}px`;
   const middle=height/2;
   const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox',`0 0 810 ${height}`);svg.setAttribute('aria-hidden','true');svg.classList.add('diagram-connections');
   function path(d){const p=document.createElementNS(svg.namespaceURI,'path');p.setAttribute('d',d);svg.append(p);}
   path(`M 190 ${middle} L 228 ${middle}`);
   visible.forEach((_,i)=>{const y=24+i*86+35;path(`M 408 ${middle} C 435 ${middle},435 ${y},466 ${y}`);});surface.append(svg);
   const node=(x,y,width,className,title,subtitle)=>{const box=el('div',`diagram-node ${className}`);box.style.left=`${x}px`;box.style.top=`${y}px`;box.style.width=`${width}px`;box.append(el('strong',null,title),el('span',null,subtitle));return box;};
   surface.append(node(20,middle-40,170,'schema-root',root.dataset.schemaType,'CKAN Scheming'));
   surface.append(node(228,middle-40,180,'schema-group',t[state.group],`${fields.length} ${t.count}`));
   visible.forEach((field,i)=>{
     const button=el('button','diagram-node schema-field');button.type='button';button.style.left='466px';button.style.top=`${24+i*86}px`;button.style.width='320px';button.title=localize(field.label,lang,field.field_name);button.append(el('code',null,field.field_name),el('span',null,localize(field.label,lang,field.field_name)));
     if(field.required===true)button.append(el('span','node-required',t.declared));
     button.addEventListener('click',()=>{
       surface.querySelectorAll('.schema-field').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');
       const inspector=$('field-inspector');const title=el('h3',null,field.field_name+' — '+localize(field.label,lang,field.field_name));title.tabIndex=-1;inspector.replaceChildren(title);
       Object.entries(field).forEach(([key,value])=>inspector.append(jsonNode(key,value)));
       inspector.scrollIntoView({behavior:'smooth',block:'nearest'});title.focus({preventScroll:true});
     });surface.append(button);
   });diagram.append(surface);
 }
 let jsonText='';
 function renderJson() {
   jsonText=JSON.stringify($('json-scope').value==='response'?payload:schema,null,2);
   const container=$('schema-json');container.replaceChildren();
   const pattern=/"(?:\\.|[^"\\])*"\s*(?=:)|"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g;
   let cursor=0;for(const match of jsonText.matchAll(pattern)){
     container.append(document.createTextNode(jsonText.slice(cursor,match.index)));
     const value=match[0],key=value.startsWith('"')&&/^\s*:/.test(jsonText.slice(match.index+value.length));
     container.append(el('span',key?'syntax-key':value.startsWith('"')?'syntax-string':value==='null'?'syntax-null':/true|false/.test(value)?'syntax-boolean':'syntax-number',value));cursor=match.index+value.length;
   }container.append(document.createTextNode(jsonText.slice(cursor)));
 }
 function activate(view,updateUrl=true) {
   state.view=['tree','diagram','json'].includes(view)?view:'tree';
   root.querySelectorAll('[role=tab]').forEach(tab=>{const selected=tab.dataset.view===state.view;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
   ['tree','diagram','json'].forEach(v=>$('panel-'+v).hidden=v!==state.view);
   root.querySelector('.schema-filters').hidden=state.view==='json';
   if(state.view==='tree')renderTree();if(state.view==='diagram')renderDiagram();if(state.view==='json')renderJson();
   updateMessage();if(updateUrl)history.replaceState(null,'','#'+state.view);
 }
 root.querySelectorAll('[role=tab]').forEach((tab,index)=>{
   tab.addEventListener('click',()=>activate(tab.dataset.view));
   tab.addEventListener('keydown',event=>{
     const tabs=[...root.querySelectorAll('[role=tab]')];let next;
     if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;
     event.preventDefault();tabs[next].focus();activate(tabs[next].dataset.view);
   });
 });
 let timeout;
 $('field-filter').addEventListener('input',()=>{clearTimeout(timeout);timeout=setTimeout(()=>{state.query=$('field-filter').value;state.page=0;activate(state.view,false);},120);});
 $('required-filter').addEventListener('change',()=>{state.required=$('required-filter').checked;state.page=0;activate(state.view,false);});
 $('expand-fields').addEventListener('click',()=>root.querySelectorAll('.field-node').forEach(d=>d.open=true));
 $('collapse-fields').addEventListener('click',()=>root.querySelectorAll('.field-node').forEach(d=>d.open=false));
 $('diagram-group').addEventListener('change',()=>{state.group=$('diagram-group').value;state.page=0;$('field-inspector').replaceChildren(el('p',null,t.inspect));renderDiagram();});
 $('diagram-previous').addEventListener('click',()=>{state.page--;renderDiagram();});
 $('diagram-next').addEventListener('click',()=>{state.page++;renderDiagram();});
 const zoom=delta=>{state.zoom=Math.max(.5,Math.min(1.75,Math.round((state.zoom+delta)*100)/100));$('zoom-value').textContent=Math.round(state.zoom*100)+'%';renderDiagram();};
 $('zoom-in').addEventListener('click',()=>zoom(.25));$('zoom-out').addEventListener('click',()=>zoom(-.25));$('zoom-reset').addEventListener('click',()=>{state.zoom=1;zoom(0);});
 $('json-scope').addEventListener('change',renderJson);
 $('copy-json').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(jsonText);$('schema-message').textContent=t.copied;}catch{$('schema-message').textContent=t.copyFailed;}});
 window.addEventListener('hashchange',()=>activate(location.hash.slice(1),false));
 activate(location.hash.slice(1),false);
}
