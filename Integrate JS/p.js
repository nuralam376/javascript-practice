function addNumbers(num1, num2) {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		let num = arguments[i];
		sum += num;
	}

	function logInfo(message) {
		console.log("Double", double);
		console.log(message);
	}
	let double = sum * 2;
	logInfo("Hi");
	return sum;
}

const result = addNumbers(2, 3, 5, 8);
console.log(result);
