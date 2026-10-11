(() => {
 const header = document.querySelector('.floating-header');
 const toggle = document.getElementById('header-menu-toggle');
 const menu = document.getElementById('header-menu');
 if (!header || !toggle || !menu) return;
 const setOpen = (open, restoreFocus = false) => {
  menu.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
  if (restoreFocus) toggle.focus({preventScroll:true});
 };
 toggle.addEventListener('click', () => setOpen(menu.hidden));
 toggle.addEventListener('keydown', event => {
  if (event.key !== 'ArrowDown') return;
  event.preventDefault();
  setOpen(true);
  menu.querySelector('a').focus({preventScroll:true});
 });
 header.addEventListener('click', event => {
  if (event.target.closest('a')) setOpen(false);
 });
 document.addEventListener('pointerdown', event => {
  if (!menu.hidden && !header.contains(event.target)) setOpen(false);
 });
 document.addEventListener('focusin', event => {
  if (!menu.hidden && !header.contains(event.target)) setOpen(false);
 });
 document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) {
   event.preventDefault();
   setOpen(false, true);
  }
 });
})();
