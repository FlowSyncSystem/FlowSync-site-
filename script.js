// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const html = document.documentElement;
hamburger?.addEventListener('click', () => {
  html.classList.toggle('menu-open');
});

// Close menu on nav click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => html.classList.remove('menu-open'));
});

// Smooth anchor scroll with small offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();