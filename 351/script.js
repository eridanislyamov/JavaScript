"use strict";

console.log('Задание 1');

let button1 = document.querySelector('#button1');
let div1 = document.querySelector('#div1');

let button2 = document.querySelector('#button2');
let div2 = document.querySelector('#div2');

let button3 = document.querySelector('#button3');
let div3 = document.querySelector('#div3');

function func1() {
	console.log(div1.className);
}

function func2() {
	div2.className = 'one';
	console.log(div2.className);
}

function func3() {
	console.log((div3.className).split(' '));
}

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
button3.addEventListener('click', func3);