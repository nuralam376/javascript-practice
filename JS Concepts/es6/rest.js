const fruits = ["apple", "mango", "lemon", "coconut"];

const [first, second, ...third] = fruits;

console.log(first, second, third);

const person = {
	firstName: "lorem",
	lastName: "Ipsum",
	age: 29,
};

const { firstName, ...other } = person;
console.log(firstName, other);

const numbers = [1, 2, 3, 1, 33, 12];

const display = (first, ...number) => {
	console.log(first, number);
};

display(...numbers);
