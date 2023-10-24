"use strict";

let num = 345430;
let last = String(num)[String(num).length-1];

console.log(last);

// task1
if (last == '0') {
	console.log('+++');
} else {
	console.log('---');
}
	// or
if (num % 10 == 0) {
	console.log('+++');
} else {
	console.log('---');
}

// task2
if (last == '0' || last == '2' || last == '4' || last == '6' || last == '8') {
	console.log('even');
} else {
	console.log('odd');
}

	// or
if (num % 2 == 0) {
	console.log('even');
} else {
	console.log('odd');
}
