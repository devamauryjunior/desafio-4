const email = document.querySelector('#correio');
const showEmail = document.querySelector('#showemail');
const password = document.querySelector('#senha');
const showSenha = document.querySelector('#showsenha');
const radio = document.querySelector('#bolinha');

function changeRadio() {
    radio.checked = false;
}

function checkEmail() {
    // quando fazer outro projeto de validação de email e senha colocar uma
    // validação que vai ser para contar quantos caracteres antes do .com
    const valueEmail = email.value;
    const check = (valueEmail.toLowerCase().includes('@') && valueEmail.toLowerCase().includes('.com')) || (valueEmail.toLowerCase().includes('@') && valueEmail.toLowerCase().includes('aluno.ifnmg.edu.br'));

    showEmail.classList.toggle('show');

    switch(check) {
        case true:
            showEmail.style.color = "green";
            showEmail.textContent = `Email validado`;
            break;
        case false:
            showEmail.style.color = "red";
            showEmail.textContent = `Digite o email correto`;
            break;
        default:
            showEmail.style.color = "red";
            showEmail.textContent = `[Error] email esquisito`;
            break;
    }
}

function checkPassword() {
    const valuePassword = password.value;
    const arrayPassword = valuePassword.split('');
    const caracteresEspecias = `!@#$%¨&*()-_+=?/;:|.[]{}<>"^~`;
    const upperCaracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');
    const arr = caracteresEspecias.split('');
    let countElementEspecial = 0;
    let countLettersUpperCase = 0;
    arrayPassword.forEach(element => {
        arr.forEach(item => {
            if(item == element) {
                countElementEspecial++;
            }
        })
        upperCaracteres.forEach(letter => {
            if(letter == element) {
                countLettersUpperCase++;
            }
        })
    });
    showSenha.classList.toggle('show');
    if(valuePassword.length < 7) {
        showSenha.style.color = "red";
        showSenha.textContent = `Digite 7 ou mais caracteres.`;
    } else {
        if(countElementEspecial === 0) {
            showSenha.style.color = "orange";
            showSenha.textContent = ``;
            showSenha.textContent += `Digite pelo menos 1 caractere especial.`;
        } else if(countLettersUpperCase === 0) {
            showSenha.style.color = "blue";
            showSenha.textContent = ``;
            showSenha.textContent += `Coloque pelo menos 1 letra maiúscula.`;
        } else {
            showSenha.style.color = "green";
            showSenha.textContent = ``;
            showSenha.textContent += `Senha ideal, show de bola!`;
        }
    }

}

export const myFunction = {
    meuEmail: checkEmail,
    minhaSenha: checkPassword,
    bolinha: changeRadio
}
