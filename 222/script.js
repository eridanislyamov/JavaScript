"use strict";

console.log('Задание 1');

function func1(obj) {
	obj.a = '!';
}

let obj1 = {a: 1, b: 2, c: 3};
func1(obj1);
console.log(obj1); // {a: '!', b: 2, c: 3}

console.log('Задание 2');

function func2(arg) {
	arg = '!';
}

let obj2 = {a: 1, b: 2, c: 3}; // {a: 1, b: 2, c: 3}
func2(obj2.a);
console.log(obj2);

console.log('Задание 3');

function func3(obj) {
	obj = '!';
}

let obj3 = {a: 1, b: 2, c: 3};
func3(obj3.a);
console.log(obj3); // {a: 1, b: 2, c: 3}

console.log('Задание 4');

function func4(arr) {
	arr.splice(1, 1);
}

let arr4 = [1, 2, 3];
func4(arr4);
console.log(arr4); // [1, 3]

console.log('Задание 5');

function func5(arr) {
	arr.slice(1, 1);
}

var arr5 = [1, 2, 3];
func5(arr5);
console.log(arr5); // [1, 2, 3]

console.log('Задание 6');

function func6(arr) {
	let newArr = arr;
	newArr[0] = '!';
}

let arr6 = [1, 2, 3];
func6(arr6);
console.log(arr6); // ['!', 2, 3]