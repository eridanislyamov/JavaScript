"use strict";

console.log('Задание 1');

function test(arg1, arg2, arg3) {
	return (arg1() + arg2() + arg3());
}

console.log(test(
	function() { return 1; },
	function() { return 2; },
	function() { return 3; }
));