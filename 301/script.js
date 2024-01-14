"use strict";

console.log('Задание 1');

let arr = ['John', 'Smit', 'development', 'programmer'];

let [name, surname, department, position = 'trainee'] = arr;

console.log(position);
console.log(name);