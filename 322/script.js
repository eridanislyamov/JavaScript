"use strict";

console.log('Задание 1');

function isLeap(year) {
    let date = new Date(year, 2, 0);
    return (date.getDate() == 29);
}

console.log(isLeap(2025));
console.log(isLeap(2024));
console.log(isLeap(1912));
console.log(isLeap(1814));