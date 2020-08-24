function Person(name, age) {
	this.name = name;
	this.age = age;
	this.getName = function () {
		console.log(this.name);
	};
}

Person.prototype.getAge = function () {
	console.log(this.age);
};

const person = new Person("Lorem", 29);
person.getName();
person.getAge();

class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getInfo() {
		console.log(`${this.name} is ${this.age} years old`);
	}
}

const student = new Student("Ipsum", 29);
student.getInfo();
