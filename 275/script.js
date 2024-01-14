"use strict";

console.log('Задание 1');

function square_sum(arr) {
	let sum = arr.shift() ** 2;
	
	if (arr.length !== 0) {
		sum += square_sum(arr);
	}
	
	return sum;
}

console.log(square_sum([1, 2, 3, 4, 5]));