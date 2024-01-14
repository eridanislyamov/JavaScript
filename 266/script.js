"use strict";

console.log('Задание 1');

let result = function() { return 1; }() + function() { return 2; }();

console.log(result); // 3