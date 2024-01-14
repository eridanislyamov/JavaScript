"use strict";

console.log('Задание 1');

let p1 = document.querySelectorAll('.p1');
let p2 = document.querySelectorAll('.p2');

let par1 = document.querySelector('#par1');
let but1 = document.querySelector('#but1');

let nums1 = document.querySelectorAll('.num');
let but2 = document.querySelector('#but2');

let p3 = document.querySelectorAll('.p3');

let p4 = document.querySelectorAll('.p4');
let but4 = document.querySelector('#but4');

let inputs8 = document.querySelectorAll('.input8');
let but8 = document.querySelector('#but8');

let but9 = document.querySelector('#but9');
let inp91 = document.querySelector('#inp91');
let inp92 = document.querySelector('#inp92');
let inp93 = document.querySelector('#inp93');

let but10 = document.querySelector('#but10');
let par10 = document.querySelector('#par10');
let inp101 = document.querySelector('#inp101');
let inp102 = document.querySelector('#inp102');

let inp11 = document.querySelectorAll('.input11')
let but11 = document.querySelector('#but11')

let inp12 = document.querySelectorAll('.input12')
let but12 = document.querySelector('#but12')

let inp13 = document.querySelectorAll('.input13')
let but13 = document.querySelector('#but13')

let texts = [
	'text1',
	'text2',
	'text3',
];

let but14 = document.querySelector('#but14');
let input141 = document.querySelector('#input141');
let input142 = document.querySelector('#input142');
let input143 = document.querySelector('#input143');

let inp15 = document.querySelector('#input15');

for (let p of p1) {
    p.textContent += '!';
}

for (let p of p2) {
	p.addEventListener('click', function() {
		this.textContent = +this.textContent + 1;
	});
}

but1.addEventListener('click', function() {
	par1.innerHTML = '<b>' + par1.textContent + '</b>';
});

but2.addEventListener('click', function() {
	let sum = 0;
	
	for (let num of nums1) {
		sum += Number(num.textContent);
	}
	
	console.log(sum);
});

for (let p of p3) {
	p.addEventListener('click', function() {
		this.textContent += '!';
	});
}

but4.addEventListener('click', function() {
	for (let p of p4) {
		p.innerHTML = '<b>' + p.textContent +' </b>';
	}
});

but8.addEventListener('click', function() {
    let sum8 = 0;
    for (let i of inputs8) {
        sum8 += +i.value;
    }
	console.log(sum8);
});

but9.addEventListener('click', function() {
	inp93.value = +inp91.value + +inp92.value;
});

but10.addEventListener('click', function() {
	par10.textContent = +inp101.value + +inp102.value;
});

but11.addEventListener('click',function() {
	for (let i of inp11) {
		if (i.value === i.id) {
			console.log('right')
		} else {
			console.log('wrong')
		}
	}
});

for (let i = 0; i < texts.length; i++) {
    if (inp12[i].value === texts[i]) {
        console.log('right');
    } else {
        console.log('wrong');
    }
}

but13.addEventListener('click', function() {
    let sum = 0;
	for (let i of inp13) {
		sum += Number(i.value);
	}
	
	console.log(sum);
});

but14.addEventListener('click', function() {
	input143.value = +input141.value + +input142.value;
});

inp15.addEventListener('blur', function() {
	let digits = inp15.value.split('');
	let sum = 0;
	
	for (let digit of digits) {
		sum += +digit;
	}
	
	console.log(sum);
});