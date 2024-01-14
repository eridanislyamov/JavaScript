"use strict";

console.log('Задание 1');

let arr1 = ['abc', 'defg', 'kl', 'mn'];

let res1 = arr1.find(function(elem) {
	return elem.length != 3;
});

console.log(res1);

console.log('Задание 2');

let arr2 = [-1, 0, 3, -4, 5];

let res2 = arr2.findIndex(function (elem){
	return elem > 0;
});

console.log(res2);

console.log('Задание 3');

let res3 = arr2.findLast(function(elem) {
	return elem < 0;
});

console.log(res3);

console.log('Задание 4');

let res4 = arr2.findLastIndex(function(elem) {
	return elem < 0;
});

console.log(res4);