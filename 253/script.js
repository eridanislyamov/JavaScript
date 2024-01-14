"use strict";

console.log('Задание 1');

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let res1 = each([1, 2, 3, 4, 5], 
	function(num) {
		return num*2;
	}
);

console.log(res1);

console.log('Задание 2');

let res2 = each(['qwe', 'rty', 'uio', 'asd', 'fgh'], 
	function(str) {
		let res = '';
		for (let elem of str) {
			res = elem + res;
		}
		return res;
	}
);

console.log(res2);

console.log('Задание 3');

let res3 = each(['qwe', 'rty', 'uio', 'asd', 'fgh'], 
	function(str) {
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
);

console.log(res3);