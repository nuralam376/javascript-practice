var person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Def",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

var abc = person("Abc", 25);

abc.printName();
abc.father.printName();
