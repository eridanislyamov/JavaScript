"use strict";

let arr1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

let arr2 = [[1, 2], [3, 4], [5, 6]];

console.log(arr1[3][2]);
console.log(arr1[1][1]);
console.log(arr1[2][0]);
console.log(arr1[0][0]);

console.log(arr2[0][0] + arr2[0][1] + arr2[1][0] + arr2[1][1] + arr2[2][0] + arr2[2][1]);