"use strict";

console.log('Задание 1');

func();

// Function Declaration
function func() {
	console.log('!');
}

console.log('Задание 2');

// func1(); Ошибка

// Function Expression
let func1 = function() {
	console.log('!');
};