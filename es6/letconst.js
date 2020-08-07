const name = "Abc";
// name = "Def";
console.log(name);

const numbers = [12, 88];
numbers[1] = 99;
numbers.push(12);
// numbers = [12, 99, 12];
console.log(numbers);

const person = { id: 1, name: "Lorem" };
person.id = 2;
// person = { id: 2, name: "Lorem" };
console.log(person);

let sum = 0;
// for (var i = 0; i < 5; i++) {
// 	sum = sum + i;
// }

// console.log(i);

for (let i = 0; i < 5; i++) {
	sum = sum + i;
}

// console.log(i);

let age = 29;
age = 30;
console.log(29);
