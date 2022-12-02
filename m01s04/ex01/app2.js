var userInput = prompt('Introdu-ti numele:');

var message = '';
var number = Number(userInput);

var message01 = document.getElementById('mess01');
var message02 = document.getElementById('mess02');
var message03 = document.getElementById('mess03');

var specials = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

const pluralize = (count, { one, many }) => {
  return `${count} ${count > 1 ? many : one}`;
};
// preluat din cursul de react :)

if (userInput.trim().length === 0 || number || userInput.match(specials)) {
  message = 'Nu ai introdus un nume valid!';
  message02 = '';
  message03 = '';
} else {
  message = `Numele meu este ${userInput}.`;
}

message01.innerText = message;

message02.innerText = `Numele introdus are ${
  userInput.replaceAll(' ', '').length
} caractere.`;

if (userInput.includes('a' || 'A')) {
  var countLetter = userInput.match(/[aA]/g).length;
  message03.innerText = `Numele introdus, ${userInput}, contine ${pluralize(
    countLetter,
    {
      one: 'litera',
      many: 'litere',
    },
  )} "a".`;
} else {
  message03.innerText = `Numele introdus, ${userInput}, 'nu contine'
  } litera "a".`;
}
