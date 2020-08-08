const line1 = "Hello";
const line2 = "World";

let result = line1 + line2;
console.log(result); // HelloWorld

result = line1 + " " + line2;
console.log(result); // Hello Worl

result = 36 + 4 + "Hello";
console.log(result); // 40Hello

result = "Hello" + 36 + 4;
console.log(result); // Hello40

result = "36" + "4";
console.log(result); // 364

result = "23" - "3";
console.log(result); // 20

result = "3" * "2";
console.log(result); // 6

result = "3" - "abc";
console.log(result); // NaN
