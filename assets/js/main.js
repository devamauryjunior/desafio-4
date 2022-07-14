import { myFunction } from "./validacao.js";

function validar() {
    myFunction.meuEmail();
    myFunction.minhaSenha();
}
function mudarRadio() {
    radio.checked = myFunction.bolinha();
}
const getButtonSubmit = document.querySelector('#button');
const radio = document.querySelector('#bolinha');
getButtonSubmit.addEventListener('click', validar);
radio.addEventListener('click', mudarRadio);