var name1 = Symbol();
var name2 = Symbol();

console.log(name1 === name2);
console.log(name1);
console.log(name2);

var test1 = Symbol("Hello");
var test2 = Symbol("Hello");

console.log(test1 == test2);
console.log(test1);
console.log(test2);
console.dir(test1);
