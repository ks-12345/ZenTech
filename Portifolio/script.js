const header = document.querySelector(".header");
const cursorGlow = document.querySelector(".cursor-glow");
const menuBtn = document.querySelector(".menu-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn?.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => header.classList.remove("menu-open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
  cursorGlow.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});

// Pequeno efeito de profundidade no visual do dashboard.
const visual = document.querySelector(".visual-card");
window.addEventListener("mousemove", (e) => {
  if (!visual || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 5;
  const y = (e.clientY / window.innerHeight - 0.5) * -5;
  visual.style.transform = `rotate(2deg) translate(${x}px, ${y}px)`;
});

// Fecha o menu quando a tela volta ao desktop.
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) header.classList.remove("menu-open");
});
