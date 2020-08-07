class Student {
	constructor(sId, sName) {
		this.id = sId;
		this.name = sName;
		this.gender = "Male";
	}
}

const student1 = new Student(1, "Abc");
const student2 = new Student(2, "def");
console.log(student1, student2);
