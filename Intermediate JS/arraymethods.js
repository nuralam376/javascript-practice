const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const part = numbers.slice(2, 5);
console.log(part);
console.log(numbers);

const part2 = numbers.splice(2, 4, 11, 22);
console.log(part2);
console.log(numbers);

const joined = numbers.join(" - ");
console.log(joined);
