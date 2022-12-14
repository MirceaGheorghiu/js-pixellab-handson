const calculateRectangleArea = (width, length) => {
  return width * length;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m
cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5
si o suprafata de ferestre de 2 pe 1.5.
“Suprafata de tapet necesara este: xxx metri patrati.”
`);
const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);
const wallpaperSurface = (
  totalWallSurface -
  doorSurface -
  windowSurface
).toString();

console.log(`Suprafata de tapet este: ${wallpaperSurface} metri patrati.`);

console.warn(`
Creaza o functie wrapper numita calculateSquareArea()
pentru calculateRectangleArea() care sa primeasca ca parametru
latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta
pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita
in mod intentionat capacitatile.
`);
const calculateSquareArea = (width) => {
  const squareArea = calculateRectangleArea(width, width);

  return squareArea;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m
cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre
de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”
`);

const totalWall2Surface =
  (calculateRectangleArea(12, 2.5) + calculateRectangleArea(9, 2.5)) * 2;

const door2Surface = calculateRectangleArea(3, 2);
const window2Surface = calculateRectangleArea(3, 2);

const wallpaper2Surface = (
  totalWall2Surface -
  door2Surface -
  window2Surface
).toString();
console.log(
  `Suprafata de tapet necesara este: ${wallpaper2Surface} metri patrati.`,
);

console.warn(`
Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii:
latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi.
Functia se va numi aggregateSurfaceArea().
`);
const aggregateSurfaceArea = (width1, length1, width2, length2) => {
  const surfaceArea =
    calculateRectangleArea(width1, length1) +
    calculateRectangleArea(width2, length2);

  return surfaceArea;
};
console.log(aggregateSurfaceArea(48, 92, 51, 102));

// am facut si ex acesta, care nu era trecut in tema,
// dar nu stiu daca e ok la ultima functie wrapper - aggregateSurfaceArea
// (totusi pixeltabul e verde) :))
