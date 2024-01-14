"use strict";

console.log('Задание 1');

function func(a, b, ...rest) {
	console.log(a);
	console.log(b);
	console.log(rest);
}

func(1, 2);
func(1, 2, 3, 4, 5);