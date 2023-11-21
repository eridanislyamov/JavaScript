"use strict";

let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

console.log("Задание 1");

console.log(arr);

for (let elem of arr) {
	let str = String(elem);

	if ( (str[0] == 1) || (str[0] == 2) ) {
		sum += elem;
	}
}

console.log(sum);