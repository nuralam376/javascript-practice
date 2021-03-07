var variable = "la";

if (true) {
  var varVariable = "varVariable";
  //   var varVariable = "var again";
}
console.log(varVariable);

if (true) {
  let letVariable = "letVariable";
  //   let letVariable = "as";
}

let letVariable = "let";
console.log(letVariable);

var a = 20;
function f() {
  a = 30;
  console.log(a);
}

console.log(a);
f();

if (true) {
  const constVariable = "as";
  //   constVariable = "as";
  const obj = {
    name: "name",
  };

  obj = {
    name: "new",
  };

  obj.name = "asdf";
  console.log(obj);
}
