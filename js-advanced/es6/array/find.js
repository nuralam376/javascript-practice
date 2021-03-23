const numbers = [1, 2, 3, 4, 5];

const number = numbers.find((num) => num > 4);

console.log(number);

const number2 = numbers.find(function (num, index, numbers) {
  console.log(numbers);
  return num > 4;
}, this);
