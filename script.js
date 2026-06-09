/* TechCrest Inc. — script.js */

/* ── Scroll fade-in ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((el, i) => {
    if (el.isIntersecting) {
      setTimeout(() => el.target.classList.add('visible'), i * 55);
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Mobile nav toggle ── */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('open');
      navToggle.textContent = '☰';
    }
  });
}

/* ── Active nav link ── */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && (href === currentPage || href.includes(currentPage))) {
    link.classList.add('active');
  }
});

/* ── Contact form ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Message sent!';
      btn.style.background = 'var(--teal)';
      form.reset();
    }, 1200);
  });
}
