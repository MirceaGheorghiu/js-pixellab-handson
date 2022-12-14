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

// high school flashback :))
for (let i = 0; i < person.friends.length; i++) {
  for (let j = 0; j < person.friends.length; j++) {
    let diff = Math.abs(person.friends[i].age - person.friends[j].age);

    if (diff !== 0) {
      console.log(
        `Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${diff} ani.`,
      );
    }
  }
}
