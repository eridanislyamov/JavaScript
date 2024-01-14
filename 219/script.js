"use strict";

console.log('Задание 1');

let num0 = 1;

function func0() {
	num0 = 2;
}
func0();

console.log(num0); // 2

console.log('Задание 2');

let num1 = 1;

function func1() {
	num1 = 2;
}

console.log(num1); // 1

console.log('Задание 3');

let num2 = 1;

function func2() {
	let num2 = 2;
}
func2();

console.log(num2); // 1

console.log('Задание 4');

let num3 = 1;

function func3() {
	let num3 = 2;
}

console.log(num3); // 1
func3();

console.log('Задание 5');

let num4 = 1;

function func4() {
	num4 = 2;
}

console.log(num4); // 1
func4();

console.log('Задание 6');

let num5 = 1;

function func5() {
	num5++;
}

func5();
func5();
func5();
console.log(num5); // 4

console.log('Задание 7');

function func6() {
	num6 = 2;
}

let num6 = 1;
console.log(num6); // 1
func6();

console.log('Задание 8');

function func7() {
	num7 = 2;
}

let num7 = 1;
func7();
console.log(num7); // 2