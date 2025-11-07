// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Hamburger + overlay with backdrop close & Esc
const ham = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

function setMenu(open){
  ham.setAttribute('aria-expanded', open ? 'true' : 'false');
  overlay.classList.toggle('open', open);
  overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.classList.toggle('menu-open', open);
}

ham.addEventListener('click', () => {
  const open = overlay.classList.contains('open') === false;
  setMenu(open);
});

// Close when clicking outside menu items (on the blurred backdrop)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) setMenu(false);
});

// Close on Esc
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape') setMenu(false);
});

// Smooth scroll for in-page nav
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
<script>
  (function () {
    const body = document.body;
    const btn  = document.getElementById('nav-toggle');
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');

    function openMenu(){
      body.classList.add('menu-open');
      btn.setAttribute('aria-expanded','true');
      drawer.setAttribute('aria-hidden','false');
      overlay.setAttribute('aria-hidden','false');
      // lock scroll
      body.style.overflow = 'hidden';
    }
    function closeMenu(){
      body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded','false');
      drawer.setAttribute('aria-hidden','true');
      overlay.setAttribute('aria-hidden','true');
      body.style.overflow = '';
    }

    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (body.classList.contains('menu-open')) closeMenu(); else openMenu();
    });

    overlay.addEventListener('click', closeMenu);
    drawer.addEventListener('click', e => {
      if (e.target.matches('.nav-item')) closeMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  })();
</script>