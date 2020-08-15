function printName(name) {
	console.log(`${name}`);
}

printName("Abc");

function printFullName(firstName, lastName) {
	console.log(`${firstName} ${lastName}`);
}

let firstName = "Lorem";
let lastName = "Ipsum;";
printFullName("Abc");
printFullName("Abc", "Def");
printFullName(firstName, lastName);

function add(a = 0, b = 0) {
	return a + b;
}

const sum = add(3, 9);
console.log(sum);
