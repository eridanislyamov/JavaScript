"use strict";

console.log('Задание 1');

function func(arr) {
	console.log(arr.shift());
	if (arr.length != 0) {
		func(arr);
	};
}

func([1, 2, 3, 4, 5]);