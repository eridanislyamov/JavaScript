"use strict";

console.log('Задание 1');

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

console.log((now - date) / 1000 / 60 / 60);