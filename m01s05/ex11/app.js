console.warn(`
Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata unui patrat.
Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului.
Foloseste structura switch.
`);
// function calculateSurface(width, length, height) {
//   if (arguments.length === 1) {
//     return Math.pow(width, 2);
//   } else if (arguments.length === 2) {
//     return width * length;
//   } else if (arguments.length === 3) {
//     return 2 * (width * length + length * height + width * height);
//   }
// }

// console.log(calculateSurface(6, 7));
// console.log(calculateSurface(2));
// console.log(calculateSurface(20, 15, 5));

// am pus si varianta cu switch mai jos, care returneaza in consola valorile corecte pt surface,
// dar am lasat sa ruleze varianta cu if, altfel nu valideaza Pixeltab-ul (probabil din cauza parametrilor)

function calculateSurface(width, length, height) {
  let surface;
  switch (arguments.length) {
    case 1:
      surface = Math.pow(width, 2);
      break;
    case 2:
      surface = width * length;
      break;
    case 3:
      surface = 2 * (width * length + length * height + width * height);
      break;
    default:
      surface = 0;
      break;
  }
  return surface;
}

console.log(calculateSurface(6, 7));
console.log(calculateSurface(2));
console.log(calculateSurface(20, 15, 5));

console.warn(`
Creeaza o functie numita calculateCircleArea()
si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`
Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
  a.  Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
  b.  Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului
      si afiseaza propozitia: “Animalul meu are petAge ani”
`);
const pet = {
  getName: function () {
    return 'Tom';
  },
  getSpecies: function () {
    return 'pisica';
  },
  getAge: function () {
    return 3;
  },
};
const petAge = pet.getAge();

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);
console.log(`Animalul meu are ${petAge} ani.`);
