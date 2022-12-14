var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
const petKeys = Object.keys(person.pets);
petKeys.forEach((key) => {
  const pet = person.pets[key];
  console.log(pet.name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
let sumPetsAge = 0;
petKeys.forEach((key) => {
  const pet = person.pets[key];
  sumPetsAge += pet.age;
});
console.log(sumPetsAge);

console.warn(`
Folosind forEach() afiseaza cate una pe linie propozitiile:
“Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
petKeys.forEach((key) => {
  const pet = person.pets[key];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
Folosind o bucla for afiseaza cate una pe linie propozitiile:
“Intre ${person.firstName} si Twix este o diferenta de xx ani. Intre ${person.firstName} si Mars… ”
(repeta pentru toate intrarile din array).
`);
let currentYear = new Date().getFullYear();
petKeys.forEach((key) => {
  const pet = person.pets[key];
  const diff = currentYear - person.birthYear - pet.age;

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${diff} ani.`,
  );
});

console.warn(`
Folosind o bucla for afiseaza in ordine inversa
numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
// aici cerinta din slide e cu "." la finalul propozitiei, iar in Pixeltab e fara
petKeys
  .slice()
  .reverse()
  .forEach((key) => {
    const pet = person.pets[key];

    console.log(`Animalul meu se numeste ${pet.name}`);
  });

console.warn(`
Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
“xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);
let arr = [];
petKeys.forEach((key) => {
  const pet = person.pets[key];
  arr.push(pet.age);
});
petKeys.forEach((key) => {
  const pet = person.pets[key];

  if (Math.max(...arr) === pet.age) {
    const diff = currentYear - person.birthYear - pet.age;
    console.log(
      `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${diff} ani.`,
    );
  }
});

console.warn(`
Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
let message = 'Am ';
petKeys.forEach((key, index) => {
  const pet = person.pets[key];
  let punctuation = ', ';

  if (index === person.pets.length - 1) {
    punctuation = '.';
  }

  if (index === person.pets.length - 2) {
    punctuation = ' si ';
  }

  message += `${pet.species}${punctuation}`;
});
console.log(message);
