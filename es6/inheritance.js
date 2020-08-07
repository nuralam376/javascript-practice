class Parent {
	constructor() {
		this.fatherName = "Parent AB";
	}
}

class Child extends Parent {
	constructor(name) {
		super();
		this.name = name;
	}

	getInformation() {
		return `${this.name} -  ${this.fatherName}`;
	}
}

const child1 = new Child("Abc");
const child2 = new Child("Def");

console.log(child1.getInformation());
console.log(child2.getInformation());
