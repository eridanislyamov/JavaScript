"use strict";

console.log('Задание 1');

function sum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log(sum([1, 2, 3, 4, 5]))

console.log('Задание 2');

function division(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(division(24));

console.log('Задание 3');

function str_to_arr(str) {
	let arr = str.split('');
	return arr;
}

console.log(str_to_arr('123456'));

console.log('Задание 4');

function reverse(str) {
	let res = ''
	for (let symb of str) {
		res = symb + res;
	}
	return res;
}

console.log(reverse('123456'));

console.log('Задание 5');

function big(str) {
	let res = '';
	for (let i = 0; i < str.length; i++) {
		if (i == 0) {
			res += str[i].toUpperCase();
		} else {
			res += str[i];
		}
	}
	return res;
}

console.log(big('yutr'));

console.log('Задание 6');

function bigstr(str) {
	let res = '';
	let arr = str.split(' ');
	for (let elem of arr) {
		res += big(elem) + ' ';
	}
	return res;
}

console.log(bigstr('how are you'));

console.log('Задание 7');

function pushing(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(pushing(10));

console.log('Задание 8');

function sum1(num) {
	let str = String(num).split('');
	let sum = 0;
	for (let elem of str) {
		sum += +elem;
	}
	return sum;
}

console.log(sum1(23237));

console.log('Задание 9');

function year(num) {
	if ( num < 0 ) {
		return 'Неверный год';
	} else {
		if (num % 4 == 0) {
			return 'Високосный год';
		} else {
			return 'Невисокосный год';
		}
	}
}

console.log(year(2024));

console.log('Задание 10');

function day(sec) {
	return (sec / 60 / 60 / 24);
}

console.log(day(21600))

console.log('Задание 11');

function rand(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

console.log(rand([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log('Задание 12');

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(7));