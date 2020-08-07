const persons = ["Abc", "Def", "Ghi", "Jkl", "Mno", "pqr"];
persons.shift();
persons.unshift("New Person");
console.log(persons);

let parts = persons.slice(2);

console.log(parts);
console.log(persons);

parts = persons.slice(2, 5);
console.log(parts);

parts = persons.splice(2, 0, "Person1");
console.log(parts);
console.log(persons);

parts = persons.splice(3, 1, "Person2");
console.log(parts);
console.log(persons);
