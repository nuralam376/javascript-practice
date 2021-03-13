const numbers = [1, 2, 3];

const results = [];

for (let number = 0; number < numbers.length; number++) {
  results.push(numbers[number] * 2);
}

console.log(results);

const newResults = numbers.map((number) => number * 2);
console.log(newResults);
