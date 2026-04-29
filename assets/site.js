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
  en: { kb: "DEP Knowledge Base", overview: "Overview", dep: "DEP content", skills: "Agent skills", loading: "Loading content...", langBtn: "Français", collapse: "Collapse navigation", expand: "Show navigation", searchPlaceholder: "Search the knowledge base", searchButton: "Search", searchEmpty: "Type a query to search the knowledge base.", searchNone: "No matching pages found.", searchResults: "Search results" },
  fr: { kb: "Base de connaissances DEP", overview: "Aperçu", dep: "Contenu DEP", skills: "Compétences d'agent", loading: "Chargement du contenu...", langBtn: "English", collapse: "Masquer la navigation", expand: "Afficher la navigation", searchPlaceholder: "Chercher dans la base de connaissances", searchButton: "Rechercher", searchEmpty: "Saisissez une requête pour lancer la recherche.", searchNone: "Aucun résultat trouvé.", searchResults: "Résultats de recherche" },
};

let searchIndex = null;

function getLang() { return new URLSearchParams(window.location.search).get("lang") === "fr" ? "fr" : "en"; }
function getDepId() { return new URLSearchParams(window.location.search).get("dep") || ""; }
function getSearchQuery() { return new URLSearchParams(window.location.search).get("q") || ""; }
function buildHref(lang, dep = "", query = "") { const p = new URLSearchParams(); if (lang === "fr") p.set("lang", "fr"); if (dep) p.set("dep", dep); if (query.trim()) p.set("q", query.trim()); const q = p.toString(); return q ? `index.html?${q}` : "index.html"; }
function normalizeText(value) { return value.toLowerCase().replace(/[`#*_>[\]()-]/g, " ").replace(/\s+/g, " ").trim(); }

function renderNav(lang) {
  const text = I18N[lang];
  const nav = document.getElementById("kb-side-nav");
  nav.innerHTML = `<gcds-nav-link href="${buildHref(lang)}">${text.overview}</gcds-nav-link><gcds-nav-group menu-label="${text.dep}" open-trigger>${DEP_PROFILES.map((d)=>`<gcds-nav-link data-dep-link="${d.id}" href="${buildHref(lang,d.id)}">${d.title}</gcds-nav-link>`).join("")}</gcds-nav-group><gcds-nav-group menu-label="${text.skills}" open-trigger><gcds-nav-link href="content/skills/deplane-dep-markdown/SKILL.md">deplane-dep-markdown</gcds-nav-link></gcds-nav-group>`;
}

function setActive(dep) { document.querySelectorAll("[data-dep-link]").forEach((n)=>n.toggleAttribute("current", n.dataset.depLink === dep)); }

async function renderMarkdown(container, lang, dep) {
  const t = I18N[lang];
  const md = `content/dep/${dep}-${lang}.md`;
  container.innerHTML = `<div id="kb-rendered" class="kb-rendered"><p>${t.loading}</p></div>`;
  const target = document.getElementById("kb-rendered");
  const resp = await fetch(md);
  target.innerHTML = resp.ok ? marked.parse(await resp.text(), { mangle: false, headerIds: true }) : `<p>Could not load <code>${md}</code>.</p>`;
}

async function buildSearchIndex(lang) {
  if (searchIndex?.lang === lang) return searchIndex.docs;
  const docs = await Promise.all(DEP_PROFILES.map(async (profile) => {
    const url = `content/dep/${profile.id}-${lang}.md`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const markdown = await response.text();
    return { profile, url: buildHref(lang, profile.id), text: normalizeText(markdown), snippet: markdown.replace(/[#>*`\-]/g, " ").replace(/\s+/g, " ").trim().slice(0, 220) };
  }));
  searchIndex = { lang, docs: docs.filter(Boolean) };
  return searchIndex.docs;
}

async function renderSearch(container, lang, query) {
  const t = I18N[lang];
  const clean = normalizeText(query);
  const terms = clean.split(" ").filter(Boolean);
  container.innerHTML = `<gcds-heading tag="h1">${t.searchResults}</gcds-heading><p class="kb-meta">${clean ? `“${query}”` : t.searchEmpty}</p><div id="kb-search-results"></div>`;
  if (!terms.length) return;

  const docs = await buildSearchIndex(lang);
  const ranked = docs
    .map((doc) => {
      const score = terms.reduce((sum, term) => sum + (doc.text.includes(term) ? 1 : 0), 0);
      return { ...doc, score };
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score || a.profile.title.localeCompare(b.profile.title));

  const target = document.getElementById("kb-search-results");
  if (!ranked.length) {
    target.innerHTML = `<p>${t.searchNone}</p>`;
    return;
  }

  target.innerHTML = `<ul class="kb-search-results">${ranked.map((doc) => `<li><a href="${doc.url}">${doc.profile.title}</a><p>${doc.snippet}...</p></li>`).join("")}</ul>`;
}

function renderHome(container, lang) { const t = I18N[lang]; container.innerHTML = `<gcds-heading tag="h1">${t.kb}</gcds-heading><p class="kb-meta">${lang === "fr" ? "Documentation DEP bilingue avec fichiers séparés par profil." : "Bilingual DEP documentation with profile-per-file content."}</p>`; }

async function init() {
  const lang = getLang(); const dep = getDepId(); const q = getSearchQuery(); const t = I18N[lang];
  document.documentElement.lang = lang;
  document.title = `${t.kb}`;

  const header = document.getElementById("site-header");
  header.setAttribute("lang-href", buildHref(lang === "en" ? "fr" : "en", dep, q));

  const searchInput = document.getElementById("kb-header-search-input");
  searchInput.placeholder = t.searchPlaceholder;
  searchInput.value = q;
  document.querySelector("#kb-header-search button").setAttribute("aria-label", t.searchButton);
  document.getElementById("kb-header-search").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    window.location.href = buildHref(lang, "", query);
  });

  renderNav(lang); setActive(dep);
  const c = document.getElementById("kb-content");
  if (q) await renderSearch(c, lang, q);
  else if (dep) await renderMarkdown(c, lang, dep);
  else renderHome(c, lang);

  const side = document.querySelector(".kb-sidebar");
  const layout = document.getElementById("kb-layout");
  const btn = document.getElementById("nav-toggle");
  const update = () => { const collapsed = side.classList.contains("collapsed"); layout.classList.toggle("nav-collapsed", collapsed); btn.setAttribute("aria-expanded", String(!collapsed)); btn.setAttribute("aria-label", collapsed ? t.expand : t.collapse); btn.innerHTML = collapsed ? "☰" : "⮜"; };
  btn.addEventListener("click", ()=>{ side.classList.toggle("collapsed"); update(); }); update();
}
window.addEventListener("DOMContentLoaded", init);
