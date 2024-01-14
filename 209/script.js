"use strict";

console.log('Задание 1');

let num = +prompt();

function func(num) {
	let i = 0;
	while (num > 10) {
		num = num / 2;
		i++;
	}
	return i;
}

console.log(func(num));