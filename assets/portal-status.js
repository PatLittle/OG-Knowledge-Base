// Lightweight live notices and status navigation, shared across both languages.
const API = 'https://api.github.com/repos/open-data/status-statut/issues';
const REPORT = 'https://open-data.github.io/status-statut/incident/';
const root = document.querySelector('[data-portal-notices]');
const fr = document.documentElement.lang.toLowerCase().startsWith('fr');
const groups = [
  {label:'status',role:'danger'},
  {label:'maintenance',role:'warning'}
];
const formatDate = value => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' :
    new Intl.DateTimeFormat(fr ? 'fr-CA' : 'en-CA',{dateStyle:'medium'}).format(date);
};
async function load(group) {
  const params = new URLSearchParams({state:'open',filter:'all',sort:'created',direction:'desc',labels:group.label,per_page:'100'});
  const response = await fetch(API + '?' + params,{headers:{Accept:'application/vnd.github+json'}});
  if (!response.ok) throw new Error('GitHub API: ' + response.status);
  const issues = await response.json();
  if (!Array.isArray(issues)) throw new Error('Unexpected GitHub API response');
  return issues.filter(issue => !issue.pull_request && issue.state === 'open' &&
    Array.isArray(issue.labels) && issue.labels.some(label => label.name === group.label));
}
function highlightStatus(state) {
  const link = [...document.querySelectorAll('gcds-nav-link')].find(node =>
    node.getAttribute('href') === 'https://open-data.github.io/status-statut/');
  if (!link || !state) return;
  link.setAttribute('data-status-level',state);
  // GCDS nav-link's anchor lives inside a shadow root; style it there as well.
  const shadow = link.shadowRoot;
  if (shadow && !shadow.querySelector('[data-portal-status-style]')) {
    const style = document.createElement('style');
    style.setAttribute('data-portal-status-style','');
    style.textContent = [
      ':host([data-status-level="danger"]) a {color:#a3152a !important;background:#fce8eb !important;border-radius:4px;padding-inline:10px;}',
      ':host([data-status-level="warning"]) a {color:#171717 !important;background:#ffe69c !important;border-radius:4px;padding-inline:10px;}',
      ':host([data-status-level]) a:hover {text-decoration:underline;}'
    ].join('\n');
    shadow.append(style);
  }
}
const results = await Promise.allSettled(groups.map(load));
const status = results[0].status === 'fulfilled' && results[0].value.length > 0;
const maintenance = results[1].status === 'fulfilled' && results[1].value.length > 0;
if (status || maintenance) {
  await customElements.whenDefined('gcds-nav-link');
  highlightStatus(status ? 'danger' : 'warning');
}
if (root) {
  groups.forEach((group,index) => {
    const result = results[index];
    if (result.status !== 'fulfilled') {
      console.warn('Could not load portal notices for '+group.label,result.reason);
      return;
    }
    if (!result.value.length) return;
    const section = document.createElement('section');
    section.className = 'portal-notice-section';
    section.setAttribute('aria-label',group.label === 'status' ?
      (fr ? 'Incidents actifs' : 'Active incidents') :
      (fr ? 'Maintenance prévue' : 'Scheduled maintenance'));
    result.value.forEach(issue => {
      const notice = document.createElement('gcds-notice');
      notice.setAttribute('notice-role',group.role);
      notice.setAttribute('notice-title',String(issue.title || (fr ? 'Avis de service' : 'Service notice')));
      notice.setAttribute('notice-title-tag','h2');
      // The notice heading is inside GCDS's shadow DOM, so size it there.
      customElements.whenDefined('gcds-notice').then(() => {
        const apply = () => {
          if (!notice.shadowRoot || notice.shadowRoot.querySelector('[data-compact-notice-style]')) return;
          const style = document.createElement('style');
          style.setAttribute('data-compact-notice-style','');
          style.textContent = 'h2, h3, [class*="title"], [class*="heading"] { font-size: 14px !important; line-height: 1.3 !important; margin-block: 0 2px !important; } :host { font-size: 14px !important; }';
          notice.shadowRoot.append(style);
        };
        apply();
        if (!notice.shadowRoot) requestAnimationFrame(apply);
      });
      const detail = document.createElement('gcds-text');
      detail.setAttribute('margin-bottom','0');
      const date = formatDate(issue.created_at);
      if (date) {
        const dateText = document.createElement('span');
        dateText.textContent = (fr ? 'Ouvert le ' : 'Opened ') + date + ' · ';
        detail.append(dateText);
      }
      const link = document.createElement('a');
      link.href = REPORT + encodeURIComponent(issue.number);
      link.textContent = (fr ? 'Incident no ' : 'Incident #') + issue.number;
      detail.append(link);
      notice.append(detail);
      section.append(notice);
    });
    root.append(section);
  });
  root.hidden = !root.childElementCount;
}
