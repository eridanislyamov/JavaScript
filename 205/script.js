"use strict";

let res1 = 0;
let res2 = 0;

console.log('Задание 1');

function cube(num) {
	return (num ** 3);
}

res1 = cube(3);

console.log(res1);

console.log('Задание 2');

function MySquare(num) {
	return ((num ** (1/2)));
}

res2 = MySquare(3) + MySquare(4);

console.log(res2);