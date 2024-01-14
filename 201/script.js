"use strict";

let num = prompt();

console.log('Задание 1');

function cube(num) {
	console.log(num ** 3);
}

cube(num);

console.log('Задание 2');

function number(num) {
	if (num < 0) {
		console.log('---');
	} else {
		console.log('+++');
	}
}

number(num);