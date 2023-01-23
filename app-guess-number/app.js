const guessForm = document.querySelector('.guess-form');
const guessInput = document.querySelector('.guess-input');
const result = document.querySelector('.result');
const resetButton = document.querySelector('.reset-button');

let generatedNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

guessForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const guess = guessInput.value;

  attempts++;

  if (guess < generatedNumber) {
    result.textContent = 'Too low! :( Try again...';
  } else if (guess > generatedNumber) {
    result.textContent = 'Too high! :( Try again...';
  } else {
    result.textContent = `CONGRATS !!! YOU GUESSED THE CORRECT NUMBER - ${generatedNumber} - AFTER ${attempts} ATTEMPTS !!!`;
  }

  if (guess < 1 || guess > 100) {
    result.textContent = 'Please, enter a number between 1 and 100!';
  }

  if (guess === '') {
    result.textContent = 'Please, enter a valid number!';
  }

  guessInput.value = '';
});

resetButton.addEventListener('click', () => {
  guessInput.value = '';
  result.textContent = '';
});
