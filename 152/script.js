"use strict";

let str1 = '';
let str2 = '';
let str3 = '';
let str4 = '';

console.log("Задание 1");

for (let i = 1; i <= 5; i++) {
	str1 += '-';
}

console.log(str1);

console.log("Задание 2");

for (let i = 1; i <= 9; i++) {
	str2 += i;
}

console.log(str2);

console.log("Задание 3");

for (let i = 9; i >= 1; i--) {
	str3 += i;
}

console.log(str3);

console.log("Задание 4");

for (let i = 1; i <= 9; i++) {
	str4 += ('-' + i);
	if (i == 9) {
		str4 += '-';
	}
}

console.log(str4);