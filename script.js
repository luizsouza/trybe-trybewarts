const buttonEnviar = document.querySelector('.buttonSend');
const btnSendForm = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const text = document.getElementById('textarea');
const span = document.getElementById('counter');

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

function habilitar() {
  if (agree.checked) {
    btnSendForm.disabled = false;
  } else {
    btnSendForm.disabled = true;
  }
}

agree.addEventListener('click', habilitar);

buttonEnviar.addEventListener('click', autenticationLogin);

function contar() {
  const limite = 500;
  let digitados = 0;

  digitados += 1;
  const restantes = limite - digitados;
  span.innerHTML = restantes;
}

text.addEventListener('keydown', contar);
