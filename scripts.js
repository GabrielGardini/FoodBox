let prato;
let bebida;
let sobremesa;
let preçoPrato;
let preçoBebida;
let preçoSobremesa;

function escolherFrango() {
  document.getElementById("frango").style.borderColor = "#0b940b";
  document.getElementById("carne").style.borderColor = "white";

  prato = "Frango Yin-Yang";
  preçoPrato = 19.9;
}

function escolherCarne() {
  document.getElementById("carne").style.borderColor = "#0b940b";
  document.getElementById("frango").style.borderColor = "white";
  prato = "Carne e salada";
  preçoPrato = 24.9;
}

function escolherCoca() {
  document.getElementById("coca").style.borderColor = "#0b940b";
  document.getElementById("refresco").style.borderColor = "white";
  bebida = "Coca-cola gelada";
  preçoBebida = 5.9;
}
function escolherRefresco() {
  document.getElementById("refresco").style.borderColor = "#0b940b";
  document.getElementById("coca").style.borderColor = "white";
  bebida = "Refresco";
  preçoBebida = 3.9;
}

function escolherPudim() {
  document.getElementById("pudim").style.borderColor = "#0b940b";
  document.getElementById("sorvete").style.borderColor = "white";
  sobremesa = "Pudim";
  preçoSobremesa = 7.9;
}
function escolherSorvete() {
  document.getElementById("sorvete").style.borderColor = "#0b940b";
  document.getElementById("pudim").style.borderColor = "white";
  sobremesa = "Sorvete bem gelado";
  preçoSobremesa = 6.9;
}
function finalizarPedido() {
  let mensagem;
  let preço;
  let total;
  preço = preçoPrato + preçoBebida + preçoSobremesa;
  total = preço.toFixed(2);
  mensagem =
    "Olá, gostaria de pedir um combo: " +
    prato +
    ", " +
    bebida +
    " e " +
    sobremesa +
    " por R$ " +
    total;
  window.open("https://wa.me/+5521999999999?text=" + mensagem);
}
