"use strict";

console.log('Задание 1');

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

console.log((date - now) / 1000 / 60 / 60);