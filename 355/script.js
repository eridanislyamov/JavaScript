"use strict";

console.log('Задание 1');

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

function func1() {
    this.textContent += '!';
}

function func2() {
    this.value **= 2;
}

elem1.addEventListener('click', func1);
elem2.addEventListener('click', func1);
elem3.addEventListener('click', func1);
elem4.addEventListener('click', func1);
elem5.addEventListener('click', func1);

button1.addEventListener('blur', func2);
button2.addEventListener('blur', func2);
button3.addEventListener('blur', func2);