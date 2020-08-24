const persons = [
	{
		name: "Abc",
		age: 29,
	},
	{
		name: "Lorem",
		age: 36,
	},
];

function createPerson(person) {
	const promise = new Promise((resolve, reject) => {
		persons.push(person);
		resolve();
		reject("Error");
	});
	return promise;
}

function getPersons() {
	let output = "";

	persons.forEach((person) => {
		output += `<h1>${person.name}</h1>`;
	});

	document.getElementById("output").innerHTML = output;
}

createPerson({ name: "Consectetur", age: 87 })
	.then(() => getPersons())
	.catch((err) => console.log(err));
