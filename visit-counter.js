(function() {
  'use strict';

  function displayCounter() {
    const container = document.getElementById('visit-counter');
    if (!container) return;

    const url = 'https://portafolioofc.goatcounter.com/counter/TOTAL.json';

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('No se pudo acceder a GoatCounter');
        return response.json();
      })
      .then(data => {
        // Formateamos el número para que sea legible
        container.textContent = data.count.toLocaleString('es-ES');
      })
      .catch(error => {
        console.error('Error al cargar el contador:', error);
        container.textContent = '...';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayCounter);
  } else {
    displayCounter();
  }
})();
