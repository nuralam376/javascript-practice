const students = [
	{ id: 1, name: "Abc" },
	{ id: 2, name: "Def" },
	{ id: 3, name: "Ghi" },
	{ id: 4, name: "Jkl" },
];

let names = [];

for (let i = 0; i < students.length; i++) {
	const element = students[i];
	const name = element.name;
	names.push(name);
}

console.log(names);

const namesMap = students.map((element) => element.name);
const ids = students.map((student) => student.id);
const bigger = students.filter((student) => student.id > 2);
const biggerOne = students.find((student) => student.id > 2);
console.log(namesMap);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
