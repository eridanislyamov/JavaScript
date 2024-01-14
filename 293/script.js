"use strict";

console.log('Задание 1');

function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum / nums.length;
}

let result = func(1, 2, 3, 4, 5);
console.log(result);