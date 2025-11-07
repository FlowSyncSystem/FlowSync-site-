// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Hamburger → fullscreen overlay
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const toggleMenu = () => {
  const open = menu.classList.toggle('show');
  document.body.classList.toggle('menu-open', open);
  hamburger.setAttribute('aria-expanded', String(open));
};
hamburger.addEventListener('click', toggleMenu);

// Close menu on overlay click
menu.addEventListener('click', (e) => {
  if (e.target === menu) toggleMenu();
});

// Smooth scroll + close menu on link click
document.querySelectorAll('.menu-link, a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const el = document.querySelector(href);
    if (!el) return;

    e.preventDefault();
    // Close overlay if open
    if (menu.classList.contains('show')) toggleMenu();

    // Smooth, controlled scroll (works in all browsers)
    const top = el.getBoundingClientRect().top + window.pageYOffset - 10;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});