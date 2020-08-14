const name = "Bd is a country";
const numbers = ["Lorem", "Ipsum", "Dolor"];
const person = {
	name: "Abc",
	age: 29,
	salary: 30000,
};

for (let i of name) {
	console.log(i);
}

for (let i of numbers) {
	console.log(i);
}

// for (let i of person) {
// console.log(i);
// }

for (let i in person) {
	console.log(i);
}

for (let i in name) {
	console.log(i);
	console.log(name[i]);
}

for (let i in numbers) {
	console.log(i);
	console.log(numbers[i]);
}
