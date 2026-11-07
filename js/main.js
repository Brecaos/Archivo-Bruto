/* =========================================================
   FUNCIONES COMPARTIDAS (se cargan en todas las páginas)
   - esc(): evita que un texto rompa el HTML
   - createProjectCard(): equivale a ProjectCard.tsx
   - initReveal(): equivale a useReveal.ts (animación al hacer scroll)
   - initMenu(): equivale al estado menuOpen de SiteHeader.tsx
   ========================================================= */

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function createProjectCard(project, index, large = false) {
  const card = document.createElement("a");
  card.className = "project-card" + (large ? " project-card--large" : "");
  card.href = projectHref(project);
  card.setAttribute("aria-label", `Abrir proyecto ${project.title}`);
  card.setAttribute("data-reveal", "");

  const position = project.objectPosition
    ? ` style="object-position: ${esc(project.objectPosition)}"`
    : "";
  const alt = `Proyecto ${project.title} de ${project.artist}`;

  card.innerHTML =
    `<div class="project-card__image">` +
    `<img src="${esc(project.image)}" alt="${esc(alt)}"${position} />` +
    `<span class="project-card__open">VER PROYECTO ↗</span>` +
    `</div>` +
    `<div class="project-card__meta">` +
    `<span class="mono">[${String(index + 1).padStart(2, "0")}]</span>` +
    `<div><h3>${esc(project.title)}</h3><p>${esc(project.artist)}</p></div>` +
    `<div class="project-card__side mono">` +
    `<span>${esc(project.category)}</span><span>${esc(project.year)}</span>` +
    `</div>` +
    `</div>`;

  return card;
}

/* Animación de aparición: añade la clase "is-revealed" cuando el elemento entra en pantalla.
   Se puede llamar varias veces: solo observa los elementos que aún no se han mostrado. */
let revealObserver = null;

function initReveal() {
  const elements = document.querySelectorAll("[data-reveal]:not(.is-revealed)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-revealed"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
  }

  elements.forEach((element) => revealObserver.observe(element));
}

/* Botón MENÚ + / CERRAR × en móvil */
function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "CERRAR ×" : "MENÚ +";
  });
}

initMenu();
initReveal();
