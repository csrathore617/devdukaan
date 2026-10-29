export function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
}
