"use strict";

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj1 = {};

let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj3 = {};

let obj4 = {};

console.log("Задание 1");

for(let i = 0; i < arr1.length; i++) {
	obj1[arr2[i]] = arr1[i];
}

console.log(obj1);

console.log("Задание 2");

for(let key in obj2) {
	if (obj2[key] % 2 == 0) {
		obj3[key] = obj2[key];
	}
}

console.log(obj3);

console.log("Задание 3");

for (let key in obj2) {
	obj4[obj2[key]] = key;
}

console.log(obj4);