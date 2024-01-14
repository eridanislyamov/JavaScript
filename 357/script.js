"use strict";

console.log('Задание 1');

let nums = document.querySelectorAll('.num');
let elems = document.querySelectorAll('.elem');

function func1() {
	this.value = Number(this.value) + 1;
}

function func2() {
	this.textContent **= 2;
}

for (let num of nums) {
    num.addEventListener('blur', func1)
}

for (let elem of elems) {
    elem.addEventListener('click', func2)
}