"use strict";

console.log('Задание 1');

function func(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'object') {
			arr[i] = func(arr[i]);
		} else {
			arr[i] = arr[i] ** 2;
		}
	}
	
	return arr;
}

console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));