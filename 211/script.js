"use strict";

console.log('Задание 1');

let arr = [1, 6, 8, 10, 17, 23, 6, 1, 8];
let num = 135275;

function pos(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	return true;
}

console.log(pos(arr));

console.log('Задание 2');

function number(num) {
	let str = String(num);
	for (let symbol of str) {
		if ((+symbol) % 2 == 0) {
			return false;
		}
	}
	return true;
}

console.log(number(num));

console.log('Задание 3');

function equal(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] == arr[i+1]) {
			return false;
		}
	}
	return true;
}

console.log(equal(arr));