const a = 5;
const b = 7;
const c = 3;

if (a >= b && a >= c) {
	console.log(a + " is the largest");
} else if (b >= c) {
	console.log(b + " is the largest");
} else {
	console.log(c + " is the largest");
}

if (a >= b) {
	if (a >= c) {
		console.log(a + " is the largest");
	} else {
		console.log(c + " is the largest");
	}
} else {
	if (b >= c) {
		console.log(b + " is the largest");
	} else {
		console.log(c + " is the largest");
	}
}
