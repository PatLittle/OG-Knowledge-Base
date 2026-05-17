(function () {
  const form = document.querySelector('.docs-search');
  if (!form) return;

  const input = form.querySelector('#site-search');
  const results = form.querySelector('#search-results');
  const indexUrl = form.getAttribute('data-search-index');
  let index = [];

  if (!input || !results || !indexUrl) return;

  fetch(indexUrl)
    .then((r) => r.json())
    .then((data) => { index = data; })
    .catch(() => { index = []; });

  input.addEventListener('input', function () {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (q.length < 2) return;

    const hits = index
      .filter((d) => (d.title + ' ' + d.content).toLowerCase().includes(q))
      .slice(0, 8);

    hits.forEach((hit) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = hit.url;
      a.textContent = hit.title;
      li.appendChild(a);
      results.appendChild(li);
    });
  });
})();
