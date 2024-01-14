"use strict";

console.log('Задание 1');

let date = new Date(2005, 6, 2); // установим 5 ноября 2025 года
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);