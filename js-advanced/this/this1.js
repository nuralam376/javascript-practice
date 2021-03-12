// var printPlayerName = function (name) {
//   console.log(name);
// };

// printPlayerName("Abc");

var player = {
  name: "Abc",
  age: 35,
  printPlayerName: function () {
    console.log(this.name);
  },
};

player.printPlayerName();
