function isEven(number) {
	if (number % 2 == 0) {
		console.log(number + " is a even number");
	} else {
		console.log(number + " is a odd number");
	}
}

function iterateNumbers(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		let element = numbers[i];
		isEven(element);
	}
}

let numbers = [2, 34, 6, 19, 89];
let ages = [29, 19, 39, 20, 32];

iterateNumbers(numbers);
iterateNumbers(ages);
