// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for in-page anchors
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof Element && target.matches('a[href^="#"]')) {
    const href = target.getAttribute('href');
    if (!href) return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navMenu && navMenu.classList.contains('open')) navMenu.classList.remove('open');
    }
  }
});

// Reveal on scroll (simple IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .card, .feature, .hero-copy, .hero-media').forEach((el) => {
  el.setAttribute('data-animate', '');
  observer.observe(el);
});

// Contact form handling (client-side only)
const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = form.querySelector('.form-success');
    if (success) {
      success.hidden = false;
    }
    form.reset();
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}


