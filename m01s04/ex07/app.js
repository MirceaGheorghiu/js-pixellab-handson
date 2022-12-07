var friends = [
  {
    name: 'Nylon',
    surname: 'Windbreaker',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

var i;
var friendsLength = friends.length;

console.warn(`
  Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.
`);
for (i = 0; i < friendsLength; i++) {
  console.log(friends[i].surname);
}

console.warn(`
Afiseaza numele complet inversat al tuturor prietenilor, insa o data ce l-ai gasit pe steven,
opreste bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
`);
for (i = 0; i < friendsLength; i++) {
  var person = friends[i];

  if (person.name === 'Steven') {
    console.log(`M-am oprit la ${person.surname} ${person.name}.`);

    break;
  }

  console.log(`${person.surname} ${person.name}`);
}

console.warn(`
Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
doar daca numarul de caractere total al numelor lor este mai mare de 13 sub forma de propozitii
“Prenume Nume are mai mult de 13 caractere.”.
`);
for (i = 0; i < friendsLength; i++) {
  var person = friends[i];
  var concatenatedName = person.surname + person.name;

  if (concatenatedName.length <= 13) {
    continue;
  }

  console.log(`${person.surname} ${person.name} are mai mult de 13 caractere.`);
}

console.warn(`
Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.
`);
for (i = 0; i < friendsLength; i++) {
  console.log(friends[i].name);
}

console.warn(`
Afiseaza numele complet al tuturor prietenilor.
`);
for (i = 0; i < friendsLength; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

console.warn(`
Folosind keywordul break, afiseaza numele complet al prietenilor
dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9
si afiseaz-l intr-o propozitie de forma “M-am oprit la Nume Prenume.”.
`);
for (i = 0; i < friendsLength; i++) {
  console.log(`M-am oprit la ${friends[i].surname} ${friends[i].name}.`);
  if ((friends[i].name + friends[i].surname).length >= 9) {
    break;
  }
}
