// Mobile nav
const burger = document.getElementById('hamburger');
const mobile = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();
// Smooth-scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile menu if it's open (optional – adjust IDs/classes to yours)
    const mobileMenu = document.querySelector('.mobile-menu');
    const burger = document.querySelector('#hamburger');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      if (burger) burger.setAttribute('aria-expanded', 'false');
    }
  });
});