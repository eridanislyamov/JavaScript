"use strict";

console.log('Задание 1');

let now = new Date();
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

if (now > date2) {
	console.log('Полдень уже был');
} else {
	console.log('Полдень еще не прошел');
}

console.log('Задание 2');

let date3 = new Date(now.getFullYear(), now.getMonth(), 15);

if (now > date3) {
	console.log('Уже прошло полмесяца');
} else {
	console.log('Половина месяца еще не прошла');
}