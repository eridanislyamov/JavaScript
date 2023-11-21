"use strict";

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];

console.log("Задание 1");

for(let i = 0; i < arr1.length; i++) {
	arr1[i] = arr1[i] ** 2;
}

console.log(arr1);

console.log("Задание 2");

for(let i = 0; i < arr2.length; i++) {
	arr2[i] = arr2[i]  - 1;
}

console.log(arr2);

console.log("Задание 3");

for(let i = 0; i < arr3.length; i++) {
	arr3[i] = arr3[i]  + 10;
}

console.log(arr3);