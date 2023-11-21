"use strict";

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

document.write('<hr></hr>')

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(String(i) + String(j) + ' ');
	}
}