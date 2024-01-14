"use strict";

console.log('Задание 1');

let num = 1;
		
function func() {
	console.log(num);
}

func(); // 1

console.log('Задание 2');

let num1 = 1;
		
function func1() {
	console.log(num1);
}

num1 = 2;
func1(); // 2

console.log('Задание 3');

function func2() {
	console.log(num2);
}

let num2;

num2 = 1;
func2(); // 1

num2 = 2;
func2(); // 2