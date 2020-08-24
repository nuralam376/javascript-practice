const iterable = "Hello World";

let iter = iterable[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log("Printing.....");
console.log(iter.next());

let numbers = [1, 2, 3, 1, 4, 7];

iter = numbers[Symbol.iterator]();

console.log(iter.next());

function customIterator(arr) {
	let i = 0;

	return {
		next: function () {
			return i < arr.length
				? { value: arr[i++], done: false }
				: { value: undefined, done: true };
		},
	};
}

let newNumber = customIterator(iterable);
console.log(newNumber.next());
console.log(newNumber.next().value);
