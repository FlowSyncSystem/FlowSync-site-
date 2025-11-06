// Mobile nav
const toggle = document.querySelector('.nav__toggle');
const header = document.querySelector('.nav');
if (toggle){
  toggle.addEventListener('click', () => {
    const open = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  });
}

// Smooth scroll for internal links (and close mobile menu)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      header.setAttribute('aria-expanded','false');
      history.pushState(null,'',`#${id}`);
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();