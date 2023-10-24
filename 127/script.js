"use strict";

let day = 56;

if (day >= 1 && day <= 10) {
    console.log('1-st decade');
} else if (day >= 11 && day <= 20) {
    console.log('2-nd decade');
} else if (day >= 21 && day <= 30) {
    console.log('3-rd decade');
} else {
    console.log('4-th decade');
}

if (day >= 1 && day <= 10) {
    console.log('1-st decade');
} else if (day >= 11 && day <= 20) {
    console.log('2-nd decade');
} else if (day >= 21 && day <= 30) {
    console.log('3-rd decade');
} else if (day == 31) {
    console.log('4-th decade');
} else {
    console.log('Error, ' + day + ' days can\'t be in month!');
}