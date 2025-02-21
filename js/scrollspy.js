document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section'); // Usa il tag <section> per le sezioni o personalizza
  const navLinks = document.querySelectorAll('#project-index a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeSectionId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${activeSectionId}`);
        });
      }
    });
  }, {
    threshold: 0.4 // Cambia il valore se necessario (quanto della sezione deve essere visibile per essere considerata attiva)
  });

  sections.forEach((section) => observer.observe(section));
});

