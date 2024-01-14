"use strict";

console.log('Задание 1');

let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);

let diff1 = date2.getTime() - date1.getTime();

console.log(diff1 / 1000 / 60 / 60 / 24);

let now = new Date();
let birth = new Date(2005, 6, 2);

let diff2 = now.getTime() - birth.getTime();

console.log(diff2 / 1000 / 60 / 60 / 24 / 30);