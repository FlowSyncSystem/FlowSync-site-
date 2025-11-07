// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById('hamburger');
const mnav = document.getElementById('mobileNav');

function toggleMenu() {
  const open = mnav.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
  burger.setAttribute('aria-expanded', String(open));
  mnav.setAttribute('aria-hidden', String(!open));
}
burger.addEventListener('click', toggleMenu);
mnav.addEventListener('click', (e)=> {
  if (e.target.classList.contains('m-link')) toggleMenu();
});

// Smooth-scroll with small offset so headers aren’t hidden
const OFFSET = 72;
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      const el = document.querySelector(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  });
});