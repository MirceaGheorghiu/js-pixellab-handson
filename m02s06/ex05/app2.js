const { readFileSync, writeFileSync } = require('fs');

const date = new Date();
const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
const month =
  date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = day + '.' + month + '.' + year;

const myFile = readFileSync('./my-file.txt', 'utf8');
const dateFile = `${myFile}, azi, ${currentDate}!`;

writeFileSync('./date-file.txt', dateFile);
const text = readFileSync('./date-file.txt', 'utf8');

console.log(text);
