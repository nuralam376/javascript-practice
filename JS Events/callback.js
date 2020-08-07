function even() {
	console.log("Even");
}

function odd() {
	console.log("Odd");
}

function zero() {
	console.log("Zero");
}

function number(num, task) {
	console.log("Number", num);
	task();
}

number(1, odd);
number(2, even);
number(0, zero);
