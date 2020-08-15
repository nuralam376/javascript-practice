const person = {
	firstName: "Abc",
	lastName: "Def",
	salary: 20000,
	getFullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
};

console.log(person.firstName);
console.log(person.getFullName());

let str = "Abd def";
console.log(str.length);
console.log(str.split(" "));
