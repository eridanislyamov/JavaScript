"use strict";

console.log('Задание 1');

function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
}

test(1); // 1

console.log('Задание 2');

function test2(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test2(1); // 1

console.log('Задание 3');

function test3(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test3(1); // 2

console.log('Задание 4');

function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test(1); // 1