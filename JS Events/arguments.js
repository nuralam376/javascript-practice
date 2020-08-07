function addNUmbers(a, b) {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		const element = arguments[i];
		sum += element;
	}
	console.log("A", value);
	const value = 1;
	function logInfo() {
		console.log("Logging");
	}
	return sum;
}

const sum = addNUmbers(1, 2, 9, 8);
console.log(sum);
