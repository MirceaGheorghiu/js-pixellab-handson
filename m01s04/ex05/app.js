var l = prompt('Introdu limita superioara a multimii de numere:');
var x = prompt('Introdu un numar:');
var i;

// for (i = 1; i <= 100; i++) {
//   console.log(i);

//   if (i % 7 !== 0) {
//     continue;
//   }

//   console.log('Acest numar este multiplu de 7.');
// }

// for (i = 1; i <= 100; i++) {
//   console.log(i);

//   if (i % x !== 0) {
//     continue;
//   }

//   console.log(`Acest numar este multiplu de ${x}.`);
// }

// for (i = 1; i <= 1000; i++) {
//   console.log(i);

//   if (i % x !== 0) {
//     continue;
//   }

//   console.log(`Acest numar este multiplu de ${x}.`);
// }

for (i = 1; i <= l; i++) {
  console.log(i);

  if (i % x !== 0) {
    continue;
  }

  console.log(
    `Numarul ${i} este multiplu de ${x}, dintr-un total de ${l} numere.`,
  );
}
