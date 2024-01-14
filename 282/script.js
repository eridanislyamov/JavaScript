"use strict";

console.log('Задание 1');

let arr1 = [-2, 1, 8, -5, -1, 11, 7, 14, -3];
let arr2 = [1, 2, 3, 4, 5];

let res1 = arr1.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

let res2 = arr2.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(res1);
console.log(res2);

console.log('Задание 2');

let res3 = arr1.every(function(elem, index) {
	if (elem * index < 30) {
		return true;
	} else {
		return false;
	}
});

let res4 = arr2.every(function(elem, index) {
	if (elem * index < 30) {
		return true;
	} else {
		return false;
	}
});

console.log(res3);
console.log(res4);