"use strict";

let test11 = {x: 1, y: 2, z: 3};
console.log(test11); // object

let test21 = {x: 1, y: 2, z: 3};
console.log(test21.x); // number

let test31 = [1, 2, 3];
console.log(test31); // object

let test41 = [1, 2, 3];
console.log(test41[1]); // number

let test51 = [1, 2, 3]; 
let test52 = 1;
console.log(test51); // object

let test61 = [1, 2, 3];
let test62 = 1;
console.log(test61[test62]); // number

// primitives - string, number, boolean, null, undefined, symbol, bigint