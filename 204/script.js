"use strict";

console.log('Задание 1');

function func1(num = 5) {
	console.log(num * num);
}

func1(2); // 4
func1(3); // 9
func1(); // 25

console.log('Задание 2');

function func2(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

func2(2, 3); // 5
func2(3); // 3
func2(); // 0