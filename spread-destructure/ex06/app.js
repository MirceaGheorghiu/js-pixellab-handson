/**
 * Folosind destructurarea salveaza al doilea skill din arrayul skill
 * si afiseaza intr-un paragraf propozitia: “Vreau sa invat javascript”.
 * Intr-un mod similar destructureaza arrayul friends
 * pentru a obtine obiectul de pe pozitia 2
 * apoi destructureaza obiectul obtinut in variabilele friend2Name,
 * friend2Surname si friend2Age astfel incat sa le poti folosi in propozitia:
 * Ma numesc Carol Carolson  si am 29 de ani.
 * Destructureaza obiectul person pentru a obtine variabile numite myName si mySurname,
 * astfel incat sa poti afisa propozitia: “Ma numesc Iordache Dragos.”.
 * Destructureaza arrayul friends si obiectul de pe pozitia 1
 * pentru a putea afisa propozitia:
 * “Ma numesc Steven Stevenson si am 31 de ani.”.
 */

let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
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

const [, skill2] = person.skills;
const message1 = `Vreau sa invat ${skill2}.`;
const p1 = document.createElement('p');
p1.innerHTML = message1;

document.body.append(p1);

// in slide se cere prietenul de pozitia 2, dar Carol e pe 3 :)
const [, , friend3] = person.friends;
const { name: friend3Name, surname: friend3Surname, age: friend3Age } = friend3;
console.log(
  `Ma numesc ${friend3Name} ${friend3Surname} si am ${friend3Age} de ani.`,
);

const { name: myName, surname: mySurname } = person;
console.log(`Ma numesc ${mySurname} ${myName}.`);

// la fel si aici.. Steve e pe 2
const [, friend2] = person.friends;
const { name: friend2Name, surname: friend2Surname, age: friend2Age } = friend2;
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`,
);
