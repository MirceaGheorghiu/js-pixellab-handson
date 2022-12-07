var i = 1;
var length = prompt('Introdu limita superioara a multimii de numere:');
var x = prompt('Introdu un numar:');

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// }

// while (i <= 67) {
//   console.log(i);
//   i++;
// }

// while (i < 67) {
//   console.log(i);
//   i++;
// }

// while (i < 67) {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }

//   i++;
// }

// while (i <= 32) {
//   i++;

//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

i = 5;
while (i <= length) {
  i++;

  if (i % x !== 0) {
    continue;
  }

  console.log(i);
}
