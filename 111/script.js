"use strict";

let test1 = '3';
let test2 = '3';

let test3 = '3';
let test4 = '3';

let test5 = 3;
let test6 = '3';

let test7 = 3;
let test8 = '3';

let test9 = 3;
let test10 = 3;

if (test1 == test2) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
		
if (test3 === test4) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
		
if (test5 == test6) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
		
if (test7 === test8) {
	console.log('+++');
} else {
	console.log('---'); // сработает это
}
		
if (test1 === test2) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}