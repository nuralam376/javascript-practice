let a = 7;
let b = 8;

console.log(`a = ${a} and b = ${b}`);

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(`a = ${a} and b = ${b}`);
