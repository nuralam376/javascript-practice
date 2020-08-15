const numbers = [2, 3, 4, 5, 7];
const names = ["Lorem", "Ipsum", "Dolor", "Sit"];

function printNames(element, index, array) {
	console.log(element, index, array);
}
names.forEach(printNames);

const array_square = numbers.map((element, index, array) => {
	return element * element;
});

console.log(array_square);
