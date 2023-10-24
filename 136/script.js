"use strict";

let min = 10;

if (min >= 0 && min <= 19) {
	console.log('1-st third');
} else if (min >= 20 && min <= 39) {
	console.log('2-nd third');
} else if (min >= 40 && min <= 59) {
	console.log('3-rd third');
} else {
	console.log('Error, ' + min + ' mins can\'t be in hour!');
}