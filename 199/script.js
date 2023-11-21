"use strict";

console.log('Задание 1');

let num = 12345;
let arr = String(num).split('');

let sum1 = 0;
for (let digit of arr) {
	sum1 += Number(digit);
}

console.log(sum1);

console.log('Задание 2');

let sum2 = 0;

for (let digit of arr) {
	sum2 += Number(digit);
}

console.log(sum2);

console.log('Задание 3');

let sum3 = 0;

for (let digit of arr) {
	sum3 += Number(digit);
}

console.log(sum3);

console.log('Задание 4');

let sum4 = 0;

for (let digit of arr) {
	sum4 += Number(digit);
}

console.log(sum4);

console.log('Задание 5');

let prod = 1;
for (let digit of arr) {
	prod *= digit;
}

console.log(prod);