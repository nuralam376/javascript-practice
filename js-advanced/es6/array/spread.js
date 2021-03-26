const numbers = [1, 2, 3, 4, 5];

// const a = numbers;
const a = [...numbers];

numbers.push(6);

console.log(a);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [2, 3, 4, 5, 6];

const numbers3 = [...numbers1, ...numbers2];

console.log(numbers3);

const obj = {
  x: 1,
  y: 2,
};

const newObject = {
  z: 3,
  ...obj,
};

console.log(newObject);
