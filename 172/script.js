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

for (let i = 0; i < arr1.length; i++) {
	for (let j = 0; j < arr1[i].length; j++) {
		sum1 += arr1[i][j];
	}
}

console.log(sum1);

for (let i = 0; i < arr2.length; i++) {
	for (let j = 0; j < arr2[i].length; j++) {
		for (let k = 0; k < arr2[i][j].length; k++) {
			sum2 += arr2[i][j][k];
		}
	}
}

console.log(sum2);