const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	const result = element * element;
	output.push(result);
}

console.log(output);

function square(element) {
	return element * element;
}

const result = numbers.map(square);
console.log(result);

// const result2 = numbers.map(function (element, index, array) {
// 	console.log(element, index, array);
// });

const result2 = numbers.map((element) => element * element);
console.log(result2);

const result3 = numbers.filter((element) => element > 5);
console.log(result3);

const result4 = numbers.find((element) => element > 5);
console.log(result4);
