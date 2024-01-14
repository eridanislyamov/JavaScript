"use strict";

console.log('Задание 1');

test(function(num) {
	return num ** 3;
});

function test(func) {
	console.log(func(3));
}

console.log('Задание 2');

test(function func(num) {
	return num ** 3;
});

console.log('Задание 3');

let func1 = function(num) {
	return num ** 3;
}

test(func1);

console.log('Задание 4');

function test1(func) {
	console.log(func(6, 7));
}

test1 (function(num1, num2) {
	return num1 + num2;
});