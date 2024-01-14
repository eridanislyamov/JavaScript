"use strict";

console.log('Задание 1');

let date1 = '2020-11-31';
let date2 = '2020-12-01';

if (date2 > date1) {
    console.log(date2 + ' больше');
} else if (date1 > date2) {
    console.log(date1 + ' больше');
} else {
    console.log('Даты равны');
}