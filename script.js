const buttonEnviar = document.querySelector('.buttonSend');
const btnSendForm = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const areaText = document.getElementById('textarea');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');

const formulario = document.querySelector('#evaluation-form');

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

function enviaFormulario() {
  console.log('Nome: ' + nome.value);
  console.log('Sobrenome: ' + sobrenome.value);
  const familia = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  formulario.innerHTML = 
  '<p>Nome: ' + nome.value + ' ' + sobrenome.value + '</p>' + 
  '<p>Email: ' + email.value + '</p>' +
  '<p>Casa: ' + casa.value + '</p>' +
  '<p>Família: ' + familia + '</p>' +
  '<p>Matérias: Matérias, Marcadas, Aqui</p>' +
  '<p>Avaliação: ' + rate + '</p>' +
  '<p>Observações: ' + areaText.value + '</p>'
  ;
}

btnSendForm.addEventListener('click', (e) => {
  e.preventDefault();
  enviaFormulario();
});
