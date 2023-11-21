"use strict";

let arr1 = [[1, 2, 3], [4, 5], [6]];
let sum1 = 0;

let arr2 = [
	[
		[1, 2], 
		[3, 4]
	], 
	[
		[5, 6], 
		[7, 8]
	]];

let sum2 = 0;

for (let arrm of arr1) {
	for (let elem of arrm) {
		sum1 += elem;
	}
}

console.log(sum1);

for (let arrx of arr2) {
	for (let arry of arrx) {
		for (let elem of arry) {
			sum2 += elem;
		}
	}
}

console.log(sum2);