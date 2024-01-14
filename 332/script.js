"use strict";

console.log('Задание 1');

let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

console.log((now - date1) / 1000);

console.log('Задание 2');

let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

console.log((date2 - now) / 1000);

console.log('Задание 3');

let date3 = new Date(now.getFullYear() + 1, 0, 1);

console.log((date3 - now) / 1000 / 60 / 60 / 24);

console.log('Задание 4');

let friday = 0;

for (let month = 0; month <= 11; month++) {
    let date = new Date(now.getFullYear(), month, 13);
    if (date.getDay() == 5) {
        friday++;
    }
}

console.log(friday);

console.log('Задание 5');

let year5 = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

console.log(year5.getFullYear());

console.log('Задание 6');

let date6 = new Date(now.getFullYear(), now.getMonth() + 1, 0);

console.log(date6.getDay());

console.log('Задание 7');

if (now.getFullYear() % 4 == 0) {
    console.log('Високосный год');
} else {
    console.log('Невисокосный год');
}

console.log('Задание 8');

for (let i = now.getFullYear() - 1; i >= now.getFullYear() - 5; i--) {
    if (i % 4 == 0) {
        console.log(i + ' - предыдущий високосный год');
    }
}

console.log('Задание 9');

for (let i = now.getFullYear() + 1; i <= now.getFullYear() + 5; i++) {
    if (i % 4 == 0) {
        console.log(i + ' - следующий високосный год');
    }
}