"use strict";

console.log('Задание 1');

function func() {
	return 3;
}

let func2 = func;

console.log(func() + func2());
