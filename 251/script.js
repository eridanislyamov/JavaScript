"use strict";

console.log('Задание 1');

function func() {
	return function() {
		return function() {
			return function() {
				return '!';
			}
		};
	}
}

console.log(func()()()());