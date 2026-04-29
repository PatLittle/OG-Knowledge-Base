const DEP_PROFILES = [
  { id: "index", yaml: "", title: "Index" },
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

const METADATA_PAGES = [
  { id: "metadata-schemas", titleEn: "Metadata Schemas", titleFr: "Schémas de métadonnées" },
  { id: "organization-schema", titleEn: "Organization schema", titleFr: "Schéma Organisation" },
  { id: "info-schema", titleEn: "Info dataset schema", titleFr: "Schéma Jeu de données (info)" },
  { id: "dataset-schema", titleEn: "Dataset schema", titleFr: "Schéma Jeu de données (dataset)" },
];

const I18N = {
  en: { kb: "Open Government Portal Knowledge Base", overview: "Overview", dep: "DEP content", metadata: "Metadata schemas", skills: "Agent skills", loading: "Loading content...", langBtn: "Français", collapse: "Collapse navigation", expand: "Show navigation", searchPlaceholder: "Search the knowledge base", searchButton: "Search", searchEmpty: "Type a query to search the knowledge base.", searchNone: "No matching pages found.", searchResults: "Search results", editPage: "Edit this page on GitHub" },
  fr: { kb: "Base de connaissances du portail du gouvernement ouvert", overview: "Aperçu", dep: "Contenu DEP", metadata: "Schémas de métadonnées", skills: "Compétences d'agent", loading: "Chargement du contenu...", langBtn: "English", collapse: "Masquer la navigation", expand: "Afficher la navigation", searchPlaceholder: "Chercher dans la base de connaissances", searchButton: "Rechercher", searchEmpty: "Saisissez une requête pour lancer la recherche.", searchNone: "Aucun résultat trouvé.", searchResults: "Résultats de recherche", editPage: "Modifier cette page sur GitHub" },
};

let searchIndex = null;

const GITHUB_REPO_EDIT_BASE = "https://github.com/PatLittle/OG-Knowledge-Base/blob/main/";

function getGithubEditLink(path) {
  return `${GITHUB_REPO_EDIT_BASE}${path}`;
}

function renderEditPageButton(container, lang, path) {
  const link = getGithubEditLink(path);
  const buttonLabel = I18N[lang].editPage;
  container.insertAdjacentHTML("beforeend", `<p class="kb-edit-page-wrap"><a class="kb-edit-page-btn" href="${link}" target="_blank" rel="noopener noreferrer"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" aria-hidden="true" width="18" height="18" /> ${buttonLabel}</a></p>`);
}

function getLang() { return new URLSearchParams(window.location.search).get("lang") === "fr" ? "fr" : "en"; }
function getPageId() { return new URLSearchParams(window.location.search).get("page") || ""; }
function getSearchQuery() { return new URLSearchParams(window.location.search).get("q") || ""; }
function buildHref(lang, page = "", query = "") { const p = new URLSearchParams(); if (lang === "fr") p.set("lang", "fr"); if (page) p.set("page", page); if (query.trim()) p.set("q", query.trim()); const q = p.toString(); return q ? `index.html?${q}` : "index.html"; }
function normalizeText(value) { return value.toLowerCase().replace(/[`#*_>[\]()-]/g, " ").replace(/\s+/g, " ").trim(); }

function mapMarkdownPathToPage(path, lang) {
  if (!path || /^(https?:|mailto:|#)/i.test(path)) return "";
  const depMatch = path.match(/^([a-z0-9-]+)-(en|fr)\.md$/i);
  if (depMatch) {
    const depId = depMatch[1].toLowerCase();
    if (DEP_PROFILES.some((profile) => profile.id === depId)) return buildHref(lang, `dep:${depId}`);
    if (METADATA_PAGES.some((page) => page.id === depId)) return buildHref(lang, `metadata:${depId}`);
  }
  return "";
}

function rewriteDocLinks(root, lang) {
  root.querySelectorAll("a[href]").forEach((link) => {
    const mappedHref = mapMarkdownPathToPage(link.getAttribute("href"), lang);
    if (mappedHref) link.setAttribute("href", mappedHref);
  });
}

function renderNav(lang) {
  const text = I18N[lang];
  const nav = document.getElementById("kb-side-nav");
  nav.innerHTML = `<gcds-nav-link slot="home" href="${buildHref(lang)}">${text.kb}</gcds-nav-link><gcds-nav-group open-trigger="${text.dep}" menu-label="${text.dep}">${DEP_PROFILES.map((d)=>`<gcds-nav-link data-page-link="dep:${d.id}" href="${buildHref(lang,`dep:${d.id}`)}">${d.title}</gcds-nav-link>`).join("")}</gcds-nav-group><gcds-nav-group open-trigger="${text.metadata}" menu-label="${text.metadata}">${METADATA_PAGES.map((d)=>`<gcds-nav-link data-page-link="metadata:${d.id}" href="${buildHref(lang,`metadata:${d.id}`)}">${lang === "fr" ? d.titleFr : d.titleEn}</gcds-nav-link>`).join("")}</gcds-nav-group><gcds-nav-group open-trigger="${text.skills}" menu-label="${text.skills}"><gcds-nav-link href="https://github.com/PatLittle/OG-Knowledge-Base/tree/main/content/skills">Skills directory (GitHub)</gcds-nav-link><gcds-nav-link href="https://github.com/PatLittle/OG-Knowledge-Base/blob/main/content/skills/deplane-dep-markdown/SKILL.md">deplane-dep-markdown</gcds-nav-link></gcds-nav-group>`;
}

function setActive(pageId) { document.querySelectorAll("[data-page-link]").forEach((n)=>n.toggleAttribute("current", n.dataset.pageLink === pageId)); }

async function renderMarkdown(container, lang, path) {
  const t = I18N[lang];
  const md = path;
  container.innerHTML = `<div id="kb-rendered" class="kb-rendered"><p>${t.loading}</p></div>`;
  const target = document.getElementById("kb-rendered");
  const resp = await fetch(md);
  target.innerHTML = resp.ok ? marked.parse(await resp.text(), { mangle: false, headerIds: true }) : `<p>Could not load <code>${md}</code>.</p>`;
  if (resp.ok) {
    rewriteDocLinks(target, lang);
    renderEditPageButton(container, lang, md);
  }
}

async function buildSearchIndex(lang) {
  if (searchIndex?.lang === lang) return searchIndex.docs;
  const depDocs = DEP_PROFILES.map(async (profile) => {
    const url = `content/dep/${profile.id}-${lang}.md`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const markdown = await response.text();
    return { profile, url: buildHref(lang, `dep:${profile.id}`), text: normalizeText(markdown), snippet: markdown.replace(/[#>*`\-]/g, " ").replace(/\s+/g, " ").trim().slice(0, 220) };
  });
  const metadataDocs = METADATA_PAGES.map(async (page) => {
    const filePath = `content/metadata/${page.id}-${lang}.md`;
    const response = await fetch(filePath);
    if (!response.ok) return null;
    const markdown = await response.text();
    return { profile: { title: lang === "fr" ? page.titleFr : page.titleEn }, url: buildHref(lang, `metadata:${page.id}`), text: normalizeText(markdown), snippet: markdown.replace(/[#>*`\-]/g, " ").replace(/\s+/g, " ").trim().slice(0, 220) };
  });
  const docs = await Promise.all([...depDocs, ...metadataDocs]);
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

function configureFooter(lang) {
  const footer = document.querySelector("gcds-footer");
  if (!footer) return;
  footer.setAttribute("contextual-heading", lang === "fr" ? "Base de connaissances du portail du gouvernement ouvert" : "Open Government Portal Knowledge Base");
  footer.setAttribute(
    "contextual-links",
    JSON.stringify({
      "Open Government Portal": "https://open.canada.ca",
      "API Documentation": "https://open.canada.ca/data/en/dataset/2d90548d-50ef-4802-91f8-c59c5cf68251",
      "GitHub repo": "https://github.com/PatLittle/OG-Knowledge-Base"
    })
  );
}

async function init() {
  const lang = getLang(); const pageId = getPageId(); const q = getSearchQuery(); const t = I18N[lang];
  document.documentElement.lang = lang;
  document.title = `${t.kb}`;
  configureFooter(lang);

  const header = document.getElementById("site-header");
  header.setAttribute("lang-href", buildHref(lang === "en" ? "fr" : "en", pageId, q));

  const searchInput = document.getElementById("kb-header-search-input");
  searchInput.placeholder = t.searchPlaceholder;
  searchInput.value = q;
  document.querySelector("#kb-header-search button").setAttribute("aria-label", t.searchButton);
  document.getElementById("kb-header-search").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    window.location.href = buildHref(lang, "", query);
  });

  renderNav(lang); setActive(pageId);
  const c = document.getElementById("kb-content");
  if (q) await renderSearch(c, lang, q);
  else if (pageId.startsWith("dep:")) await renderMarkdown(c, lang, `content/dep/${pageId.replace("dep:","")}-${lang}.md`);
  else if (pageId.startsWith("metadata:")) await renderMarkdown(c, lang, `content/metadata/${pageId.replace("metadata:","")}-${lang}.md`);
  else await renderMarkdown(c, lang, `content/home/index-${lang}.md`);

  const side = document.querySelector(".kb-sidebar");
  const layout = document.getElementById("kb-layout");
  const btn = document.getElementById("nav-toggle");
  const update = () => { const collapsed = side.classList.contains("collapsed"); layout.classList.toggle("nav-collapsed", collapsed); btn.setAttribute("aria-expanded", String(!collapsed)); btn.setAttribute("aria-label", collapsed ? t.expand : t.collapse); btn.innerHTML = collapsed ? "☰⇉" : "☰⇇"; };
  btn.addEventListener("click", ()=>{ side.classList.toggle("collapsed"); update(); }); update();
}
window.addEventListener("DOMContentLoaded", init);
