function printPlayer(obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
}

var abc = {
  name: "Abc",
  age: 25,
};

var def = {
  name: "Def",
  age: 35,
};

printPlayer(abc);
printPlayer(def);

abc.printPlayerName();
def.printPlayerName();
