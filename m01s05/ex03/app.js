var calculateRectangleArea = function (width, length) {
  const surface = width * length;

  return surface;
};

console.warn(`
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 .
Ce diferenta de productie este intre un teren de 100m pe 250m
si unul de 350m pe 200m?
`);
const barleyYield = 25;
const field1Yield = barleyYield * calculateRectangleArea(100, 250);
const field2Yield = barleyYield * calculateRectangleArea(350, 200);
console.log(field2Yield - field1Yield);

console.warn(`
Stiind ca din 10kg de hamei produc 2.5l de bere,
cati litri de bere va produce un teren de 400m pe 370m?
`);
const beerYield = 2.5 / 10;
const field3Yield = barleyYield * calculateRectangleArea(400, 370);
const liters = beerYield * field3Yield;
console.log(liters);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2 de faina.
Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri
stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);
const wheatYield = 32;
const field4Yield = wheatYield * calculateRectangleArea(300, 200);
const breadYield = 2.5 * field4Yield;
console.log(breadYield);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
const field5Yield = wheatYield * calculateRectangleArea(150, 200);
const field6Yield = wheatYield * calculateRectangleArea(200, 500);

const breadYield2 = 2.5 * field5Yield + 2.5 * field6Yield;
console.log(breadYield2);
