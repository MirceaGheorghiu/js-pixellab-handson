// event delegation
const controls = document.querySelector('.controls');
const box = document.querySelector('.box');
const colorInput = document.querySelector('.controls .color');

controls.addEventListener('click', (event) => {
  // target -> elementul de pe care a originat
  // eventul
  const target = event.target;
  const color = target.dataset.color;

  // early return
  if (target.nodeName !== 'BUTTON' || color === undefined) {
    return;
  }

  // currentTarget este elementul pe care
  // am atasta eventul
  //suprascriem box, cu labelul curent selectat
  //fiind variabila locala, nu interfera cu box din afara

  const checkedInput = document.querySelector('.box-container input:checked');

  const box = checkedInput.parentElement;

  box.style.backgroundColor = color;
});

colorInput.addEventListener('change', (event) => {
  // currentTarget este elementul pe care
  // am atasat eventul
  const colorInput = event.currentTarget;
  const color = colorInput.value;

  if (color.trim().length < 3) {
    return;
  }

  const rainbowButton = colorInput.nextElementSibling;
  rainbowButton.setAttribute('style', `background-color: ${color}`);
  rainbowButton.dataset.color = color;
});

colorInput.addEventListener('keydown', (event) => {
  // currentTarget => elementul pe care am rulat addEvent...
  const colorInput = event.currentTarget;
  const color = colorInput.value;

  if (color.trim().length < 3 || event.code !== 'Enter') {
    return;
  }

  const rainbowButton = colorInput.nextElementSibling;
  rainbowButton.setAttribute('style', `background-color: ${color}`);
  rainbowButton.dataset.color = color;
});