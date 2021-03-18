function myFunc() {
  const PVT = Symbol.for("my_private_value");

  return {
    modify(obj) {
      obj[PVT] = true;
    },
    output(obj) {
      return obj[PVT];
    },
  };
}

const value = myFunc();
const obj = { a: 1, b: 2 };

value.modify(obj);
console.log(value.output(obj));

console.log(obj);

delete obj["Symbol(my_private_value)"];

delete obj["a"];

console.log(obj);
