// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Price text (edit here if you change pricing)
document.getElementById('monthlv').textContent = '269.99';