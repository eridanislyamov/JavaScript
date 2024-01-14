"use strict";

console.log('Задание 1');

function func() {
	return (new Date).getDate();
}

let [year = 2024, month = 1, day = func()] = arr;