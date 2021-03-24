const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.findIndex((number, index, array) => !(number % 2));

console.log(result);

const result2 = numbers.findIndex((number, index, array) => {
  return number > 6;
}, this);

console.log(result2);
