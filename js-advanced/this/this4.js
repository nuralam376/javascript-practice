var printName = function (v1, v2, v3) {
  console.log(`${this.name} has ${v1}, ${v2}, ${v3}`);
};

var abc = {
  name: "Abc",
  age: 30,
};

// abc.printName();

// printName.call(abc, "test", "test1", "test3");

var v = ["test", "test2", "test3"];
// printName.apply(abc, v);

let names = printName.bind(abc, "test", "test1", "test2");
names();
