const numbers = [11, 22, -33, 44, 55, -66, 77, -88, 99];

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
	if (numbers[i] > 50) {
		break;
	}
}

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] < 0) {
		continue;
	}
	console.log(numbers[i]);
}
