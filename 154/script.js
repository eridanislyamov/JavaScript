"use strict";

let res1 = 0;
let res2 = 0;
let res3 = 0;

let arr = [1, 6, 8, 0, 3, 8, 3, -1, 6, 3, 6, 1, 3];

let k = 0;

console.log("Задание 1");

for (let elem of arr) {
	if (elem != 0) {
		res1 += elem;
	}
	else {
		break;
	}
}

console.log(res1);

console.log("Задание 2");

for (let elem of arr) {
	if (elem >= 0) {
		res2 += elem;
	}
	else {
		break;
	}
}
console.log(res2);

console.log("Задание 3");

for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 3) {
		console.log("Первая 3 в массиве под индексом: " + i);
		break;
	}
}

console.log("Задание 4");

for (let i = 1; i <= 100; i++) {
	res3 += i;
	k++;
	if (res3 > 100) {
		console.log("Было сложено: " + k + " чисел");
		break;
	}
}