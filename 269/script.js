"use strict";

console.log('Задание 1');

(function() {
	return function() {
		return function() {
			console.log('!');
		};
	};
})()()();

console.log('Задание 2');

(function(num1) {
	return function(num2) {
		console.log(num1 + num2);
	};
})(1)(2);

console.log('Задание 3');

(function(num1) {
	return function(num2) {
		return function(num3) {
			console.log(num1 + num2 + num3);
		};
	};
})(1)(2)(3);