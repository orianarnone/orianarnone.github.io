document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#filter-buttons button");
  const projects = document.querySelectorAll("#projects .project-card");
  const activeFilters = new Set();

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Attiva/disattiva il filtro
      if (activeFilters.has(filter)) {
        activeFilters.delete(filter);
        button.classList.remove("active"); // Opzionale: stile per pulsanti attivi
      } else {
        activeFilters.add(filter);
        button.classList.add("active"); // Opzionale: stile per pulsanti attivi
      }

      // Mostra/nasconde i progetti
      projects.forEach(project => {
        const projectTags = project.getAttribute("data-tags").split(",");

        // Se almeno uno dei tag corrisponde, il progetto è visibile
        if ([...activeFilters].some(filter => projectTags.includes(filter)) || activeFilters.size === 0) {
          project.classList.remove("d-none");
        } else {
          project.classList.add("d-none");
        }
      });
    });
  });
});
