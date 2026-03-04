(function () {
  'use strict';

  var CONTACT_EMAIL = 'aaronmejiavg@gmail.com';

var projects = [
    {
      title: 'Café Cartago',
      desc: 'Landing page para una cafetería local en Cartago. Diseño elegante con menú de productos, secciones informativas y navegación suave.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      tagColors: [
        { bg: 'rgba(227,76,38,0.1)', color: '#e34c26' },
        { bg: 'rgba(38,77,228,0.1)', color: '#264de4' },
        { bg: 'rgba(247,223,30,0.1)', color: '#f7df1e' }
      ],
      gradient: 'linear-gradient(135deg, #1a1408 0%, #2a2010 50%, #0d1117 100%)',
      accentColor: '#d4a24e',
      iconPath: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3',
      link: 'proyecto1/',
      github: 'https://github.com/MercuGmes'
    },
    {
      title: 'FitTrack',
      desc: 'Página web para un gimnasio con planes de precios, horario de clases y estadísticas. Diseño moderno con gradientes y glassmorphism.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      tagColors: [
        { bg: 'rgba(34,211,238,0.1)', color: '#22d3ee' },
        { bg: 'rgba(38,77,228,0.1)', color: '#264de4' },
        { bg: 'rgba(247,223,30,0.1)', color: '#f7df1e' }
      ],
      gradient: 'linear-gradient(135deg, #0a1015 0%, #0f1e2e 50%, #0d1117 100%)',
      accentColor: '#22d3ee',
      iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
      link: 'proyecto2/',
      github: 'https://github.com/MercuGmes'
    },
    {
      title: 'DevNotes',
      desc: 'Aplicación web de notas para desarrolladores con snippets de código, categorías por lenguaje y diseño tipo dashboard profesional.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      tagColors: [
        { bg: 'rgba(167,139,250,0.1)', color: '#a78bfa' },
        { bg: 'rgba(38,77,228,0.1)', color: '#264de4' },
        { bg: 'rgba(247,223,30,0.1)', color: '#f7df1e' }
      ],
      gradient: 'linear-gradient(135deg, #100d1a 0%, #1e1535 50%, #0d1117 100%)',
      accentColor: '#a78bfa',
      iconPath: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
      link: 'proyecto3/',
      github: 'https://github.com/MercuGmes'
    },
    {
      title: 'MercuForge',
      desc: 'Generador de contraseñas seguras con medidor de fortaleza, historial, verificación de filtraciones via API y consejos de seguridad.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      tagColors: [
        { bg: 'rgba(167,139,250,0.1)', color: '#a78bfa' },
        { bg: 'rgba(34,211,238,0.1)', color: '#22d3ee' },
        { bg: 'rgba(247,223,30,0.1)', color: '#f7df1e' }
      ],
      gradient: 'linear-gradient(135deg, #0d0a15 0%, #151025 50%, #0d1117 100%)',
      accentColor: '#a78bfa',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      link: 'proyecto4/',
      github: 'https://github.com/MercuGmes'
    },
    {
      title: 'BookHaven',
      desc: 'Librería online con catálogo interactivo, filtros por género, búsqueda, carrito de compras, wishlist, modal de detalle y ordenamiento dinámico.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      tagColors: [
        { bg: 'rgba(45,106,79,0.12)', color: '#40916c' },
        { bg: 'rgba(34,211,238,0.1)', color: '#22d3ee' },
        { bg: 'rgba(247,223,30,0.1)', color: '#f7df1e' }
      ],
      gradient: 'linear-gradient(135deg, #0a1a12 0%, #0f2618 50%, #0d1117 100%)',
      accentColor: '#40916c',
      iconPath: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z',
      link: 'proyecto5/',
      github: 'https://github.com/MercuGmes'
    },
      {
      title: 'AarText Studio',
      desc: 'Herramienta de texto con limpieza de espacios, conversión de mayúsculas, eliminación de caracteres especiales, vista previa en vivo y contadores animados.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      tagColors: [
        { bg: 'rgba(99,102,241,0.12)', color: '#818cf8' },
        { bg: 'rgba(34,211,238,0.1)', color: '#22d3ee' },
        { bg: 'rgba(247,223,30,0.1)', color: '#f7df1e' }
      ],
      gradient: 'linear-gradient(135deg, #0b0d15 0%, #131540 50%, #0d1117 100%)',
      accentColor: '#818cf8',
      iconPath: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z',
      link: 'proyecto6/',
      github: 'https://github.com/MercuGmes'
    }
  ];

  var viewProjectText = 'Ver proyecto';
  var sourceCodeLabel = 'Código fuente';

  function renderProjects() {
    var grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.map(function (p, i) {
      return '<article class="project-card reveal-up" style="--delay: ' + (0.1 + i * 0.08) + 's">' +
        '<div class="project-image-wrap">' +
          '<div class="project-image-placeholder" style="background: ' + p.gradient + '">' +
            '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="' + p.accentColor + '" stroke-width="1.2" style="opacity:0.7">' +
              '<path d="' + p.iconPath + '" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
            '<span style="font-family:var(--font-mono,monospace);font-size:0.7rem;color:' + p.accentColor + ';opacity:0.6;letter-spacing:0.1em;">' + p.tags[0].toLowerCase() + '</span>' +
          '</div>' +
          '<div class="project-overlay">' +
            '<a href="' + p.link + '" class="project-link-overlay">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>' +
              viewProjectText +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="project-body">' +
          '<div class="project-tags">' +
            p.tags.map(function (t, j) { return '<span class="project-tag" style="background:' + p.tagColors[j].bg + ';color:' + p.tagColors[j].color + '">' + t + '</span>'; }).join('') +
          '</div>' +
          '<h3 class="project-title">' + p.title + '</h3>' +
          '<p class="project-desc">' + p.desc + '</p>' +
          '<div class="project-footer">' +
            '<a href="' + p.link + '" class="project-btn">' +
              viewProjectText +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
            '</a>' +
            '<a href="' + p.github + '" class="project-github" target="_blank" rel="noopener noreferrer" aria-label="' + sourceCodeLabel + '">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12.002-12z"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');

    observeRevealElements();
    initProjectCard3D();
  }

  function initCursor() {
    var cursor = document.getElementById('cursor');
    var trail = document.getElementById('cursorTrail');
    if (!cursor || !trail) return;

    var isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      trail.style.display = 'none';
      return;
    }

    var mx = -100, my = -100;
    var tx = -100, ty = -100;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animateTrail() {
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      trail.style.left = tx + 'px';
      trail.style.top = ty + 'px';
      requestAnimationFrame(animateTrail);
    }
    animateTrail();

    document.querySelectorAll('a, button, .project-card, .about-card, .tool-chip, .social-link, .back-to-top, .nav-lang-link').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.classList.add('hover');
        trail.classList.add('hover');
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('hover');
        trail.classList.remove('hover');
      });
    });

    document.addEventListener('mouseleave', function () {
      cursor.style.opacity = '0';
      trail.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    });
  }

  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    function updateNav() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  function initActiveNavLink() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link[data-section]');
    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.dataset.section === entry.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  function initMobileMenu() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initTypedText() {
    var el = document.getElementById('typedText');
    if (!el) return;

    var phrases = [
      'Desarrollador Web',
      'HTML, CSS & JavaScript',
      'Python Developer',
      'React Developer'
    ];

    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var pauseTimer = null;

    function type() {
      var current = phrases[phraseIndex];

      if (deleting) {
        charIndex--;
        el.textContent = current.substring(0, charIndex);
      } else {
        charIndex++;
        el.textContent = current.substring(0, charIndex);
      }

      var delay = deleting ? 40 : 80;

      if (!deleting && charIndex === current.length) {
        delay = 2200;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
      }

      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(type, delay);
    }

    setTimeout(type, 800);
  }

  function initCounters() {
    var counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.target, 10);
        var duration = 1500;
        var start = performance.now();

        function update(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { observer.observe(c); });
  }

  function observeRevealElements() {
    var elements = document.querySelectorAll('.reveal-up:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  function initSkillBars() {
    var fills = document.querySelectorAll('.skill-fill[data-width]');
    if (!fills.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    fills.forEach(function (fill) { observer.observe(fill); });
  }

  function initProjectCard3D() {
    var cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    var isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        var rotX = dy * -6;
        var rotY = dx * 6;
        card.style.transform = 'perspective(900px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-6px)';
        card.style.transition = 'transform 0.1s ease';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });
  }

  function initAboutCards3D() {
    var cards = document.querySelectorAll('.about-card');
    var isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = 'perspective(600px) rotateX(' + (dy * -4) + 'deg) rotateY(' + (dx * 4) + 'deg) translateY(-4px)';
        card.style.transition = 'transform 0.1s ease';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById('contactForm');
    var success = document.getElementById('formSuccess');
    var submitBtn = document.getElementById('submitBtn');
    if (!form) return;

    var fields = {
      name: { el: document.getElementById('name'), err: document.getElementById('nameError'), validate: function (v) { return v.trim().length >= 2 ? '' : 'Ingresa tu nombre completo.'; } },
      email: { el: document.getElementById('email'), err: document.getElementById('emailError'), validate: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Ingresa un email válido.'; } },
      subject: { el: document.getElementById('subject'), err: document.getElementById('subjectError'), validate: function (v) { return v.trim().length >= 3 ? '' : 'El asunto debe tener al menos 3 caracteres.'; } },
      message: { el: document.getElementById('message'), err: document.getElementById('messageError'), validate: function (v) { return v.trim().length >= 10 ? '' : 'El mensaje debe tener al menos 10 caracteres.'; } }
    };

    Object.values(fields).forEach(function (f) {
      if (!f.el) return;
      f.el.addEventListener('blur', function () { validateField(f); });
      f.el.addEventListener('input', function () {
        if (f.el.classList.contains('error')) validateField(f);
      });
    });

    function validateField(f) {
      var msg = f.validate(f.el.value);
      f.err.textContent = msg;
      f.el.classList.toggle('error', !!msg);
      return !msg;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      Object.values(fields).forEach(function (f) {
        if (!validateField(f)) valid = false;
      });

      if (!valid) return;

      var nameVal = fields.name.el.value.trim();
      var emailVal = fields.email.el.value.trim();
      var subjectVal = fields.subject.el.value.trim();
      var messageVal = fields.message.el.value.trim();

      var mailtoSubject = encodeURIComponent(subjectVal);
      var mailtoBody = encodeURIComponent(
        'Nombre: ' + nameVal + '\n' +
        'Email de contacto: ' + emailVal + '\n\n' +
        messageVal
      );

      var mailtoLink = 'mailto:' + CONTACT_EMAIL + '?subject=' + mailtoSubject + '&body=' + mailtoBody;

      window.location.href = mailtoLink;

      success.classList.add('show');
      setTimeout(function () { success.classList.remove('show'); }, 5000);
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 70;
        var top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  function initPageLoad() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    window.addEventListener('load', function () {
      document.body.style.opacity = '1';
    });
    if (document.readyState === 'complete') {
      document.body.style.opacity = '1';
    }
  }

  function addSpinKeyframe() {
    if (!document.getElementById('spin-style')) {
      var style = document.createElement('style');
      style.id = 'spin-style';
      style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(style);
    }
  }

  function init() {
    addSpinKeyframe();
    initPageLoad();
    renderProjects();
    initCursor();
    initNavbar();
    initActiveNavLink();
    initMobileMenu();
    initTypedText();
    initCounters();
    observeRevealElements();
    initSkillBars();
    initAboutCards3D();
    initContactForm();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
