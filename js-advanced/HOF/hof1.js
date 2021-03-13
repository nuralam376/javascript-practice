function hello() {
  console.log("Hello World");
}

hello();
hello.message = "Test";
hello();
console.dir(hello);

var str = {
  name: "Abc",
};

console.dir(str);

function test() {
  return function () {
    console.log("Function Call");
  };
}

test()();
