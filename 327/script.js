"use strict";

console.log('Задание 1');

let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 0, 10);

console.log((date2 - date1) / 1000 / 60 / 60 / 24);

console.log('Задание 2');

let date3 = new Date(now.getFullYear(), now.getMonth(), 20);
let date4 = new Date(now.getFullYear(), now.getMonth() + 1, 10);

console.log((date4 - date3) / 1000 / 60 / 60 / 24);