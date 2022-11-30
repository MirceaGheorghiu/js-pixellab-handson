var person = {
  firstName: 'George',
  lastName: 'Boole',
  email: 'georgeboole@true.com',
  birthYear: 1815,
  pets: [
    {
      name: 'Tom',
      species: 'pisica',
      age: 3,
    },
    {
      name: 'Spike',
      species: 'caine',
      age: 4,
    },
    {
      name: 'Tweety',
      species: 'canar',
      age: 1,
    },
  ],
  zipCode: '010101',
};

var year = new Date();
var difference = year.getFullYear() - person.birthYear - person.pets[0].age;

var petName = person.pets[0].name;

var differencePetsAge = person.pets[0].age - person.pets[2].age;
var catBirthYear = year.getFullYear() - person.pets[0].age;
var dogBirthYear = year.getFullYear() - person.pets[1].age;
var canaryBirthYear = year.getFullYear() - person.pets[2].age;

var prop01 = document.getElementById('prop01');
var prop02 = document.getElementById('prop02');
var prop03 = document.getElementById('prop03');
var prop04 = document.getElementById('prop04');

console.warn(`
Afiseaza propozitia:
“Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.”.
Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`
Afiseaza propozitia: “Am acelasi email din copilarie: ${person.email}.”.
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`
Afiseaza propozitia: “Unul din cele ${person.pets.length}
animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`
Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
`);
console.log((year.getFullYear() - person.pets[2].age).toString());

console.warn(`
Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana
si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
console.log(difference.toString());

console.warn(`
Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
Afiseaza propozitia: “Intre ${person.firstName} si ${petName}
este o diferenta de ${difference} ani.”.
`);
// hilarious sentence :))
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

prop01.innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
prop02.innerText = `Diferenta de varsta dintre ${petName} si ${person.pets[2].name} este de ${differencePetsAge} ani.`;
prop03.innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;
prop04.innerText = `Animalele mele s-au nascut in ${canaryBirthYear}, ${dogBirthYear}, respectiv ${canaryBirthYear}.`;
