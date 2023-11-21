"use strict";

let obj1 = {x: 1, y: 2, z: 3};
let obj2 = {x: 1, y: 2, z: 3};

console.log("Задание 1");

for(let key in obj1) {
	obj1[key] = obj1[key] ** 2;
}

console.log(obj1);

console.log("Задание 2");

for(let key in obj2) {
	obj2[key] = obj2[key] + 1;
}

console.log(obj2);