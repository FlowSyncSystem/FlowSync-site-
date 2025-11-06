// Sticky-header aware smooth scrolling + mobile menu close
const header = document.querySelector('.site-header');
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  const headerH = header?.offsetHeight || 0;
  const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 8);
  window.scrollTo({ top, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      scrollToId(href);
      // close mobile menu
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

toggle?.addEventListener('click', ()=>{
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('is-open');
    const answer = btn.nextElementSibling;
    if (!answer) return;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// (Optional) If you ever need to programmatically change monthly price text:
// document.getElementById('monthlv').textContent = '269.99';