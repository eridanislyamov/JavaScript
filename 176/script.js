"use strict";

console.log('Задание 1');

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
let sum = 0;


for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		sum += obj['key' + i]['key' + j];
	}
}

console.log(sum);

console.log('Задание 2');

let obj2 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj2[2][2] + ' ' + obj2[3][1]);

console.log('Задание 3');

let obj3 = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}

console.log(obj3['key1']['a'] + obj3['key1']['b'] + obj3['key1']['c']['d'] + obj3['key1']['c']['e'] + obj3['key1']['f'] + obj3['key2']['g'] + obj3['key2']['h']);