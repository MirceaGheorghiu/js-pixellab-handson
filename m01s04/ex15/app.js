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
  const outerFriend = person.friends[i];

  for (let j = 0; j < person.friends.length; j++) {
    const innerFriend = person.friends[j];
    let diff = Math.abs(outerFriend.age - innerFriend.age);

    if (i === j) {
      continue;
    }

    console.log(
      `Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${diff} ani.`,
    );
  }
}
