const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, 0);

console.log(result);
