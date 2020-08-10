const student = {
	name: "Abc",
	age: 20,
};

console.log(student["name"]);
student.age = 29;
console.log(student);
delete student.age;
console.log(student);

const person = {};

person.name = "Abc";
person.age = 35;

console.log(person);
