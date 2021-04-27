// console.log('JS externo funcionou');
// console.log(document);

// alert('Seja bem vindo!');

// let adulto = confirm('Você tem mais de 18 anos?');

let nomeUsuario = prompt('Qual seu nome?'); //retorna texto inserido pelo usuario
console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario');
elementHeader.innerText = `Olá, ${nomeUsuario}`;

let logo = document.getElementById('logo');
console.log(logo);

// logo.style.color = "orange";

const nightMode = document.getElementById('night-mode')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')
});

setTimeout(() => {
  document.querySelector('.modal').style.display = "flex";
}, 5000)

const btnClose = () => {
  document.querySelector('.modal').style.display = "none";
}

// document.querySelector("#btn-submit-contact").addEventListener("click",(evento) => {
//    evento.preventDefault();

//    let nomeValue = document.querySelector("#input_nome").value;
//    let emailValue = document.querySelector("#input_email").value;

//    console.log(nomeValue);
//    console.log(emailValue);

//    //validação dos campos
//    //exibição de mensagem de erros
//    //envio do formulário
// })

let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) => {
  //interrompo o envio do formulário
  evento.preventDefault();
  
  //validar se todos os campos estão preenchidos
  // 
})