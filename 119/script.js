"use strict";

console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(+0));         // false
console.log(Boolean(null));       // false
console.log(Boolean(false));      // false
console.log(Boolean(NaN));        // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));         // false

let test1 = 1;
let test2 = 0;
let test3 = '';
let test4;
let test5 = 3 * 'a';
		
if (test1 == true) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
		
if (test2 == true) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}

if (test1 == false) {
	console.log('+++');
} else {
	console.log('---'); // сработает это 
}

if (test1 != true) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}
		
if (test3 == false) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
		
if (test4 == true) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}
		
if (test5 == true) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}