// Hamburger + slide-over menu
const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
const backdrop = menu.querySelector('.backdrop');
const links = menu.querySelectorAll('.m-link');

function openMenu(){
  menu.classList.add('show');
  menu.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeMenu(){
  menu.classList.remove('show');
  menu.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

ham.addEventListener('click', () => {
  menu.classList.contains('show') ? closeMenu() : openMenu();
});
backdrop.addEventListener('click', closeMenu);
links.forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
window.addEventListener('scroll', () => { if(menu.classList.contains('show')) closeMenu(); });

// (Animations are pure CSS: gradient motion on CTA + heading, breathing green dots)