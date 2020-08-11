// Primitive Numbers
// Number String Boolean

let a = 7;
let b = a;
console.log(a); // 7
console.log(b); // 7

a = 45;
console.log(a); // 45
console.log(b); // 7

// Reference Types
// Array Object
const numbers = [1, 2, 3];
const newNumbers = numbers;

console.log(numbers); // [1,2,3]
console.log(newNumbers); // [1,2,3]

numbers[1] = 500;

console.log(numbers); // [1,500,3]
console.log(newNumbers); // [1,500,3]
