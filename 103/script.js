"use strict";

let obj1 = {x: 1, y: 2, z: 3};
console.log(obj1['x']);

let obj2 = {x: 1, y: 2, z: 3};
let key2 = 'x';

console.log(obj2[key2]);

let obj3 = {x: 1, y: 2, z: 3};
let sum3 = obj3['x'] + obj3['y'] + obj3['x'];

console.log(obj3);

let obj4 = {x: 1, y: 2, z: 3};
console.log( (Object.keys(obj4) ).length);