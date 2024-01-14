"use strict";

console.log('Задание 1');

function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
}

console.log( test(
	[1, 2, 3, 4, 5],
	function(num) { return num ** 3; }
));