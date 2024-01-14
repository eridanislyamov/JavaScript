"use strict";

console.log('Задание 1');

function test1() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	}
}

let func1 = test1();

func1();
func1();
func1();

console.log('Задание 2');

function test2() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
	}
}

let func2 = test2();

func2();
func2();
func2();

console.log('Задание 3');

function test3() {
	let num = 10;
	
	return function() {
		if (num == -1) {
			console.log('Отсчет окончен!');
		} else {
			console.log(num);
			num--;
		}
	}
}

let func3 = test3();

func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();