"use strict";

console.log('Задание 1');

let obj = {
	sum: function(arr) { 
		let sum = 0;
		for (let elem of arr) {
			sum += elem;
		}
		return sum;
	},
	squre_sum: function(arr) {
		let sum = 0;
		for (let elem of arr) {
			sum += elem ** 2;
		}
		return sum;
	},
	cube_sum: function(arr) {
		let sum = 0;
		for (let elem of arr) {
			sum += elem ** 3;
		}
		return sum;
	}
};

for (let key in obj) {
	console.log(obj[key]([1, 2, 3, 4]));
}