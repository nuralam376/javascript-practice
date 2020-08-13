if (true) {
	console.log("Condition is true");
} else {
	console.log("Condition is false");
}

if (false) {
	console.log("condition is true");
} else {
	console.log("condition is false");
}

let age = 20;

if (age >= 50) {
	console.log("Above 50");
} else if (age < 50 && age >= 30) {
	console.log("Under 50 but above or equal 30");
} else if (age < 30 && age >= 18) {
	console.log("Under 30 but above or equal 18");
} else if (age < 18 && age > 0) {
	console.log("Under 18 but above 0");
} else {
	console.log("Invalid age");
}
