"use strict";

let str1 = '1-2-3-4-5';

console.log(str1);

while (str1.includes('-')) {
    str1 = str1.replace('-', '.');
}

console.log(str1);