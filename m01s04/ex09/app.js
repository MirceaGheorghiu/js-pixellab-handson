var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// do {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// do {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }

//   i++;
// } while (i <= 52);

// i = 8;
// do {
//   i++;

//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// } while (i <= 32);

var x = prompt('Introdu un numar:');
var limitLow = prompt('Limita inferioara: ');
var limitHigh = prompt('Limita superioara: ');

i = limitLow;
do {
  i++;

  if (i % x !== 0) {
    continue;
  }

  console.log(i);
} while (i <= limitHigh);
