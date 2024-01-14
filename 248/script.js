"use strict";

console.log('Задание 1');

function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test(1); // 1

console.log('Задание 2');

function test2(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);
}

test2(1); // 2

console.log('Задание 3');

function test3(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}

test3(1); // 1

console.log('Задание 4');

function test4(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test4(1); // 1

console.log('Задание 5');

function test5(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum);
}

// test5(1); // Ошибка

console.log('Задание 6');

function test6(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test6(1); // 2