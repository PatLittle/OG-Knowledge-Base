const DEP_PROFILES = [
  { id: "adminaircraft", yaml: "adminaircraft.yaml", title: "Proactive Publication - Use of Administrative Aircraft" },
  { id: "aistrategy", yaml: "aistrategy.yaml", title: "AI Strategy Implementation Tracker" },
  { id: "ati", yaml: "ati.yaml", title: "ATI Summaries" },
  { id: "briefingt", yaml: "briefingt.yaml", title: "Proactive Publication - Briefing Note Titles and Numbers" },
  { id: "consultations", yaml: "consultations.yaml", title: "Open Dialogue - Consultations" },
  { id: "contracts", yaml: "contracts.yaml", title: "Proactive Publication - Contracts over $10,000" },
  { id: "contractsa", yaml: "contractsa.yaml", title: "Proactive Publication - Aggregated Contracts from -$10,000 to $10,000" },
  { id: "dac", yaml: "dac.yaml", title: "Proactive Publication - Departmental Audit Committee" },
  { id: "experiment", yaml: "experiment.yaml", title: "Experimentation Inventory" },
  { id: "grants", yaml: "grants.yaml", title: "Proactive Publication - Grants and Contributions" },
  { id: "hospitalityq", yaml: "hospitalityq.yaml", title: "Proactive Publication - Hospitality Expenses" },
  { id: "inventory", yaml: "inventory.yaml", title: "Open Data Inventory" },
  { id: "nap5", yaml: "nap5.yaml", title: "5th National Action Plan on Open Government Tracker" },
  { id: "nap6", yaml: "nap6.yaml", title: "6th National Action Plan on Open Government Tracker" },
  { id: "qpnotes", yaml: "qpnotes.yaml", title: "Proactive Publication - Question Period Notes" },
  { id: "reclassification", yaml: "reclassification.yaml", title: "Proactive Publication - Position Reclassification" },
  { id: "service", yaml: "service.yaml", title: "Service Inventory" },
  { id: "travela", yaml: "travela.yaml", title: "Proactive Publication - Annual Travel, Hospitality and Conferences" },
  { id: "travelq", yaml: "travelq.yaml", title: "Proactive Publication - Travel Expenses" },
  { id: "wrongdoing", yaml: "wrongdoing.yaml", title: "Proactive Publication - Acts of Founded Wrongdoing" },
];

const I18N = {
  en: { kb: "DEP Knowledge Base", overview: "Overview", dep: "DEP content", skills: "Agent skills", filter: "Filter visible content", placeholder: "Type a field, profile, or code", loading: "Loading content...", langBtn: "Français", collapse: "Collapse navigation", expand: "Show navigation" },
  fr: { kb: "Base de connaissances DEP", overview: "Aperçu", dep: "Contenu DEP", skills: "Compétences d'agent", filter: "Filtrer le contenu visible", placeholder: "Tapez un champ, profil ou code", loading: "Chargement du contenu...", langBtn: "English", collapse: "Masquer la navigation", expand: "Afficher la navigation" },
};

function getLang() { return new URLSearchParams(window.location.search).get("lang") === "fr" ? "fr" : "en"; }
function getDepId() { return new URLSearchParams(window.location.search).get("dep") || ""; }
function buildHref(lang, dep = "") { const p = new URLSearchParams(); if (lang === "fr") p.set("lang", "fr"); if (dep) p.set("dep", dep); const q = p.toString(); return q ? `index.html?${q}` : "index.html"; }

function renderNav(lang) {
  const text = I18N[lang];
  const nav = document.getElementById("kb-side-nav");
  nav.innerHTML = `<gcds-nav-link href="${buildHref(lang)}">${text.overview}</gcds-nav-link><gcds-nav-group menu-label="${text.dep}" open-trigger>${DEP_PROFILES.map((d)=>`<gcds-nav-link data-dep-link="${d.id}" href="${buildHref(lang,d.id)}">${d.title}</gcds-nav-link>`).join("")}</gcds-nav-group><gcds-nav-group menu-label="${text.skills}" open-trigger><gcds-nav-link href="content/skills/deplane-dep-markdown/SKILL.md">deplane-dep-markdown</gcds-nav-link></gcds-nav-group>`;
}

function setActive(dep) { document.querySelectorAll("[data-dep-link]").forEach((n)=>n.toggleAttribute("current", n.dataset.depLink === dep)); }

async function renderMarkdown(container, lang, dep) {
  const t = I18N[lang];
  const md = `content/dep/${dep}-${lang}.md`;
  container.innerHTML = `<div class="kb-toolbar"><label for="kb-search">${t.filter}</label><input id="kb-search" type="search" placeholder="${t.placeholder}"/></div><div id="kb-rendered" class="kb-rendered"><p>${t.loading}</p></div>`;
  const target = document.getElementById("kb-rendered");
  const resp = await fetch(md);
  target.innerHTML = resp.ok ? marked.parse(await resp.text(), { mangle: false, headerIds: true }) : `<p>Could not load <code>${md}</code>.</p>`;
  document.getElementById("kb-search").addEventListener("input", (e) => filterRenderedContent(e.target.value, target));
}

function filterRenderedContent(query, root) { const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean); root.querySelectorAll("h1,h2,h3,table,p,ul,ol,pre").forEach((node)=>{ node.hidden = terms.length && !terms.every((t)=>node.textContent.toLowerCase().includes(t)); }); }
function renderHome(container, lang) { const t = I18N[lang]; container.innerHTML = `<gcds-heading tag="h1">${t.kb}</gcds-heading><p class="kb-meta">${lang === "fr" ? "Documentation DEP bilingue avec fichiers séparés par profil." : "Bilingual DEP documentation with profile-per-file content."}</p>`; }

async function init() {
  const lang = getLang(); const dep = getDepId(); const t = I18N[lang];
  document.documentElement.lang = lang;
  document.title = `${t.kb}`;
  document.getElementById("lang-toggle").setAttribute("href", buildHref(lang === "en" ? "fr" : "en", dep));
  document.getElementById("lang-toggle").textContent = t.langBtn;
  renderNav(lang); setActive(dep);
  const c = document.getElementById("kb-content");
  dep ? await renderMarkdown(c, lang, dep) : renderHome(c, lang);

  const side = document.querySelector(".kb-sidebar");
  const btn = document.getElementById("nav-toggle");
  const update = () => { const collapsed = side.classList.contains("collapsed"); btn.setAttribute("aria-expanded", String(!collapsed)); btn.setAttribute("aria-label", collapsed ? t.expand : t.collapse); btn.innerHTML = collapsed ? "☰" : "⮜"; };
  btn.addEventListener("click", ()=>{ side.classList.toggle("collapsed"); update(); }); update();
}
window.addEventListener("DOMContentLoaded", init);
