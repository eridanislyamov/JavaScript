"use strict";

console.log('Задание 1');

let elems = document.querySelectorAll('ul li');

let sum = 0;
let symbs;

for (let elem of elems) {
    let sym_sum = 0;
    let text = elem.textContent;
    symbs = text.split('');
    for (let symb of symbs) {
        sym_sum += +symb;
    }
    if (sym_sum % 6 == 0) {
        console.log(elem.textContent);
        sum += +elem.textContent;
    }
}

console.log(sum);