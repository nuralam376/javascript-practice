class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		console.log(`${this.firstName} ${this.lastName}`);
	}

	static test() {
		console.log("This is static");
	}
}

const person = new Person("Abc", "Def");
person.greeting();
// person.test();
Person.test();
