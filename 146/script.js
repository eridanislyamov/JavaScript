"use strict";

let i = 1;
let j = 11;
let num = Number(prompt("ВВедите число: "));
let k = 0;

while (i <= 100) {
	console.log(i);
	i++;
}

while (j <= 33) {
	console.log(j);
	j++;
}

console.log(num);
while (num < 1000) {
	num = num * 3;
	k++;
	console.log(num);
}

console.log("Количество итераций: " + String(k));