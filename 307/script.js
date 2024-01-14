"use strict";

console.log('Задание 1');

let options = {
	width:  400,
	height: 500,
};

let {color: c = 'black', width, height} = options;

console.log(c);