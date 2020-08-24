const person = {
	firstName: "Abc",
	lastName: "def",
	age: 29,
};

const fname = person.firstName;
const lname = person.lastName;
const page = person.age;

console.log(fname, lname, page);

const { firstName: fName, lastName, age } = person;

console.log(fname, lastName, age);

function display({ firstName, lastName, age }) {
	console.log(firstName, lastName, age);
}

display(person);
