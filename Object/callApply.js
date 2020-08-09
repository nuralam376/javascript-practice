const person = {
	firstName: "Abc",
	lastName: "Def",
	salary: 20000,
	getFullName: function () {
		console.log(this);
		console.log(this.firstName, this.lastName);
	},

	getSalary: function (amount, tips, tax) {
		console.log(this);
		this.salary -= amount - tips - tax;
		return this.salary;
	},
};

// console.log(person.firstName);
// person.getFullName();
// person.getSalary(2000);
// console.log(person.salary);

const person2 = {
	firstName: "Ghi",
	lastName: "Jkl",
	salary: 15000,
};

const person3 = {
	firstName: "Lorem",
	lastName: "Ipsum",
	salary: 25000,
};

// const personSalary = person.getSalary.bind(person);
// console.log(personSalary(2000));

// const person2Salary = person.getSalary.bind(person2);
// console.log(person2Salary(3000));

// const person3Salary = person.getSalary.bind(person3);
// console.log(person3Salary(1000));

// console.log(person.salary);
// console.log(person2.salary);
// console.log(person3.salary);

person.getSalary.call(person2, 3000, 300, 30);
console.log(person2.salary);
person.getSalary.apply(person2, [1000, 100, 10]);
console.log(person2.salary);

person.getSalary.call(person3, 4000, 400, 40);
console.log(person3.salary);
person.getSalary.apply(person3, [1000, 100, 10]);
console.log(person3.salary);
