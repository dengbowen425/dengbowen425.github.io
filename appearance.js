/* Appearance is explicit: keep the original paper theme until a visitor switches. */
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const key = 'bowen-portfolio-theme';
  function apply(theme, remember = false) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    const label = dark ? '切换到浅色模式' : '切换到暗色模式';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
    toggle.setAttribute('aria-pressed', String(dark));
    themeColor.setAttribute('content', dark ? '#151613' : '#f8f6ec');
    if (remember) {
      try { localStorage.setItem(key, root.dataset.theme); } catch (_) { /* Private browsing can deny storage. */ }
    }
  }
  apply(root.dataset.theme);
  toggle.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  window.addEventListener('storage', event => {
    if (event.key === key) apply(event.newValue);
  });
  document.querySelectorAll('[data-discipline-filter]').forEach(sticker => {
    sticker.addEventListener('click', () => {
      document.querySelector(`[data-filter="${sticker.dataset.disciplineFilter}"]`)?.click();
    });
  });
})();
