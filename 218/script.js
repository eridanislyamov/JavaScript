"use strict";

console.log('Задание 1');

let num = 1;

function func() {
	num = 2;
}
func();

console.log(num); // 2

console.log('Задание 2');

let num1 = 1;

function func1() {
	let num1 = 2;
}
func1();

console.log(num1); // 1