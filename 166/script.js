"use strict";

console.log("Задание 1");

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

console.log("Задание 2");

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

console.log("Задание 3");

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

console.log("Задание 4");

let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}

console.log("Задание 5");

let res5 = 0;

for (let i = 1; i <= 10; i++) {
	res5 += i;
}

console.log(res5);

console.log("Задание 6");

let res6 = 1;

for (let i = 1; i <= 10; i++) {
	res6 *= i;
}

console.log(res6);

console.log("Задание 7");

let arr7 = ['1', '2', '3', '4', '5'];
let sum7 = 0;

for (let elem of arr7) {
	sum7 += +elem;
}

console.log(sum7); // должно вывести 15

console.log("Задание 8");

let arr8 = ['1', '2', '3', '4', '5'];
let sum8 = 0;

for (let elem of arr7) {
	sum8 += +elem;
}

console.log(sum8); // должно вывести 15

console.log("Задание 9");

let arr9 = ['1', '2', '3', '4', '5'];
let sum9 = 0;

for (let elem of arr9) {
	sum9 += +elem;
}

console.log(sum9); // должно вывести 15

console.log("Задание 10");

let arr10 = ['1', '2', '3', '4', '5'];
let sum10 = 0;

for (let i = 0; i < arr10.length; i++) {
	sum10 += +arr10[i];
}

console.log(sum10);

console.log("Задание 11");

let arr11 = ['1', '2', '3', '4', '5'];
let sum11 = 0;

for (let i = 0; i <= arr11.length - 1; i++) {
	sum11 += +arr11[i];
}

console.log(sum11);

console.log("Задание 12");

let arr12 = ['1', '2', '3', '4', '5'];
let sum12 = 0;

for (let i = 0; i < arr12.length; i++) {
	sum12 += +arr12[i];
}

console.log(sum12);

console.log("Задание 13");

let arr13 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr13.length; i++) {
	arr13[i] = arr13[i] ** 2;
}

console.log(arr13);

console.log("Задание 14");

let arr14 = [];

for (let i = 1; i <= 5; i++) {
	arr14.push(i);
}

console.log(arr14);

console.log("Задание 15");

let obj15 = {a: 1, b: 2, c: 3};
let sum15 = 0;

for (let elem in obj15) {
	sum15 += obj15[elem];
}

console.log(sum15);

console.log("Задание 16");

let obj16 = {a: 1, b: 2, c: 3};
let sum16 = 0;

for (let key in obj16) {
	sum16 += obj16[key];
}

console.log(sum16);

console.log("Задание 17");

let arr17 = [1, 2, 3, 4, 5];
let res17 = '---';

for (let elem of arr17) {
	if (elem === 3) {
		res17 = '+++';
		break;
	}
}

console.log(res17);

console.log("Задание 18");

let arr18 = [];

for (let i = 1; i <= 5; i++) {
	arr18.push(i);
}

console.log(arr18);

console.log("Задание 19");

let arr19 = [1, 2, 3, 4, 5];
let res19 = false;

for (let elem of arr19) {
	if (elem === 3) {
		res19 = true;
		break;
	}
}

console.log(res19);

console.log("Задание 20");

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}

console.log("Задание 21");

let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res21 = [];

for (let elem of arr21) {
	if (elem % 2 != 0) {
		res21.push(elem);
	}
}

console.log(res21);