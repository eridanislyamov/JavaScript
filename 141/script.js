"use strict";

let num1 = 1;
let num2 = 2;

let num3 = '1';
let num4 = '2';

let num5 = 123;

let num6 = 123;

let num7 = 123;

let num8 = 123;
let first = String(num8)[0];

let num9 = 12;

let num10 = 12;
let str = String(num10);

let num11 = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let sum1 = Number(num11[0]) + Number(num11[2]) + Number(num11[4]);
let sum2 = Number(num11[1]) + Number(num11[3]) + Number(num11[5]);

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

if (Number(num3) + Number(num4) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

if (Number(num3) + Number(num4) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num5)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num6)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num7)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}

if (first === '1') {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num9).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num10).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num10).length == String(2)) {
	console.log('+++');
} else {
	console.log('---');
}

if (String(num10).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

if (sum1 == sum2) {
	console.log('+++');
} else {
	console.log('---');
}