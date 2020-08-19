console.log("Before Error");

try {
	test();
} catch (err) {
	console.log(err.message);
	console.log(err.name);
}

let a = 2;

try {
	undefined.test();
	if (a < 5) throw "too small";
	if (a > 15) throw "too big";
} catch (err) {
	console.log(err.name);
} finally {
	console.log("Finally executed");
}

console.log("After Error");
