setTimeout(function () {
	console.log("Hello World");
}, 2000);

const persons = [
	{
		firstName: "Abc",
		lastName: "Def",
		age: 23,
	},
	{
		firstName: "Lorem",
		lastName: "Ipsum",
		age: 30,
	},
];

function createPerson(person, callback) {
	setTimeout(function () {
		persons.push(person);
		callback();
	}, 4000);
}

function getPerson() {
	let output = "";

	setTimeout(() => {
		persons.forEach((person) => {
			output += `<h2>${person.firstName}</h2>`;
		});
		document.getElementById("output").innerHTML = output;
	}, 2000);
}

createPerson({ firstName: "Dolor", lastName: "Amet", age: 35 }, getPerson);
// getPerson();
