"use strict";

// task1
let test1 = Boolean(3);
alert(test1); // true

// task2
let test2 = Boolean(0);
alert(test2); // false

// task3
let test3 = Boolean(-1);
alert(test3); // true

// task4
let test4 = Boolean(-0);
alert(test4); // false

// task5
let test5 = Boolean(+0);
alert(test5); // false

// task6
let test6 = Boolean('abc');
alert(test6); // true

// task7
let test7 = Boolean('');
alert(test7); // false

// task8
let test8 = Boolean('0');
alert(test8); // true

// task9
let test9 = Boolean(true);
alert(test9); // true

// task10
let test10 = Boolean(false);
alert(test10); // false

// task11
let test11 = Boolean('true');
alert(test11); // true

// task12
let test12 = Boolean('false');
alert(test12); // true

// task13
let test13 = Boolean(null);
alert(test13); // false

// task14
let test14 = Boolean('null');
alert(test14); // true

// task15
let test15 = Boolean(undefined);
alert(test15); // false

// task16
let test16 = Boolean('undefined');
alert(test16); // true

// task17
let test17 = Boolean(NaN);
alert(test17); // false

// task18
let test18 = Boolean('NaN');
alert(test18); // true

// task19
let test19 = Boolean(3 * 'abc');
alert(test19); // false

// task20
let test20 = Boolean(Infinity);
alert(test20); // true

// task21
let test21 = Boolean(1 / 0);
alert(test21); // true