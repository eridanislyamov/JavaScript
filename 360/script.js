"use strict";

console.log('Задание 1');

let elems = document.querySelectorAll('.elem');

function func() {
    this.textContent += '!';
    this.removeEventListener('click', func);
}

for (let elem of elems) {
    elem.addEventListener('click', func);
}