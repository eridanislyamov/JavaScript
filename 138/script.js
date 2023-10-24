"use strict";

let str1 = 'atretyx';
let str2 = 'batretyx';

if (str1[0] == 'a') {
	console.log('+++');
} else {
	console.log('---');
}

if (str1[str1.length - 1] == 'x') {
	console.log('+++');
} else {
	console.log('---');
}

if ( (str2[0] == 'a') || (str2[0] == 'b') ) {
	console.log('+++');
} else {
	console.log('---');
}