"use strict";

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];

arr1.splice(1, 2);
arr2.splice(3, 0, 'a', 'b', 'c');

arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.splice(-1, 1, 5, 'e');

console.log(arr1);
console.log(arr2);
console.log(arr3);