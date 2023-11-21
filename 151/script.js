"use strict";

let arr = [2, 5, 9, 3, 1, 4];

let res1 = 0;
let res2 = 0;
let res3 = 0;
let res4 = 1;

console.log("Задание 1");

for (let elem of arr) {
	res1 += elem;
}

console.log("Сумма элементов массива  = " + String(res1));

console.log("Задание 2");

for (let elem of arr) {
	if (elem % 2 == 0) {
		res2 += elem;
	}
}

console.log("Сумма четных чисел массива = " + String(res2));

console.log("Задание 3");

for (let elem of arr) {
	res3 += elem**2;
}

console.log("Сумма квадратов элементов массива = " + String(res3));

console.log("Задание 4");

for (let elem of arr) {
	res4 *= elem;
}

console.log("Произведение элементов массива = " + String(res4));