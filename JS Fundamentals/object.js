const person = {
	id: 1,
	name: "Abc",
	phone: 122,
};

const propName = "name";
person.name = "Def";
person["name"] = "New Person";
person[propName] = "Another Person";

person.age = 29;

console.log(person);
