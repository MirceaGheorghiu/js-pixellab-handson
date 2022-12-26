// Generate a random number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

// Prompt the user to guess the number
let guess = prompt('Guess a number between 1 and 100');

// Keep track of the number of guesses
let numGuesses = 1;

// Keep prompting the user to guess until they get it right
while (guess != target) {
  if (guess < target) {
    alert('Your guess is too low. Try again!');
  } else {
    alert('Your guess is too high. Try again!');
  }

  guess = prompt('Guess a number between 1 and 100');
  numGuesses++;
}

// Alert the user that they guessed the right number
alert('You guessed the right number in ' + numGuesses + ' guesses!');
