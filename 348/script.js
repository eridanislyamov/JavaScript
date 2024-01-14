"use strict";

console.log('Задание 1');

let button1 = document.querySelector('#elem');
let button2 = document.querySelector('#elem1');
let button3 = document.querySelector('#elem2');

let a1 = document.querySelector('#a1');
let button4 = document.querySelector('#elem3');
let par1 = document.querySelector('#par1');

let a2 = document.querySelector('#a2');
let button5 = document.querySelector('#elem4');

let img1 = document.querySelector('#img1');
let button6 = document.querySelector('#elem5');
let par2 = document.querySelector('#par2');

let button7 = document.querySelector('#elem6');

let button8 = document.querySelector('#elem7');

let button9 = document.querySelector('#elem8');
let button10 = document.querySelector('#elem9');

function func1() {
	console.log(button1.type);
}

function func2() {
	button1.type = 'submit';
}

function func3() {
	par1.textContent = a1.href;
}

function func4() {
	a2.textContent += '( ' + a2.href + ' )';
}

function func4() {
	a2.textContent += '( ' + a2.href + ' )';
}

function func5() {
	par2.textContent = img1.src;
}

function func6() {
	img1.width = 300;
}

function func7() {
	img1.width *= 2;
}

function func8() {
	img1.src = "images/img.png";
}

function func9() {
	img1.src = "images/img1.png";
}

button2.addEventListener('click', func1);
button3.addEventListener('click', func2);
button4.addEventListener('click', func3);
button5.addEventListener('click', func4);
button6.addEventListener('click', func5);
button7.addEventListener('click', func6);
button8.addEventListener('click', func7);
button9.addEventListener('click', func8);
button10.addEventListener('click', func9);