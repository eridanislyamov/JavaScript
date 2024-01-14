"use strict";

console.log('Задание 1');

function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

test(); // 1

console.log('Задание 2');

function test2() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test2(); // ''

console.log('Задание 3');

function test3() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

// ''

console.log('Задание 4');

function test4() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test4();
// 1
// 2