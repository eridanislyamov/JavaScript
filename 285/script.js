"use strict";

console.log('Задание 1');

let arr = ['1', '2', '3', '4', '5', '6'];

let res1 = arr.reduce(function(sum, elem) {
	return sum + elem;
}, '');

console.log(res1);

console.log('Задание 2');

let res2 = arr.reduceRight(function(sum, elem) {
	return sum + elem;
}, '');

console.log(res2);