/* Inicio: las 3 tarjetas de "Últimos hallazgos" (equivale a HomePage.tsx) */
(() => {
  const grid = document.getElementById("featured-grid");

  grid.append(
    createProjectCard(projects[0], 0, true),
    createProjectCard(projects[1], 1),
    createProjectCard(projects[2], 2),
  );

  initReveal();
})();
