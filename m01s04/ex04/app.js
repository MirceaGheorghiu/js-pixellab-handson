// for (var i = 1; i < 100; i++) {
//   console.log(i);
// }

// for (var i = 1; i < 100; i++) {
//   console.log(i);

//   if (i === 2) {
//     break;
//   }
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// Tema:
// Modifica exemplul astfel incat bucla sa numere de la 1 la 89. (<= 89):
// for (var i = 1; i <= 89; i++) {
//   console.log(i);
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 88. (< 89):
// for (var i = 1; i < 89; i++) {
//   console.log(i);
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42
// (am presupus, fara sa-l afisam, daca nu s-a mentionat in enunt).
// for (var i = 1; i <= 89; i++) {
//   if (i === 42) {
//     break;
//   }

//   console.log(i);
// }

// Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89
// (daca nu s-a mentionat in enunt, am presupus exclusiv 89).
// for (var i = 1; i < 89; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

// In mod similar, afiseaza doar numerele care sunt divizibile cu 3.
for (var i = 1; i < 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }

  console.log(i);
}
