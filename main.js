// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if(href === path || (path === '' || path === 'index.html') && href === 'index.html') {
    a.classList.add('active');
  }
});
