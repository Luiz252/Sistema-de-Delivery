if (localStorage.getItem("token") == null) {
    alert("você está logado para acessar essa página");
  
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#Logado");
logado.innerHTML = `Olá ${userLogado.name}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");

     
}