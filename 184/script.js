"use strict";

console.log('Задание 1');

console.log(Math.pow(2, 10));

console.log('Задание 2');

console.log(Math.sqrt(245));

console.log('Задание 3');

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let elem of arr){
	sum += Math.pow(elem, 3);
}

console.log(Math.sqrt(sum));