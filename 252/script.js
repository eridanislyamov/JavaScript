"use strict";

console.log('Задание 1');

function func(num1) {
	return function(num2) {
		return function(num3) {
			return num1 + num2 + num3;
		};
	};
}

console.log(func(2)(3)(4));

console.log('Задание 2');

function func1(num1) {
	return function(num2) {
		return function(num3) {
			return function(num4) {
				return function() {
					let arr = [];
					arr.push(num1, num2, num3, num4);
					return arr;
				}
			};
		};
	};
}

console.log(func1(2)(3)(4)(5)());