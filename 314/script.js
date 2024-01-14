"use strict";

console.log('Задание 1');

let date = new Date();

let week = date.getDay();

console.log(week);

if (week == 0 || week == 6) {
    console.log('Выходной день');
} else {
    console.log('Рабочий день');
}

if (week != 0) {
    console.log('До воскресенья осталось ' + (7 - week) + ' дней');
} else {
    console.log('Сегодня воскресенье');
}