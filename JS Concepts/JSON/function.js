const person = {
	name: "Abc",
	age: 29,
	salary: 20000,
};

const person_json = JSON.stringify(person);
console.log(person_json);

const student = JSON.parse(person_json);
console.log(student);
