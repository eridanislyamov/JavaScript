"use strict";

console.log('Задание 1');

function func1({color, width, height}) {
	console.log(color);
	console.log(height);
}

func1( {color: 'red', width: 400, height: 500} );

console.log('Задание 2');

function func1({color = 'black', width, height}) {
	console.log(color);
	console.log(height);
}

func1( {color: 'red', width: 400, height: 500} );