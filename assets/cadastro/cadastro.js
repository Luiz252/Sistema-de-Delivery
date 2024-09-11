// Selecionando o ícone e o campo de senha
const toggleSenha = document.querySelector('#toggleSenha');
const senha = document.querySelector('#senha');

// Selecionando o ícone e o campo de confirmação de senha
const toggleConfirmaSenha = document.querySelector('#toggleConfirmaSenha');
const confirmaSenha = document.querySelector('#confirma-senha');

// Função para alternar a visualização da senha
toggleSenha.addEventListener('click', function () {
    // Verifica se o campo está do tipo 'password' e alterna para 'text' ou vice-versa
    const type = senha.getAttribute('type') === 'password' ? 'text' : 'password';
    senha.setAttribute('type', type);

    // Alterna o ícone entre 'olho aberto' e 'olho fechado'
    this.classList.toggle('bi-eye-slash');
    this.classList.toggle('bi-eye');
});

// Função para alternar a visualização da confirmação de senha
toggleConfirmaSenha.addEventListener('click', function () {
    const type = confirmaSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmaSenha.setAttribute('type', type);

    // Alterna o ícone entre 'olho aberto' e 'olho fechado'
    this.classList.toggle('bi-eye-slash');
    this.classList.toggle('bi-eye');
});
