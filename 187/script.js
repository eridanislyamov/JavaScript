"use strict";

console.log('Задание 1');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(10, 100));

console.log('Задание 2');

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(getRandomInt(10, 100));
}

console.log(arr);