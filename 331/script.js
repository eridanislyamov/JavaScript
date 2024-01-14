"use strict";

console.log('Задание 1');

let now = new Date();
let year = now.getFullYear();

let sum = 0;

for (let i = 2000; i <= year - 1; i++) {
    let date = new Date(i, 0, 1);
    if (date.getDay() == 0 || date.getDay() == 6) {
        sum += 1;
    }
}

console.log(sum);