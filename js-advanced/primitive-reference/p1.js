var a = 2;

var b = 1;

a = 3;

console.log(a);
console.log(b);

var object = {
  name: "Abc",
};

const obj = object;

obj.name = "Def";

console.log(obj);
console.log(object);

var names = ["Abc"];

var newName = names;

names.push("Def");

console.log(names);
console.log(newName);
