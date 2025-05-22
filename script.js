function scrollBy(dir) {
  const width = window.innerWidth;
  document.querySelector('.carousel').scrollBy({ left: dir * width, behavior: 'smooth' });
}

// TODO: Add scroll-triggered blur and entry animations via Intersection Observer
// TODO: Integrate form webhook logic here