console.log(false || false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || (false && true)); // true

console.log(!false); // true

console.log(5 > 4 && !(4 > 6)); // true

console.log("2" > 12); // false
console.log("2" > "12"); // true

let result = 2 > 4 ? "Hello" : "World";
console.log(result); // World
