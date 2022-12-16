// Adauga un buton nou in document cu id-ul query
// si folosind addEventListener() ataseaza un eveniment
// care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
// Salveaza rezultatul metodei prompt intr-o variabila
// si afiseaza in consola folosind template strings: “Ai aa ani.”.

// Creaza un paragraf cu idul message si folosind getElementById(‘message’)
// stocheaza elementul intr-o variabila (paragraphElement),
// apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

const button = document.getElementById('query');
const paragraphElement = document.getElementById('message');

function inputAge() {
  const age = prompt('Introdu-ti varsta!');

  console.log(`Ai ${age} ani.`);

  paragraphElement.innerText = `Ai ${age} ani.`;
}

button.addEventListener('click', inputAge);
