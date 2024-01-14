"use strict";

console.log('Задание 1');

let arr = [
	function func1() { return 1 },
	function func1() { return 2 },
	function func1() { return 3 }
];

console.log(arr[2]());

console.log(arr[0]() + arr[1]() + arr[2]());

for (let elem of arr) {
	console.log(elem());
}