"use strict";

console.log('Задание 1');

let elem1 = document.querySelector('#elem1');
let button1 = document.querySelector('#button1');

let button2 = document.querySelector('#button2');
let par1 = document.querySelector('#par1');

let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let button3 = document.querySelector('#button3');

let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let button4 = document.querySelector('#button4');

let elem6 = document.querySelector('#elem6');
let elem7 = document.querySelector('#elem7');
let elem8 = document.querySelector('#elem8');
let elem9 = document.querySelector('#elem9');
let elem10 = document.querySelector('#elem10');
let button5 = document.querySelector('#button5');
let par2 = document.querySelector('#par2');

function func1() {
	elem1.value = "Вы нажали кнопку";
}

function func2() {
	par1.textContent = elem1.value;
}

function func3() {
	elem3.value = elem2.value ** 2;
}

function func4() {
	let str;
	str = elem4.value;
	elem4.value = elem5.value;
	elem5.value = str;
}

function func5() {
	par2.textContent = (+elem6.value + +elem7.value + +elem8.value + +elem9.value + +elem10.value) / 5;
}

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
button3.addEventListener('click', func3);
button4.addEventListener('click', func4);
button5.addEventListener('click', func5);