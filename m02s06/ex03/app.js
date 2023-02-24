const { readFileSync, writeFileSync } = require('fs');

const data = readFileSync('file.txt', 'utf8');
// console.log(`${data} This is our node script!`);

writeFileSync('./file2.txt', 'This is our node script!');
const data2 = readFileSync('./file2.txt', 'utf8');

console.log(`${data} ${data2}`);
