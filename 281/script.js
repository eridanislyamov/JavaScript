"use strict";

console.log('Задание 1');

let arr1 = [-2, 1, 8, -5, -1, 11, 7, 14, -3];
let arr2 = ['qwerty', 'sdfsd', 'dfd', 'eridan'];
let res1 = arr1.filter(elem => elem > 0);

console.log(res1);

console.log('Задание 2');

let res2 = arr1.filter(elem => elem < 0);

console.log(res2);

console.log('Задание 3');

let res3 = arr1.filter(elem => elem > 0 && elem < 10);

console.log(res3);

console.log('Задание 4');

let res4 = arr2.filter(elem => elem.length > 5);

console.log(res4);

console.log('Задание 5');

let res5 = arr1.filter(function(elem, index) {
	return elem * index < 30;
});

console.log(res5);

console.log('Задание 6');

let arr3 = [1, 2, [3, 4], 5, [6, 7]];

let res6 = arr3.filter(elem => typeof elem != 'object');

console.log(res6);