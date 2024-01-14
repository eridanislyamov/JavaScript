"use strict";

console.log('Задание 1');

let arr1 = [1, 4, 9, 16, 25];

let res1 = arr1.map(function(elem) {
	return elem ** (1/2);
});

console.log(res1);

console.log('Задание 2');

let arr2 = ['1', '4', '9', '16', '25'];

let res2 = arr2.map(function(elem) {
	return elem + '!';
});

console.log(res2);

console.log('Задание 3');

let res3 = res2.map(function(elem) {
	let res = '';
	for (let sym of elem) {
		res = sym + res;
	}
	return res;
});

console.log(res3);

console.log('Задание 4');

let arr = ['123', '456', '789'];

let res4 = arr.map(function(elem) {
	let res = [];
	let i = 0;
	res[i] = [];
	for (let sym of elem) {
		res[i].push(+sym);
	}
	return res;
});

console.log(res4);

console.log('Задание 5');

let arr5 = [1, 2, 3, 4, 5];

let res5 = arr5.map(function(elem, index) {
	return elem * index;
});

console.log(res5);