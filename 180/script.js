"use strict";

console.log('Задание 1');

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees) {
	console.log(employee.name + ' - ' + employee.salary);
}

console.log('Задание 2');

let sum1 = 0;

for (let employee of employees) {
	sum1 += employee.salary;
}

console.log(sum1);

console.log('Задание 3');

let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let sum2 = 0;

for (let employee of employees3) {
	if (employee.age >= 30) {
		sum2 += employee.salary;
	}
}

console.log(sum2);