// Animation when scroll into view
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature) => {
      const rect = feature.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        feature.classList.add('show');
      }
    });
  });
  