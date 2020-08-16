class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}
}

class Customer extends Person {
	constructor(firstName, lastName, phone, credit) {
		super(firstName, lastName);

		this.phone = phone;
		this.credit = credit;
	}

	getInfo() {
		return `${this.phone} ${this.credit}`;
	}
}

const person = new Person("Abc", "Def");
console.log(person.getFullName());
// console.log(person.getInfo());

const customer = new Customer("Lorem", "Ipsum", "01728198191", 2980);
console.log(customer.getFullName());
console.log(customer.getInfo());
