"use strict";

console.log('Задание 1');

let result1 = (function() {
	return '!';
}());

console.log(result1); // '!'

console.log('Задание 2');

let result2 = (function() {
	return '!';
})();

console.log(result2); // '!'

console.log('Задание 3');

let result3 = (function() {
	return '!';
});

console.log(result3); // 'Исходный код функции'

console.log('Задание 4');

let result = (function() {
	return '!';
});

console.log(result()); // '!'