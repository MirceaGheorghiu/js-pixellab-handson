/**
 * Folosind evenimentul resize al obiectului window,
 * afiseaza o alerta care sa contina mesajul: “Fereastra si-a schimbat dimensiunea.”
 * Folosind evenimentul resize si proprietatea innerWidth al obiectului window,
 * afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare eveniment de resize.
 * Folosind evenimentul resize si proprietatea innerWidth al obiecutului window,
 * afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat dimensiunea orizontala.”
 */

const container = document.getElementById('container');
const logMessage = (message = '') => {
  const p = document.createElement('p');
  p.innerText = message;

  container.prepend(p);
};

let windowWidth = window.innerWidth;
let windowlHeight = window.innerHeight;

logMessage(windowWidth);

let calculateWindowSurface = () => {
  const message = `${windowWidth * windowlHeight} pixeli.`;

  return message;
};

window.addEventListener('resize', () => {
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;
  let message = '';

  if (newWidth !== windowWidth) {
    message = `Fereastra si-a schimbat latimea, avand acum ${newWidth} pixeli latime si ${newHeight} inaltime.`;
    windowWidth = newWidth;
  }

  if (newHeight !== windowlHeight) {
    message = `Fereastra si-a schimbat inaltimea, avand acum ${newHeight} pixeli inaltime si ${newWidth} latime.`;
    windowHeight = newHeight;
  }

  container.innerText = `Fereastra are acum suprafata de ${calculateWindowSurface()}`;

  logMessage(message);
});

window.addEventListener('DOMContentLoaded', () => {
  container.innerText = `Fereastra initala are suprafata de ${calculateWindowSurface()}`;
});
