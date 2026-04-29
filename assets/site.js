const ROUTES = {
  home: {
    title: "DEP Knowledge Base",
    description: "Data Element Profile documentation and reusable agent skills.",
  },
  "dep-en": {
    title: "Data Element Profiles (English)",
    markdown: "content/dep/all-dep-en.md",
  },
  "dep-fr": {
    title: "Profils des elements de donnees (francais)",
    markdown: "content/dep/all-dep-fr.md",
  },
  skill: {
    title: "Agent skill: deplane-dep-markdown",
    markdown: "content/skills/deplane-dep-markdown/SKILL.md",
  },
};

function routeName() {
  const page = new URLSearchParams(window.location.search).get("page");
  return ROUTES[page] ? page : "home";
}

function pageHref(page) {
  return page === "home" ? "index.html" : `index.html?page=${page}`;
}

function setActiveSideNav(page) {
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (link.dataset.pageLink === page) {
      link.setAttribute("current", "true");
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("current");
      link.removeAttribute("aria-current");
    }
  });
}

function renderHome(container) {
  container.innerHTML = `
    <gcds-heading tag="h1">DEP Knowledge Base</gcds-heading>
    <p class="kb-meta">A GitHub Pages-ready knowledge base for consolidated DEP documentation and agent skills.</p>
    <div class="kb-card-grid">
      <article class="kb-card">
        <h2>English DEP content</h2>
        <p>All consolidated English Data Element Profiles generated from ckanext-canada YAML schemas.</p>
        <gcds-link href="${pageHref("dep-en")}">Open English DEP content</gcds-link>
      </article>
      <article class="kb-card">
        <h2>French DEP content</h2>
        <p>All consolidated French Data Element Profiles generated with deplane translation rules.</p>
        <gcds-link href="${pageHref("dep-fr")}">Open French DEP content</gcds-link>
      </article>
      <article class="kb-card">
        <h2>Agent skills</h2>
        <p>Reusable skill instructions and scripts for regenerating the DEP Markdown content.</p>
        <gcds-link href="${pageHref("skill")}">Open the agent skill</gcds-link>
      </article>
    </div>
    <gcds-heading tag="h2">Source model</gcds-heading>
    <p>The DEP pages are served from Markdown files in <code>content/dep</code>. The skill page is served from <code>content/skills</code>. No build step is required for GitHub Pages.</p>
  `;
}

function filterRenderedContent(query, root) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const sections = root.querySelectorAll("h1, h2, h3, table, p, ul, ol, pre");
  if (!terms.length) {
    sections.forEach((node) => {
      node.hidden = false;
    });
    return;
  }
  sections.forEach((node) => {
    const text = node.textContent.toLowerCase();
    node.hidden = !terms.every((term) => text.includes(term));
  });
}

async function renderMarkdownPage(container, route) {
  container.innerHTML = `
    <gcds-heading tag="h1">${route.title}</gcds-heading>
    <div class="kb-toolbar">
      <label for="kb-search">Filter visible content</label>
      <input id="kb-search" type="search" autocomplete="off" placeholder="Type a field, profile, or code" />
    </div>
    <div class="kb-rendered" id="kb-rendered">
      <p>Loading content...</p>
    </div>
  `;

  const target = document.getElementById("kb-rendered");
  const response = await fetch(route.markdown);
  if (!response.ok) {
    target.innerHTML = `<p>Could not load <code>${route.markdown}</code>.</p>`;
    return;
  }
  const markdown = await response.text();
  if (window.marked) {
    target.innerHTML = marked.parse(markdown, { mangle: false, headerIds: true });
  } else {
    target.innerHTML = `<pre class="kb-skip-render">${markdown.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]))}</pre>`;
  }
  document.getElementById("kb-search").addEventListener("input", (event) => {
    filterRenderedContent(event.target.value, target);
  });
}

async function init() {
  const page = routeName();
  const route = ROUTES[page];
  document.title = `${route.title} - DEP Knowledge Base`;
  setActiveSideNav(page);

  const content = document.getElementById("kb-content");
  if (page === "home") {
    renderHome(content);
  } else {
    await renderMarkdownPage(content, route);
  }
}

window.addEventListener("DOMContentLoaded", init);

