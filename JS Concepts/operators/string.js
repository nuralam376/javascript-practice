const line1 = "Hello";
const line2 = "World";

let result = line1 + line2;
console.log(result); // HelloWorld

result = line1 + " " + line2;
console.log(result); // Hello World

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

result = line1 + "\n" + line2;
console.log(result); // Hello
// World

result = line1 + "\t" + line2;
console.log(result); // Hello   World

result = "Hello ''''' World";
console.log(result); // Hello '''' World

result = 'Hello """"" World';
console.log(result); // Hello """""" World

result = line1.length;
console.log(result); // 5

result = "World".length;
console.log(result); // 5

result = line1.toUpperCase();
console.log(result); // HELLO

result = line2.toLowerCase();
console.log(result); // world

result = "         Hello      ".trim();
console.log(result); // Hello

result = line1.slice(1, 3);
console.log(result); // el

result = line2.slice(-3, -1);
console.log(result); // rl

result = line1.substr(3, 2);
console.log(result); // lo

result = line1.concat(line2, "!", "!!");
console.log(result); // HelloWorld!!!

result = line2[2];
console.log(result); // r

result = line2.replace("rld", "Hello");
console.log(result); // WoHello
