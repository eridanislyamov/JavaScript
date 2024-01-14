"use strict";

console.log('Задание 1');

function func1([name, surname, department, position, salary]) {
	console.log(surname);
	console.log(salary);
}

func1( ['John', 'Smit', 'development', 'programmer', 2000] );

console.log('Задание 2');

function func2( [name, surname, ...info] ) {
	console.log(name);
	console.log(surname);
	console.log(info);
}

func2( ['John', 'Smit', 'development', 'programmer', 2000] );

console.log('Задание 3');

function func3([name, surname, department, position = 'Джуниор']) {
	console.log(position);
}

func3( ['John', 'Smit', 'development'] );

console.log('Задание 4');

function func4(department, [name, surname], [year, month, day]) {
	console.log(name);
	console.log(department);
	console.log(year);
}

func4( 'development', ['John', 'Smit'], [2018, 12, 31] );