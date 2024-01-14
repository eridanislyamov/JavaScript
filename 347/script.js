"use strict";

console.log('Задание 1');

let elem1 = document.querySelector('#elem1');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

function func1() {
	console.log(elem1.innerHTML);
}

function func2() {
	elem1.innerHTML = '<b>' + elem1.textContent + '</b>';
}

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);