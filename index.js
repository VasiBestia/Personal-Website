function deruleazaLa(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  const duration = 1000; // milisecunde (1 secundă)
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
