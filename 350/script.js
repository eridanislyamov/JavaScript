"use strict";

console.log('Задание 1');

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

function func1() {
	elem1.value = 1;
}

function func2() {
	elem1.value = 2;
}

function func3() {
	elem2.value **= 2;
}

function func4() {
	elem3.value = '';
}

elem1.addEventListener('focus', func1);
elem1.addEventListener('blur', func2);

elem2.addEventListener('blur', func3);
elem3.addEventListener('focus', func4);