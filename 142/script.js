"use strict";

//
let month = 10;
let str = 'abcde';

//
let num = 12345;
let first = Number(String(num)[0]);

//
let num2 = 565;
let str2 = String(num2);

//
let num3 = 524562;
let str3 = String(num3);

// task1
if (month == 1 || month == 2 || month == 12) {
	console.log('Winter');
} else if (month >= 3 && month <= 5) {
	console.log('Spring');
} else if (month >= 6 && month <= 8) {
	console.log('Summer');
} else if (month >= 9 && month <= 11) {
	console.log('Autumn');
} else {
	console.log('Error, ' + month + ' month can\'t be in year!')
}

// task2
if (str[0] == 'a') {
	console.log('yes');
} else {
	console.log('not');
}

// task3
if (first >= 1 && first <= 3) {
	console.log('yes');
} else {
	console.log('not');
}

// task4
console.log(Number(str2[0]) + Number(str2[1]) + Number(str2[2]))

// task5
if ( (Number(str3[0]) + Number(str3[1]) + Number(str3[2]) ) == ( Number(str3[3]) + Number(str3[4]) + Number(str3[5])) ) {
	console.log('yes');
} else {
	console.log('not');
}