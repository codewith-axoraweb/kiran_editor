/* KIRAN Portfolio - Main Script */

document.addEventListener('DOMContentLoaded', function () {
  // Navbar scroll effect
  const navbar = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Close mobile menu on link click
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const bsCollapse = navbarCollapse ? new bootstrap.Collapse(navbarCollapse, { toggle: false }) : null;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // Also close on Hire Me in navbar
  const navHireBtn = document.querySelector('.navbar .btn-hire');
  if (navHireBtn) {
    navHireBtn.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  }

  // Fade-in on scroll
  const fadeElements = document.querySelectorAll('.skill-card, .work-card, .about-card, .contact-wrapper');
  fadeElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(el => observer.observe(el));
});
