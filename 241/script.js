"use strict";

console.log('Задание 1');

function test(arg1, arg2, arg3) {
	return (arg1() + arg2() + arg3());
}

function func1() {
	return 1;
}

function func2() {
	return 2;
}

function func3() {
	return 3;
}

console.log(test(func1, func2, func3));

console.log('Задание 2');

let func4 = function() {
	return 1;
}

let func5 = function() {
	return 2;
}

let func6 = function() {
	return 3;
}

console.log(test(func4, func5, func6));