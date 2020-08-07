var numbers = [45, 78, 98, 28, 17, 36, 85];

function maxArray() {
	var sum = 0;

	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	console.log("Sum is ", sum);
}

maxArray(numbers);
