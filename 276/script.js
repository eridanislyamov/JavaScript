"use strict";

console.log('Задание 1');

function func(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'object') {
			func(obj[key]);
		} else {
			console.log(obj[key]);
		}
	}
}

func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

console.log('Задание 2');

let result = [];

function func2(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func2(elem);
		} else {
			result.push(elem);
		}
	}
}

func2([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

console.log(result);