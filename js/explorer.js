/* =========================================================
   EXPLORADOR DE PROYECTOS (filtros + buscador)
   Equivale a ProjectExplorer.tsx. Lo usan archivo.html y
   categorias.html (cuando hay ?categoria=... en la URL).
   ========================================================= */

function initExplorer({ defaultTitle, categoryMode = false, initialFilter = "TODO" }) {
  const titleEl = document.getElementById("explorer-title");
  const countEl = document.getElementById("result-count");
  const filtersEl = document.getElementById("filters");
  const searchEl = document.getElementById("search-input");
  const gridEl = document.getElementById("archive-grid");
  const emptyEl = document.getElementById("empty-state");

  let activeFilter = initialFilter;
  let search = "";

  // Las tarjetas se crean una sola vez y se reutilizan al filtrar,
  // así las que ya aparecieron no vuelven a animarse.
  const cards = new Map(projects.map((project, index) => [project.id, createProjectCard(project, index)]));

  // Botones de filtro (en modo categoría no existe el botón TODO)
  const filterNames = categoryMode ? categories : ["TODO", ...categories];
  const buttons = filterNames.map((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = name;
    button.addEventListener("click", () => changeFilter(name));
    filtersEl.append(button);
    return button;
  });

  function changeFilter(filter) {
    activeFilter = filter;
    render();

    // En modo categoría, la URL se actualiza sin recargar la página.
    // Va en try/catch porque algunos navegadores bloquean esto al abrir el archivo con file://
    if (categoryMode && filter !== "TODO") {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("categoria", categoryToSlug(filter));
        window.history.replaceState({}, "", url);
      } catch (error) {
        // No pasa nada: el filtro funciona igual, solo no cambia la barra de direcciones
      }
    }
  }

  function render() {
    const query = search.trim().toLowerCase();

    const visible = projects.filter((project) => {
      const matchesFilter = activeFilter === "TODO" || project.category === activeFilter;
      const matchesSearch =
        !query ||
        `${project.title} ${project.artist} ${project.category} ${project.city}`
          .toLowerCase()
          .includes(query);
      return matchesFilter && matchesSearch;
    });

    titleEl.textContent = categoryMode && activeFilter !== "TODO" ? activeFilter : defaultTitle;
    countEl.textContent = `${String(visible.length).padStart(3, "0")} RESULTADOS`;
    buttons.forEach((button) => button.classList.toggle("active", button.textContent === activeFilter));

    gridEl.replaceChildren(...visible.map((project) => cards.get(project.id)));
    gridEl.hidden = visible.length === 0;
    emptyEl.hidden = visible.length > 0;

    initReveal();
  }

  searchEl.addEventListener("input", (event) => {
    search = event.target.value;
    render();
  });

  render();
}
