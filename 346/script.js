"use strict";

console.log('Задание 1');

let elem1 = document.querySelector('#elem1');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let button3 = document.querySelector('#button3');

let elem2 = document.querySelector('#elem2');
let button4 = document.querySelector('#button4');

let button5 = document.querySelector('#button5');
let num3 = document.querySelector('#num3');

let button6 = document.querySelector('#button6');
let elem3 = document.querySelector('#elem3');

function func1() {
	console.log(elem1.textContent);
}

function func2() {
	elem1.textContent = 'NEW';
}

function func3() {
	console.log(+num1.textContent + +num2.textContent);
}

function func4() {
	elem2.textContent = +num1.textContent + +num2.textContent;
}

function func5() {
	num3.textContent = +num3.textContent + 1;
}

function func6() {
	elem3.textContent = elem3.textContent + '!';
}

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
button3.addEventListener('click', func3);
button4.addEventListener('click', func4);
button5.addEventListener('click', func5);
button6.addEventListener('click', func6);