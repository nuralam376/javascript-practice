function isEven(num) {
	if (num % 2 == 0) {
		return num;
	} else {
		return num * 2;
	}
}

function iterateNumbers(numbers) {
	let newNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		let element = numbers[i];
		let newNumber = isEven(element);
		newNumbers.push(newNumber);
	}
	return newNumbers;
}

let numbers = [2, 3, 19, 28, 38, 36];
let modifiedNumbers = iterateNumbers(numbers);
console.log(modifiedNumbers);
