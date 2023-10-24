"use strict";

let num = 56;
let sum;

if (num >= 10 && num <= 99) {
    sum = Number(String(num)[0]) + Number(String(num)[1]);
    console.log('Sum: ' + sum);
    if (sum <= 9) {
        console.log('In SUM only 1 number.')
    } else {
        console.log('In SUM 2 numbers.')
    }
}