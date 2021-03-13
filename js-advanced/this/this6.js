var printName = function (name) {
  console.log(this);
  console.log(this.name);
};

var abc = {
  name: "Abc",
};

printName();
