"use strict";

console.log('Задание 1');

function sum1(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res / arr.length;
}

// Неправильное название функции
// Сумму элементов списка можно сделать отдельной функцией

function sum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

function average(arr) {
	return (sum(arr) / arr.length);
}

console.log('Задание 2');

function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr1) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr2) {
		res2 += elem;
	}
	
	return res1 / res2;
}

// Неправильное название
// Код повторяется, можно сделать отдельную функцию sum

function sum_division(arr1, arr2) {
	return (sum(arr1) / sum(arr2));
}

console.log('Задание 3');

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}

// Неправильное название функции
// Значение res = 1

function multiply(arr) {
	let res = 1;
	for (let elem of arr) {
		res *= elem;
	}
	return res;
}