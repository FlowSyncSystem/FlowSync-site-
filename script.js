<script>
  (function () {
    const btn = document.getElementById("nav-toggle");
    const drawer = document.getElementById("nav-drawer");
    const overlay = document.getElementById("nav-overlay");

    function openNav() {
      btn.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      drawer.classList.add("show");
      overlay.classList.add("show");
      document.body.classList.add("nav-open");
    }

    function closeNav() {
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      drawer.classList.remove("show");
      overlay.classList.remove("show");
      document.body.classList.remove("nav-open");
    }

    function toggleNav() {
      drawer.classList.contains("show") ? closeNav() : openNav();
    }

    btn.addEventListener("click", toggleNav);
    overlay.addEventListener("click", closeNav);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  })();
</script>