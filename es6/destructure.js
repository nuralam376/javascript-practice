const person = {
	id: 1,
	name: "Abc",
	age: 29,
	hobbies: ["Reading", "Coding", "Swimming"],
	info: {
		address: "Dhaka",
		phone: "01929738",
	},
};

const { age, hobbies } = person;

const { name } = { id: 2, name: "Def" };
console.log(age);
console.log(name);
console.log(hobbies);

const [first, ...moreHobbies] = person.hobbies;
console.log(first);
console.log(moreHobbies);

const { phone } = person.info;

console.log(phone);
