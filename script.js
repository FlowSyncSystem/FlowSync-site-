// Mobile menu (overlay, no content bleed-through)
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.documentElement.style.overflow = open ? 'hidden' : '';
});

// Smooth scroll for internal links (in addition to CSS)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('open');
      document.documentElement.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});