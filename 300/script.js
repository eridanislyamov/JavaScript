"use strict";

console.log('Задание 1');

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let [name, surname, ...info] = arr;

console.log(info);
console.log(name);