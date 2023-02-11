const box = document.querySelector('.box');
const controlButton = document.querySelector('.control');
const darkThemeButton = document.querySelector('.dark');
const animationClass = 'animate-class';

// setTimeout(() => {
//   box.classList.add(animationClass);

//   // callback hell
//   setTimeout(() => {
//     box.classList.remove(animationClass);
//   }, 4000);
// }, 6000);

controlButton.addEventListener('click', (event) => {
  // this nu este elementul pe care e pus handlerul
  const controlButton = event.currentTarget;
  const cssClass = box.classList;
  const colorClass = cssClass.contains(animationClass);

  cssClass.toggle(animationClass);

  const buttonText = colorClass ? 'Aplica' : 'Elimina';
  controlButton.innerText = buttonText;
});

darkThemeButton.addEventListener('click', () => {
  box.setAttribute('style', 'background-color: #000');
});
