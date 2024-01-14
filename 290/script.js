"use strict";

console.log('Задание 1');

let arr1 = [...'12345'];

console.log(arr1); // ['1','2', '3', '4', '5']

console.log('Задание 2');

let arr2 = ['a', ...'12345'];

console.log(arr2); // ['a', '1','2', '3', '4', '5']

console.log('Задание 3');

let arr3 = [...'12345', ...'56789'];

console.log(arr3); // ['1','2', '3', '4', '5', '6', '7', '8', '9']

console.log('Задание 4');

let arr41 = ['a', 'b', 'c'];
let arr42 = [...arr41, ...'12345'];

console.log(arr42); // ['a', 'b', 'c', '1','2', '3', '4', '5']