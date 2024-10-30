
window.onload = function() {
   setTimeout(function() {
      document.getElementById('intro-animation').style.display = 'none';
      document.getElementById('main-login').style.display = 'flex';
      document.body.classList.remove('no-scroll');
   }, 6000); // Aumentei para 8 segundos para coincidir com a animação
};


 