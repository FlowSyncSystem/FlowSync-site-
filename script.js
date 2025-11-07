const toggle = document.getElementById("nav-toggle");
const drawer = document.getElementById("nav-drawer");
const overlay = document.getElementById("nav-overlay");

/* ✅ Open / close menu */
toggle.addEventListener("click", () => {
    drawer.classList.toggle("open");
    overlay.classList.toggle("active");
});

/* ✅ Click outside closes */
overlay.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
});