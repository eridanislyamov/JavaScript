"use strict";

let res1 = 0;

console.log('Задание 1');

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

console.log(round(sqrt(2)))

console.log('Задание 2');

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

res1 = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res1);

console.log('Задание 3');

console.log(round(sum(sqrt(2), sqrt(3), sqrt(4))));