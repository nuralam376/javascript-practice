var num3 = 5;

(function () {
  var num1 = 2;
  var num2 = 3;

  function sum() {
    return num1 + num2;
  }

  console.log(sum());
  console.dir(sum);

  var num1 = 6;
  var num2 = 7;

  console.log(sum());
  console.dir(sum);
})();
