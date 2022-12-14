var person = {
  name: 'Mircea',
  surname: 'Gheorghiu',
  age: 38,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    sass: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

var skillKeys = Object.keys(person.skills);
// ['html', 'css', javascript']

console.warn(`
Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.
Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”
`);
skillKeys.forEach(function (key) {
  if (person.skills[key] === true) {
    console.log(`${person.name} cunoaste: ${key}.`);
  }
});

console.warn(`
Prin aceeasi metoda, afiseaza o lista inversata
cu numele complet inversat al prietenilor.
`);
var friendKeys = Object.keys(person.friends);
// ['larry', 'steven', 'carol']
friendKeys.forEach(function (key) {
  var friend = person.friends[key];
  console.log(`${friend.surname} ${friend.name}`);
});

console.warn(`
Afiseaza propozitia: “Prietenii mei sunt Larry,
Steven si Carol.” folosind Object.keys()
`);
var message = 'Prietenii mei sunt ';
for (var i = 0; i < friendKeys.length; i++) {
  var key = friendKeys[i];
  var friend = person.friends[key];
  var punctuation = ', ';

  if (i === friendKeys.length - 1) {
    punctuation = '.';
  }

  if (i === friendKeys.length - 2) {
    punctuation = ' si ';
  }

  message += `${friend.name}${punctuation}`;
}
console.log(message);

console.warn(`
Folosind bucla, afiseaza mai multe propozitii (cate una per console.log())
care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);
friendKeys.forEach(function (key) {
  var friend = person.friends[key];
  var diff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${diff} ani.`,
  );
});

console.warn(`
Folosind Object.keys() pe proprietatea skills,
afiseaza toate abilitatile din obiectul skills.
`);
skillKeys.forEach((key) => {
  console.log(key);
});

console.warn(`
Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.
`);
friendKeys.forEach((key) => {
  friend = person.friends[key];
  console.log(`${friend.name} ${friend.surname}`);
});

console.warn(`
Afiseaza propozitia: “Prietenii mei sunt
Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()
`);
message = 'Prietenii mei sunt ';
friendKeys.forEach((key, index) => {
  friend = person.friends[key];
  punctuation = ', ';

  if (index === friendKeys.length - 1) {
    punctuation = '.';
  }

  if (index === friendKeys.length - 2) {
    punctuation = ' si ';
  }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(`
Folosind bucla, afiseaza mai multe propozitii
(cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”
`);
friendKeys.forEach((key) => {
  friend = person.friends[key];
  message = `${friend.name} are ${friend.age} ani. `;
  console.log(message.trim());
});