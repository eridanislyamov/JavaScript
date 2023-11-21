"use strict";

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag1 = false;

let num = 127;
let flag2 = true;

console.log("Задание 1");

console.log(arr);

for(let elem of arr) {
	if (elem == 'c') {
		flag1 = true;
		break;
	}
}

if (flag1) {
	console.log('+++')
} else {
	console.log('---')
}

console.log("Задание 2");

console.log(num);

for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag2 = false;
		break;
	}
}

if (flag2) {
	console.log("Число " + num + " простое")
} else {
	console.log("Число " + num + " не простое")
}