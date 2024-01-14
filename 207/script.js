"use strict";

console.log('Задание 1');

function func1(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func1(3) ); // 3

console.log('Задание 2');

function func2(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func2(10) ); // 100
console.log( func2(-5) ); // 5

console.log('Задание 3');

function func3(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func3(10) ); // 100
console.log( func3(-5) ); // 5