var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);

function test() {
	var a = 4;
	let b = 5;
	const c = 6;
	console.log("Local Scope: ", a, b, c);
}

test();

if (true) {
	var a = 10;
	let b = 11;
	const c = 12;
	console.log("If Scope: ", a, b, c);
}

for (let a = 0; a < 10; a++) {
	a = 19;
}

console.log("Global Scope: ", a, b, c);
