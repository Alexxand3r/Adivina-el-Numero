'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'EXCELENTE! ACERTASTE!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //cuando no hay entrada

  if (!guess) {
    //   document.querySelector('.message').textContent =
    //      ' ⚠  No ingresaste numero! 😑';
    displayMessage(' ⚠  No ingresaste numero! 😑');

    // cuando el jugador coloca un numero mayor a 20
  } else if (guess > 20) {
    displayMessage('⚠ el numero debe ser entre 1 y 20! 😑');

    //cuando el jugador gana
  } else if (guess === secretNumber) {
    //  document.querySelector('.message').textContent =
    //  '🎉 🎉 Bien,Adivinaste el numero! 🏆';

    displayMessage('🎉 🎉 Bien,Adivinaste el numero! 🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //cuando la respuesta es incorrecta
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '❌ El numero es muy alto! 😛 '
          : '❌ El numero es muy bajo! 😛 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //  document.querySelector('.message').textContent = '🤣 Perdiste! 😅';
      displayMessage('🤣 Perdiste! 😅');
      document.querySelector('body').style.backgroundColor = '#cf0202';
      document.querySelector('.score').textContent = 0;
    }
  }
  //el numero elegido es muy alto
  /* } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '❌ El numero es muy alto! 😛 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣 Perdiste! 😅';
      document.querySelector('body').style.backgroundColor = '#cf0202';
      document.querySelector('.score').textContent = 0;
    }
    //el numero elegido es muy bajo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '❌ El numero es muy bajo! 😛 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤣 Perdiste! 😅';
      document.querySelector('body').style.backgroundColor = '#cf0202';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

//botón de reinicio
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Comienza!😁';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
