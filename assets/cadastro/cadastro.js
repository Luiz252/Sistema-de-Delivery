// Selecionando o ícone e o campo de senha
const toggleSenha = document.querySelector('#toggleSenha');
const senha = document.querySelector('#senha');


const toggleConfirmaSenha = document.querySelector('#toggleConfirmaSenha');
const confirmaSenha = document.querySelector('#confirma-senha');


toggleSenha.addEventListener('click', function () {
   
    const type = senha.getAttribute('type') === 'password' ? 'text' : 'password';
    senha.setAttribute('type', type);

   
    this.classList.toggle('bi-eye-slash');
    this.classList.toggle('bi-eye');
});


toggleConfirmaSenha.addEventListener('click', function () {
    const type = confirmaSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmaSenha.setAttribute('type', type);

    this.classList.toggle('bi-eye-slash');
    this.classList.toggle('bi-eye');
});
