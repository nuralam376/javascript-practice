class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
	}

	getAge() {
		const birthday = new Date(this.dob);
		const diff = Date.now() - birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const person1 = new Person("Abc", "Def", "11-13-1997");
const person2 = new Person("Ghi", "Jkl", "02.18.1986");

console.log(person1.getAge());
console.log(person2.getAge());

console.log(person1.getFullName());
console.log(person2.getFullName());
