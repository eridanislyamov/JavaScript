"use strict";

console.log('Задание 1');

let now = new Date();

let date1 = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log(date1.getDay());

let date2 = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(date2.getDay());