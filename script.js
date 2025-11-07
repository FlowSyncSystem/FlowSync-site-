// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Hamburger + overlay lock
const ham = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

function setMenu(open){
  ham.setAttribute('aria-expanded', open ? 'true' : 'false');
  overlay.classList.toggle('open', open);
  overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.style.overflow = open ? 'hidden' : '';
}
ham.addEventListener('click', () => setMenu(overlay.classList.contains('open') === false));
overlay.addEventListener('click', (e) => {
  if (e.target.matches('.overlay a')) setMenu(false);
  if (e.target === overlay) setMenu(false);
});

// Smooth scroll for internal links (in case browser doesn’t)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      setMenu(false);
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});