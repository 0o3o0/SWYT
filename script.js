function scrollCarousel(dir) {
  const width = window.innerWidth;
  document.querySelector('.carousel').scrollBy({ left: dir * width, behavior: 'smooth' });
}

// Intersection Observer for scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      entry.target.classList.remove('opacity-0', 'blur-lg');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Floating background handled via CSS only
