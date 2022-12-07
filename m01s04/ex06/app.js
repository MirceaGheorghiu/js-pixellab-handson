var person = {
  name: 'Mircea',
  surname: 'Gheorghiu',
  age: 38,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

var i;
var skillsLength = person.skills.length;
var friendsLength = person.friends.length;

console.warn(`
  Folosind obiectul person si un for,
  afiseaza in consola skillurile de pe pozitiile pare ale arrayului.
  `);
for (i = 0; i < skillsLength; ++i) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`
  In mod similar, afiseaza skillurile care NU incep cu j.
  `);
for (i = 0; i < skillsLength; ++i) {
  var skill = person.skills[i];

  if (skill.startsWith('j') !== true) {
    console.log(skill);
  }
}

console.warn(`
  Folosind un for afiseaza propozitia:
  "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
  `);
var message = 'Prietenii mei se numesc: ';
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // message = message +
  message += `${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(`
Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca varsta este mai mare sau egala cu 30 de ani.
`);
var sumAge = 0;
var year = new Date();
for (i = 0; i < friendsLength; i++) {
  var friendAge = person.friends[i].age;

  if (friendAge >= 30) {
    sumAge += friendAge;
  }
}
console.log(sumAge.toString());

console.warn(`
Folosind un for, afiseaza suma anilor de nastere a persoanelor.
`);
sumBirthAge = 0;
for (i = 0; i < friendsLength; i++) {
  var friendBirthYear = year.getFullYear() - person.friends[i].age;

  sumBirthAge += friendBirthYear;
}
console.log(sumBirthAge.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends
doar daca aceasta este mai mare de 2 ani.
`);
for (i = 0; i < friendsLength; i++) {
  var diffAge = Math.abs(person.age - person.friends[i].age);

  if (diffAge > 2) {
    console.log(diffAge);
  }
}

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
`);
var message = '';
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (friend.age % 2 === 0) {
    continue;
  }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}
console.log(message.trim());

console.warn(`
Folosind proprietatea length a arrayului skills si o bucla for,
afiseaza in ordine inversa elementele arrayului skills.
Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (i = skillsLength - 1; i >= 0; --i) {
  console.log(person.skills[i]);
}

console.warn(`
Folosind obiectul person si un for,
afiseaza in consola skillurile pe care le are persoana
`);
for (i = 0; i < skillsLength; i++) {
  console.log(person.skills[i]);
}

console.warn(`
In mod similar, afiseaza skillurile care incep cu c.
`);
for (i = 0; i < skillsLength; i++) {
  if (person.skills[i].startsWith('c')) {
    console.log(person.skills[i]);
  }
}

console.warn(`
Folosind un for afiseaza propozitia:
"Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
`);
var newMessage = 'Numele de familie ale prietenilor mei sunt: ';
for (i = 0; i < friendsLength; i++) {
  punctuation = ', ';

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  newMessage += `${person.friends[i].surname}${punctuation}`;
}
console.log(newMessage);

console.warn(`
Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends.
`);
sumAge = 0;
for (i = 0; i < friendsLength; i++) {
  sumAge += person.friends[i].age;
}
console.log(sumAge.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);
for (i = 0; i < friendsLength; i++) {
  console.log(Math.abs(person.age - person.friends[i].age));
}

console.warn(`
Afiseaza fraza: "Intre ${person.name} si Larry este o diferenta de xx ani.
Intre ${person.name} si Steven... ". Repeta pentru tot arrayul friends.
`);
message = '';
for (i = 0; i < friendsLength; i++) {
  message += `Intre ${person.name} si ${
    person.friends[i].name
  } este o diferenta de ${Math.abs(person.age - person.friends[i].age)} ani. `;
}
console.log(message.trim());

console.warn(`
Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.”
in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
`);
message = 'Prietenii mei sunt: ';
for (i = friendsLength - 1; i >= 0; i--) {
  punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }

  message += `${person.friends[i].name} ${person.friends[i].surname}${punctuation}`;
}
console.log(message);
