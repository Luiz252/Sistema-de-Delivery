window.onload = function() {
    // Esconde a animação de introdução após 3 segundos
    setTimeout(function() {
       document.getElementById('intro-animation').style.display = 'none';
       document.getElementById('main-login').style.display = 'flex';
    }, 6000); 
 };
 