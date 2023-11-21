"use strict";

console.log('Задание 1');

let obj1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum1 = 0;

for (let big_key in obj1) {
	for (let key in obj1[big_key]) {
		sum1 += obj1[big_key][key];
	}
}

console.log(sum1);

let obj2 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

let sum2 = 0;

for (let f_key in obj2) {
	for (let s_key in obj2[f_key]) {
		for (let t_key in obj2[f_key][s_key]) {
			sum2 += obj2[f_key][s_key][t_key];
		}
	}
}

console.log(sum2);