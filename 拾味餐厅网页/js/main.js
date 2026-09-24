const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 40));

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const tabs = document.querySelectorAll(".menu-tabs button");
const items = document.querySelectorAll(".menu-item");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.dataset.category;
    items.forEach(item => {
      item.style.display = category === "all" || item.dataset.category === category ? "flex" : "none";
    });
  });
});
