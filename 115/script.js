"use strict";

let num = 3;

if (num == 0 || num > 1 && num < 5 ) { // && - 1, || - 2: ( (num == 0) ИЛИ (1 < num < 5) )
	console.log('+++'); // сработает это
} else {
	console.log('---');
}