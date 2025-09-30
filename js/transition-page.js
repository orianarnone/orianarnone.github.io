window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  // 1. Ensure the transition is removed when the new page loads
  setTimeout(() => {
    if (transition_el) {
      transition_el.classList.remove('is-active');
    }
  }, 100);

  // 2. Loop through all anchor elements
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      // Get the raw href attribute value
      const rawHref = anchor.getAttribute('href');
      
      // Skip empty hrefs, hash links (e.g., #section-id), or mailto links
      if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('javascript:')) {
        return; 
      }
      
      // Prevent the default navigation immediately
      e.preventDefault(); 
      
      // Get the full URL for the transition logic
      let target = e.currentTarget.href;

      // Add the transition class
      if (transition_el) {
        transition_el.classList.add('is-active');
      }

      // After a short delay, navigate to the new page
      setTimeout(() => {
        window.location.href = target;
      }, 100);
    });
  }
}