"use strict";

console.log('Задание 1');

function day(year, month) {
    let date = new Date(year, month, 0);
    return (date.getDate());
}

console.log(day(2025, 5));