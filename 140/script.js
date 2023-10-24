"use strict";

let num = 354;
let res = num % 3;

if (num % 2 == 0) {
	console.log('even');
} else {
	console.log('odd');
}

if (res == 0) {
	console.log('Divisible by 3');
} else {
	console.log('Remainder of the division ' + res);
}