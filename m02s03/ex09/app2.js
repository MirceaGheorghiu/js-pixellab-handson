const myList = document.getElementsByTagName('ul')[0];
const heading = document.querySelector('h1');
const media = matchMedia('(max-width: 500px)');

const clickHandler = (event) => {
  currentTarget = event.currentTarget;

  const ul = heading.nextElementSibling;

  if (ul.style.display === '') {
    ul.style.display = 'none';
  } else {
    ul.style.display = 'block';
  }
};

const resizeHandler = (matches) => {
  if (matches) {
    ul.style.display = 'none';
    heading.addEventListener('click', clickHandler);
  } else {
    ul.style.display = 'block';
    heading.removeEventListener('click', clickHandler);
  }
};

resizeHandler(media.matches);
