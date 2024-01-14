"use strict";

console.log('Задание 1');

let button = document.querySelector('#button');


function func1() {
	console.log('message dblclick');
}

function func2() {
	console.log('message mouseover');
}

function func3() {
	console.log('message mouseout');
}

button.addEventListener('dblclick', func1);
button.addEventListener('mouseover', func2);
button.addEventListener('mouseout', func3);