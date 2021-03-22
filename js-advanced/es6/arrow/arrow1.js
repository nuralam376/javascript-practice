function number() {
  console.log("10");
}

number(10);

const number2 = () => console.log("10");

number2();

const number3 = (num) => console.log(num);

number3(21);

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(2, 3));

const sum2 = (num1, num2) => num1 + num2;

console.log(sum2(5, 4));
