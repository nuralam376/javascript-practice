var test = "tgashas";
var test1 = Symbol.for("Hello");
var object = {
  name: "Abc",
  age: 23,
  [test]: "as",
  [test1]: "a",
};

console.log(object);
