document.addEventListener('DOMContentLoaded', () => {
  function scrollCarousel(dir) {
    const width = window.innerWidth;
    document.querySelector('.carousel').scrollBy({ left: dir * width, behavior: 'smooth' });
  }
  window.scrollCarousel = scrollCarousel;

  // Intersection Observer for scroll-triggered animations with lower threshold
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('Intersecting:', entry.target, entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        entry.target.classList.remove('opacity-0', 'blur-lg');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

// Floating background handled via CSS only
```
