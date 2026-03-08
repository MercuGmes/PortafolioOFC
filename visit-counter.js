(function() {
  'use strict';

  // Detectar si es bot
  function isBot() {
    var botPatterns = [
      /bot/i, /crawler/i, /spider/i, /scraper/i, /curl/i, /wget/i,
      /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i, /baiduspider/i,
      /yandexbot/i, /facebookexternalhit/i, /whatsapp/i, /telegram/i,
      /twitterbot/i, /linkedinbot/i, /applebot/i, /semrushbot/i, /ahrefs/i,
      /mj12bot/i, /dotbot/i, /uptimebot/i, /monitorbot/i, /pingdom/i
    ];
    
    var ua = navigator.userAgent || '';
    return botPatterns.some(function(pattern) {
      return pattern.test(ua);
    });
  }

  // No contar bots
  if (isBot()) {
    return;
  }

  // Función para registrar visita
  function recordVisit() {
    // Usar CountAPI - API gratuita sin autenticación
    var namespace = 'aaron-portfolio';
    var key = 'visits';
    var url = 'https://api.countapi.xyz/hit/' + namespace + '/' + key;

    // Hacer la petición
    if (navigator.sendBeacon) {
      // Usar sendBeacon si está disponible (más confiable)
      navigator.sendBeacon(url);
    } else {
      // Fallback a fetch
      fetch(url, { method: 'GET', mode: 'no-cors' })
        .catch(function() {
          // Silencioso si falla
        });
    }
  }

  // Función para obtener y mostrar el contador
  function displayCounter() {
    var containerId = 'visit-counter';
    var container = document.getElementById(containerId);
    
    if (!container) {
      return;
    }

    var namespace = 'aaron-portfolio';
    var key = 'visits';
    var url = 'https://api.countapi.xyz/get/' + namespace + '/' + key;

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var count = data.value || 0;
        container.textContent = count.toLocaleString('es-ES');
      })
      .catch(function() {
        // Si falla, mostrar un valor por defecto
        container.textContent = '...';
      });
  }

  // Registrar visita al cargar (solo humanos)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      recordVisit();
      setTimeout(displayCounter, 500);
    });
  } else {
    recordVisit();
    displayCounter();
  }
})();
