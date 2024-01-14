"use strict";

console.log('Задание 1');

let now  = new Date();
let date1 = new Date(now.getFullYear() + 1, 11, 31);

console.log(date1.getDay());

console.log('Задание 2');

let date2 = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

console.log(date2.getDay());

console.log('Задание 3');

let date3 = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

console.log(date3.getDay());