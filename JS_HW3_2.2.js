// Task 2*** 
// Реализуйте считывание из JSONки из файла task2.json с пaмощью, например, модуля fs. 
// для дальнейшего использования в функции, описанной в задании

const fs = require('fs');
const rawdata = fs.readFileSync('C:/Users/87782/GitHub/VSC_JavaScript/task2.json', `utf-8`);
const idCard = JSON.parse(rawdata);

const idCardUnique = [];
function itemCheck(data) {
  if (idCardUnique.indexOf(data.name) === -1) {
    idCardUnique.push(data.name);
    return true;
  }
  return false;
}

console.log(idCard.filter((data) => itemCheck(data)));
