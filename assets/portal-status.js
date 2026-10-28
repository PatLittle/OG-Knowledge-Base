// Live public incident notices for the bilingual Knowledge Base homepages.
const API = 'https://api.github.com/repos/open-data/status-statut/issues';
const REPORT = 'https://open-data.github.io/status-statut/incident/';
const root = document.querySelector('[data-portal-notices]');
if (root) {
  const fr = document.documentElement.lang.toLowerCase().startsWith('fr');
  const groups = [
    { label: 'status', role: 'danger', heading: fr ? 'Incidents actifs' : 'Active incidents' },
    { label: 'maintenance', role: 'warning', heading: fr ? 'Maintenance prévue' : 'Scheduled maintenance' }
  ];
  const formatDate = value => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat(fr ? 'fr-CA' : 'en-CA', { dateStyle: 'medium' }).format(date);
  };
  async function load(group) {
    const params = new URLSearchParams({state:'open',filter:'all',sort:'created',direction:'desc',labels:group.label,per_page:'100'});
    const response = await fetch(API + '?' + params, {headers:{Accept:'application/vnd.github+json'}});
    if (!response.ok) throw new Error('GitHub API: ' + response.status);
    const issues = await response.json();
    if (!Array.isArray(issues)) throw new Error('Unexpected GitHub API response');
    return issues.filter(issue => !issue.pull_request && issue.state === 'open' &&
      Array.isArray(issue.labels) && issue.labels.some(label => label.name === group.label));
  }
  const results = await Promise.allSettled(groups.map(load));
  groups.forEach((group, index) => {
    const result = results[index];
    if (result.status !== 'fulfilled') {
      console.warn('Could not load portal notices for ' + group.label, result.reason);
      return;
    }
    if (!result.value.length) return;
    const section = document.createElement('section');
    section.className = 'portal-notice-section';
    const heading = document.createElement('h2');
    heading.className = 'portal-notice-heading';
    heading.textContent = group.heading;
    section.append(heading);
    result.value.forEach(issue => {
      const notice = document.createElement('gcds-notice');
      notice.setAttribute('notice-role',group.role);
      notice.setAttribute('notice-title',String(issue.title || (fr ? 'Avis de service' : 'Service notice')));
      notice.setAttribute('notice-title-tag','h3');
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
