const buttonEnviar = document.querySelector('.buttonSend');
const btnSendForm = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const areaText = document.getElementById('textarea');


function autenticationLogin(botao) {
  botao.preventDefault();
  const emailImput = document.querySelector('.inputEmail').value;
  const passwordImput = document.querySelector('.inputPassword').value;
  if (emailImput === 'tryber@teste.com' && passwordImput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEnviar.addEventListener('click', autenticationLogin);

function habilitar() {
  if (agree.checked) {
    btnSendForm.disabled = false;
  } else {
    btnSendForm.disabled = true;
  }
}

agree.addEventListener('click', habilitar);

function contadorDeCarateresRestantes() {
  const maxLength = JSON.parse(areaText.getAttribute('maxlength'));
  let currentLength = areaText.value.length;
  let caracteresAtuais = maxLength - currentLength;
  document.getElementById('counter').innerText = caracteresAtuais;
}

areaText.addEventListener('input', contadorDeCarateresRestantes);
