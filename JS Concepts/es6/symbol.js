let a = Symbol();
let b = Symbol();

console.log(a, b);
console.log(a == b); // false

const person = {
	name: "Lorem",
	age: 29,
	[a]: "Hello",
};

console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));

for (let x in person) {
	console.log(x);
}
