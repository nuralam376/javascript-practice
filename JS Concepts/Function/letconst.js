var a = 1;
let b = 2;
let c = 3;

console.log("Global Scope", a, b, c); // 1 2 3

function test() {
	var a = 4;
	let b = 5;
	let c = 6;
	console.log("Function scope", a, b, c); // 4 5 6
}

test();

console.log("Global Scope", a, b, c); // 1 2 3

if (true) {
	var a = 7;
	let b = 8;
	let c = 9;
	console.log("If scope", a, b, c); // 7 8 9
}

console.log("Global Scope", a, b, c); // 7 2 3

for (var i = 0; i < 5; i++) {
	// console.log("i = ", i);
	var a = 10;
	let b = 11;
	let c = 12;
}

console.log("Global scope", a, b, c); // 10 2 3
