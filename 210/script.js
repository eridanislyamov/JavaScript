"use strict";

console.log('Задание 1');

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return (num1 * num2);
	} else {
		return (num1 - num2);
	}
}

console.log(func(3, 4));