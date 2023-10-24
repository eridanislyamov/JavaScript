"use strict";

let arr11 = [1, 2, 3];
let arr12 = arr11;

arr11[0] = 'a';
console.log(arr12); // ['a', 2, 3]

let arr21 = [1, 2, 3];
let arr22 = arr21;

arr21[0] = 'a';
arr22[1] = 'b';

console.log(arr21); // ['a', 'b', 3]

let arr31 = [1, 2, 3];
let arr32 = arr31;

arr31[0] = 'a';
arr32[0] = 'b';

console.log(arr32); // ['b', 2, 3]