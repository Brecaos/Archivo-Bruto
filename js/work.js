/* =========================================================
   Página de proyecto (equivale a WorkPage.tsx)
   Lee ?modulo=3 de la URL y rellena la página con ese proyecto.
   ========================================================= */
(() => {
  const requested = Number(new URLSearchParams(window.location.search).get("modulo"));
  const index =
    Number.isInteger(requested) && requested > 0 && requested <= projects.length
      ? requested - 1
      : 0;

  const project = projects[index];
  // Sin bucle: el primer proyecto no tiene "anterior" y el último no tiene "siguiente"
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const setText = (id, text) => {
    document.getElementById(id).textContent = text;
  };

  setText("detail-number", project.id);
  setText("detail-eyebrow", `${project.category} / ${project.year}`);
  setText("detail-title", project.title);
  setText("detail-artist", project.artist);
  setText("detail-year", project.year);
  setText("detail-city", project.city);
  setText("detail-category", project.category);
  setText("detail-description", project.description);

  const image = document.getElementById("detail-image");
  image.src = project.image;
  image.alt = project.title;
  if (project.objectPosition) image.style.objectPosition = project.objectPosition;

  // Rellena el enlace si existe ese proyecto; si no, oculta todo su bloque (título incluido)
  const setupNav = (name, target) => {
    const item = document.getElementById(`${name}-project-item`);
    item.hidden = !target;
    if (!target) return;
    document.getElementById(`${name}-project-link`).href = projectHref(target);
    setText(`${name}-project-title`, target.title);
  };

  setupNav("prev", prev);
  setupNav("next", next);

  initReveal();
})();