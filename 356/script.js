"use strict";

console.log('Задание 1');

let elems = document.querySelectorAll('.elem');
let elems1 = document.querySelectorAll('.elem1');
let nums = document.querySelectorAll('.num');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

let par1 = document.querySelector('#par1');

function func1() {
    for (let elem of elems) {
        elem.textContent = 'text';
    }
}

function func2() {
    for (let i = 0; i < elems1.length; i++) {
        elems1[i].textContent += (i+1);
    }
}

function func3() {
    let sum = 0;
    for (let num of nums) {
        sum += +num.value;
    }
    par1.textContent = sum;
}

button1.addEventListener('click', func1);
button2.addEventListener('click', func2);
button3.addEventListener('click', func3);