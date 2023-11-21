"use strict";

let arr1 = [];
let arr2 = [];
let arr3 = [];


for (let i = 0; i < 3; i++) {
	arr1[i] = [];

	for (let j = 1; j <= 5; j++) {
		arr1[i].push(j);
	}
}

console.log(arr1);

for (let i = 0; i < 3; i++) {
	arr2[i] = [];

	for (let j = 0; j < 4; j++) {
		arr2[i].push('x');
	}
}

console.log(arr2);

for (let i = 0; i < 3; i++){
	arr3[i] = [];

	for (let j = 0; j < 2; j++) {
		arr3[i][j] = [];

		for (let k = 1; k <= 5; k++) {
			arr3[i][j].push(k);
		}
	}
}

console.log(arr3);