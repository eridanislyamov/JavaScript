"use strict";

let arr = [2, 5, 9, 15, 1, 4];
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

console.log("Задание 1");

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 3 && arr[i] < 10) {
		console.log(arr[i]);
	}
}

console.log("Задание 2");

for (let key in obj) {
	if (obj[key] % 2 != 0) {
		console.log(key);
	}
}