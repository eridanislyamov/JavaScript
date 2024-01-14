"use strict";

console.log('Задание 1');

function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test(1, 2); // 3

console.log('Задание 2');

function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test(1, 2); // 3