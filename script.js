// script.js
import { initMenuToggle } from './src/js/nav.js';
import { initTestimonials } from './src/js/testimonials.js';
// Inicializa as funcionalidades quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
initMenuToggle();

initTestimonials();
});