"use strict";

let res1 = 0;
let res2 = 0;
let res3 = 1;

console.log("Задание 1");

for (let i = 2; i <= 100; i+=2) {
	res1 += i;
}

console.log("Сумма четных чисел от 2 до 100 = " + String(res1));

console.log("Задание 2");

for (let i = 1; i <= 99; i+=2) {
	res2 += i;
}

console.log("Сумма нечетных чисел от 1 до 99 = " + String(res2));

console.log("Задание 3");

for (let i = 1; i <= 20; i++) {
	res3 *= i;
}

console.log("Произведение целых чисел от 1 до 20 = " + String(res3));