"use strict";

let arr1 = [];
let arr2 = [];
let arr3 = [];

let arr = [1, 0, -7, -6, 3, 8, 3, -1, 6, -7];

console.log("Задание 1");

for (let i = 1; i <= 10; i++) {
	arr1.push(i);
}

console.log(arr1);

console.log("Задание 2");

for (let i = 1; i <= 10; i++) {
	arr2.push('x');
}

console.log(arr2);

console.log("Задание 3");

for (let elem of arr) {
	if (elem >= 0) {
		arr3.push(elem);
	}
}

console.log(arr3);