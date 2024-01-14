"use strict";

console.log('Задание 1');

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);

let diff1 = date2 - date1;

console.log(diff1);

console.log('Задание 2');

console.log(diff1 / 1000 / 60 / 60 / 24);

console.log('Задание 3');

console.log(diff1 / 1000 / 60 / 60 / 24 / 30);

console.log('Задание 4');

console.log(diff1 / 1000 / 60 / 60 / 24 / 365);