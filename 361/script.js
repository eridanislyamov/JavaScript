"use strict";

console.log('Задание 1');

let elems = document.querySelectorAll('ul .lis');
let elems1 = document.querySelectorAll('ul .lis1');
let elems2 = document.querySelectorAll('ul .lis2');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        this.textContent = +this.textContent + 1;
    });
}

for (let elem1 of elems1) {
    elem1.addEventListener('click', function func() {
        this.textContent = +this.textContent + 1;
        this.removeEventListener('click', func);
    });
}

for (let elem2 of elems2) {
    elem2.addEventListener('click', function func() {
        if (this.textContent < 10) {
            this.textContent = +this.textContent + 1;
        } else {
            this.removeEventListener('click', func);
        }
    });
}