class Person {
	constructor(firstName, lastName, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}
}

const person1 = new Person("Abc", "Def", 25000);
console.log(person1);
const person2 = new Person("Ghi", "Jkl", 20000);
console.log(person2);

function OldPerson(firstName, lastName, salary) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.salary = salary;
}

const oldPerson = new OldPerson("Lorem", "Ipsum", 15000);
console.log(oldPerson);
