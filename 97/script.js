"use strict";

console.log( typeof {x: 1, y: 2, z: 3} ); // object
console.log( typeof [1, 2, 3] ); // object

let arr = [1, 2, 3];
console.log( typeof arr ); // object

console.log( typeof arr[0] ); // number

let arr1 = ['1', '2', '3'];
console.log( typeof arr1[0] ); // string