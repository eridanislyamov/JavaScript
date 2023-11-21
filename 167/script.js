"use strict";

console.log("Задание 1");

for (let i = 1; i <= 100; i++) {
	console.log(i);
}

console.log("Задание 2");

for (let i = 100; i >= 1; i--) {
	console.log(i)
}

console.log("Задание 3");

for (let i = 2; i <= 100; i+=2) {
	console.log(i);
}

console.log("Задание 4");

let arr4 = [];

for (let i = 1; i <= 10; i++) {
	arr4.push('x');
}

console.log(arr4);

console.log("Задание 5");

let arr5 = [];

for (let i = 1; i <= 10; i++) {
	arr5.push(i);
}

console.log(arr5);

console.log("Задание 6");

let arr6 = [6, 3, 8, -5, 11, 5, 2];

console.log(arr6);

for (let elem of arr6) {
	if (elem > 0 && elem < 10) {
		console.log(elem);
	}
}

console.log("Задание 7");

let arr7 = [6, 3, 8, -5, 11, 5, 2];

console.log(arr7);

let flag = false;

for (let elem of arr7) {
	if (elem == 5) {
		flag = true;
	}
}

console.log(flag);

console.log("Задание 8");

let arr8 = [6, 3, 8, -5, 11, 5, 2];

console.log(arr8);

let sum8 = 0;

for (let elem of arr8) {
	sum8 += elem;
}

console.log(sum8);

console.log("Задание 9");

let arr9 = [6, 3, 8, -5, 11, 5, 2];

console.log(arr9);

let sum9 = 0;

for (let elem of arr8) {
	sum9 += elem ** 2;
}

console.log(sum9);

console.log("Задание 10");

let arr10 = [6, 3, 8, -5, 11, 5, 2];

console.log(arr10);

let sum10 = 0;

for (let elem of arr10) {
	sum10 += elem;
}

console.log(sum10 / arr10.length);

console.log("Задание 11");

let num11 = 7;
let res11 = 1;

for (let i = 1; i <= num11; i++) {
	res11 *= i;
}

console.log(res11);

console.log("Задание 12");

let arr12 = [];

for (let i = 10; i >= 1; i--) {
	arr12.push(i);
}

console.log(arr12);

console.log("Задание 13");

let arr13 = [-9, 6, -1, 3, 8, -5, -7, 11, 5, 2];
let sum13 = 0;

console.log(arr13);

for (let elem of arr13) {
	if (elem > 0) {
		sum13 += elem;
	}
}

console.log(sum13);

console.log("Задание 14");

let arr14 = [10, 20, 30, 50, 235, 3000];

console.log(arr14);

for (let elem of arr14) {
	let str = String(elem);

	if (str[0] == '1' || str[0] == '2' || str[0] == '5') {
		console.log(elem);
	}
}

console.log("Задание 15");

let arr15 = [10, 20, 30, 50, 235, 3000];

console.log(arr15);

for (let i = arr15.length-1; i >= 0; i --) {
	console.log(arr15[i]);
}

console.log("Задание 16");

let arr16 = [7, 1, 5, -2, 4, 5];

console.log(arr16);

for (let i = 0; i < arr16.length; i++) {
	if (i == arr16[i]) {
		console.log(i);
	}
}

console.log("Задание 17");

let arr17 = [7, 1, 5, -2, 4, 5];

console.log(arr17);

for (let elem of arr17) {
	document.write(elem + '</br>');
}

console.log("Задание 18");

let arr18 = [7, 1, 5, -2, 4, 5];

console.log(arr18);

for (let elem of arr17) {
	document.write('<p>' + elem + '</p>');
}

console.log("Задание 19");

let arr19 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let elem of arr19) {
	if (elem == 'Saturday' || elem == 'Sunday') {
		document.write('<b>' + elem + '</b></br>');
	} else {
		document.write(elem + '</br>');
	}
}

document.write('<p></p>');

console.log("Задание 20");

let arr20 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = 'Tuesday';

for (let elem of arr20) {
	if (elem == day) {
		document.write('<i>' + elem + '</i></br>');
	} else {
		document.write(elem + '</br>');
	}
}

console.log("Задание 21");

let obj21 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

console.log(obj21);

for (let key in obj21) {
	obj21[key] = Math.round(obj21[key] * 1.1);
}

console.log(obj21);

console.log("Задание 22");

let obj22 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

console.log(obj22);

for (let key in obj22) {
	if (obj22[key] <= 400) {
		obj22[key] = Math.round(obj22[key] * 1.1);
	}
}

console.log(obj22);

console.log("Задание 23");

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj23 = {};

for (let i = 0; i < arr1.length; i++) {
	obj23[arr1[i]] = arr2[i];
}

console.log(obj23);

console.log("Задание 24");

let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumk = 0;
let sumv = 0;

console.log(obj24);

for (let key in obj24) {
	sumk += +key;
	sumv += obj24[key];
}

console.log(sumv / sumk);

console.log("Задание 25");

let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr251 = [];
let arr252 = [];

console.log(obj25);

for (let key in obj25) {
	arr251.push(key);
	arr252.push(obj25[key]);
}

console.log(arr251);
console.log(arr252);

console.log("Задание 26");

let obj26 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

console.log(obj26);

let obj261 = {};

for (let key in obj26) {
	if (String(obj26[key])[0] == '1' || String(obj26[key])[0] == '2') {
		obj261[key] = obj26[key];
	}
}

console.log(obj261);

console.log("Задание 27");

let arr27 = ['a', 'b', 'c', 'd', 'e'];
let obj27 = {};

console.log(arr27);

for (let i = 0; i < arr27.length; i++) {
	obj27[i+1] = arr27[i];
}

console.log(obj27);

console.log("Задание 28");

let arr28 = ['a', 'b', 'c', 'd', 'e'];
let obj28 = {};

console.log(arr28);

for (let i = 0; i < arr28.length; i++) {
	obj28[arr28[i]] = i + 1;
}

console.log(obj28);