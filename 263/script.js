"use strict";

console.log('Задание 1');

let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func = test;

let func1 = func();
let func2 = func();

func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3

console.log('Задание 2');

function test2() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func222 = test2()();

let func21 = func222;
let func22 = func222;

func21(); // 0
func22(); // 1
func21(); // 2
func22(); // 3

console.log('Задание 3');

function test3() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func333 = test3();

let func331 = func333();
let func332 = func333();

func331(); // 0
func332(); // 1
func331(); // 2
func332(); // 3