function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(10, 20, 30));

function curryMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

let step1 = curryMultiply(10);
console.dir(step1);
let step2 = step1(20);
console.dir(step2);
let step3 = step2(30);
console.dir(step3);
console.log(step3);
