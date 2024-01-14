"use strict";

console.log('Задание 1');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr01  = ['a', ...arr1, 'b', 'c', ...arr2];

console.log(arr01); // ['a', 1, 2, 3, 'b', 'c', 4, 5, 6]

console.log('Задание 2');

let arr02  = ['a', ...arr1, ...arr1, 'b', 'c'];

console.log(arr02); // ['a', 1, 2, 3, 1, 2, 3, 'b', 'c']

console.log('Задание 3');

let arr3 = [...arr1, 4, 5, 6];

let arr03  = ['a', 'b', 'c', ...arr3];

console.log(arr03); // ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]

console.log('Задание 4');

let arr42 = [...arr1, 4, 5, 6];
let arr43 = [...arr42, 7, 8, 9];

let arr04  = [0, ...arr43];

console.log(arr04); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('Задание 5');

let arr05 = [...arr1];

console.log(arr05); // [1, 2, 3]