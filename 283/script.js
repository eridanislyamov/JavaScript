"use strict";

console.log('Задание 1');

let arr1 = [-2, 1, 8, -5, -1, 11, 7, 14, -3];

let res1= arr1.some(elem => elem % 2 == 0);

console.log(res1);

console.log('Задание 2');

let res2 = arr1.some(function(elem, index) {
	if (elem * index > 30) {
		return true;
	} else {
		return false;
	}
});

console.log(res2);