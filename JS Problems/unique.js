const numbers = [3, 1, 3, 4, 1, 4, 1, 4, 5, 8, 3, 1, 4];
const uniqueNumbers = [];

for (var i = 0; i < numbers.length; i++) {
	var element = numbers[i];
	var index = uniqueNumbers.indexOf(element);

	if (index == -1) {
		uniqueNumbers.push(element);
	}
}

console.log(uniqueNumbers);
