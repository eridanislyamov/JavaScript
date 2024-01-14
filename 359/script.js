"use strict";

console.log('Задание 1');

let a1 = document.querySelector('#a1');
let button1 = document.querySelector('#button1');

function func1() {
    a1.textContent += a1.href;
    a1.removeEventListener('click', func1);
}

function func2() {
    this.value = +this.value + 1;
    if (this.value == 10) {
        button1.removeEventListener('click', func2);
    }
}

a1.addEventListener('click', func1);
button1.addEventListener('click', func2);