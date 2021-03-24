const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.filter((number, index, array) => {
  console.log(index);
  console.log(array);
  return number > 6;
});

console.log(result);
console.log(numbers);
