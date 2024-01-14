"use strict";

console.log('Задание 1');

let elem = document.querySelector('#elem');

let elem1 = document.querySelector('#elem1');

function func1() {
    this.value = 1;
}

function func2() {
    this.value = 2;
}

function func3() {
    this.value = +this.value + 1;
}

elem.addEventListener('focus', func1);
elem.addEventListener('blur', func2);
elem1.addEventListener('click', func3);