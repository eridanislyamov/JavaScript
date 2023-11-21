"use strict";

let str = '';

console.log("Задание 1");

for (let i = 1; i <= 1000; i++) {
	str = String(i);

	console.log(str[0]);
}

console.log("Задание 2");

for (let i = 10; i <= 1000; i++) {
	str = String(i);

	console.log(Number(str[0]) + Number(str[1]));
}

console.log("Задание 3");

for (let i = 10; i <= 1000; i++) {
	str = String(i);

	if (str[0] == '1') {
		console.log(Number(str));
	}
}

console.log("Задание 4");

for (let i = 10; i <= 1000; i++) {
	str = String(i);

	if ( (Number(str[0]) + Number(str[1]) ) == 5) {
		console.log(Number(str));
	}
}