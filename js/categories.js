/* =========================================================
   Categorías (equivale a CategoriesPage.tsx)
   - Sin ?categoria=...  -> directorio con las 5 categorías
   - Con ?categoria=tipografia -> explorador filtrado
   ========================================================= */
(() => {
  const category = categoryFromSlug(new URLSearchParams(window.location.search).get("categoria"));
  const directoryPage = document.getElementById("category-page");
  const explorerPage = document.getElementById("explorer");

  if (category) {
    directoryPage.hidden = true;
    explorerPage.hidden = false;
    initExplorer({ defaultTitle: category, categoryMode: true, initialFilter: category });
    return;
  }

  const list = document.getElementById("category-directory");

  categories.forEach((name, index) => {
    const items = projects.filter((project) => project.category === name);
    const cover = items[0];
    const position = cover.objectPosition
      ? ` style="object-position: ${esc(cover.objectPosition)}"`
      : "";

    const link = document.createElement("a");
    link.className = "category-directory__item";
    link.href = `./categorias.html?categoria=${categoryToSlug(name)}`;
    link.setAttribute("data-reveal", "");
    link.innerHTML =
      `<div class="category-directory__image">` +
      `<img src="${esc(cover.image)}" alt=""${position} />` +
      `<span class="mono">ENTRAR ↗</span>` +
      `</div>` +
      `<div class="category-directory__content">` +
      `<span class="category-directory__number">0${index + 1}</span>` +
      `<div><h2>${esc(name)}</h2><p>${esc(categoryDescriptions[name])}</p></div>` +
      `<div class="category-directory__meta">` +
      `<span class="mono">${String(items.length).padStart(2, "0")} PROYECTOS</span>` +
      `<span aria-hidden="true" class="arrow arrow--right">→</span>` +
      `</div>` +
      `</div>`;

    list.append(link);
  });

  initReveal();
})();
