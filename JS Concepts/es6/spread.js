const colors = ["red", "green", "yellow"];
const food = ["rice", "pulse", "flour"];
const drinks = "water";

console.log([...drinks]);

const newArray = [...colors, drinks, ...food];

console.log(newArray);

const person = {
	fname: "Abc",
	lname: "Def",
};

const newPerson = { ...person, age: 29 };

console.log(newPerson);

const member = ["Lorem", "Ipsum"];

const display = (fname, lname) => {
	console.log(`Hello ${fname} ${lname}`);
};

display(member[0], member[1]);
display(...member);

let numbers = [2, 3, 19, 0, 8];

console.log(Math.max(...numbers));
