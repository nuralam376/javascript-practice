var num1 = 2;

var sum = function () {
  var num2 = 3;
  return function () {
    return num1 + num2;
  };
};

console.dir(sum());
