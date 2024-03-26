'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number! 🎉')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number found!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high! 📈';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over! 🛑';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low! 📉';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }
});
