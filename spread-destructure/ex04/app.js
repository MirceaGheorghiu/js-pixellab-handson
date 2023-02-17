/**
 * In fisierul app.js Ben ar trebui sa aiba 29 de ani iar Larry 20,
 * folosind operatorul spread, creaza obiecte de tipul fullPerson1 si fullPerson2
 * care sa reflecte acest lucru
 * Folosind noul obiect fullPerson2 creaza intr-un obiect numit fullPerson3
 * cu numele de familie al lui Ben care sa aibe 24 de ani.
 */

let person1 = {
  name: 'Larry',
  surname: 'Larryson',
};

let person2 = {
  name: 'Ben',
  surname: 'Benson',
};

let age1 = {
  age: 20,
};

const fullPerson1 = {
  ...person1,
  ...age1,
};
console.log(fullPerson1);

const fullPerson2 = {
  ...person2,
  age: 29,
};
console.log(fullPerson2);

const { surname: fullPerson2Surname } = fullPerson2;
const fullPerson3 = {
  fullPerson2Surname,
  age: 24,
};
console.log(fullPerson3);
