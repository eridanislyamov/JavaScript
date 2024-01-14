"use strict";

console.log('Задание 1');

function func11() {
	return 3;
}
function func12() {
	return 5;
}

console.log( func11() + func12() );

console.log('Задание 2');

function sum2(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log(sum2([1, 2, 3, 4, 5]));

console.log('Задание 3');

let arr3 = [1, 2, 3, 4, 5];

function func3(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
}

func3(arr3);

console.log('Задание 4');

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

console.log('Задание 5');

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

let s = sum([1, 2, 3, 4, 5]);
console.log(s);

console.log('Задание 6');

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

let res6 = sum([1, 2, 3, 4, 5]);
console.log(res6);

console.log('Задание 7');

function add(num) {
	if (num <= 9 && num >= 0) {
		return '0' + num;
	}
}

console.log(add(5));

console.log('Задание 8');

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

let arr8 = [1, 2, 3, 4, 5];
let sum8 = sum(arr8);

console.log(sum8);

console.log('Задание 9');

function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += +elem;
	}
	
	return sum;
}

let num9 = 12345;
let res9 = getDigitsSum(num9);

console.log(res9);

console.log('Задание 10');

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrime(13)); // должен вывести true