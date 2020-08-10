let x = 3;
console.log(x); // 3

x = 3.14;
console.log(x); // 3.14

x = 123e5;
console.log(x); // 12300000

x = 123 * 10 ** 5;
console.log(x); // 12300000

x = "34" + "45";
console.log(x); // 3445

x = 34 + "45";
console.log(x); // 3445

x = 34 + 45 + "hello";
console.log(x); // 79hello

x = "hello" + 34 + 45;
console.log(x); // hello3445

x = 187;
let y = x.toString();
console.log(y); // "187"

y = x.toString(2);
console.log(y); // 101110111

y = x.toString(8);
console.log(y); // 273

x = 0xbb;
console.log(x); // 187

let z = y.toString(16);
console.log(z); // 273

x = 3.1415;
y = x.toPrecision(2);
console.log(y); // 3.1

y = x.toFixed(2);
console.log(y); // 3.14

x = "3.1416";
y = parseInt(x);
console.log(y); // 3

y = parseFloat(x);
console.log(y); // 3.1416

y = parseFloat(x.toString());
console.log(y); // 3.1416

x = "34" - "2";
console.log(x); // 32

x = "3124xaa";
console.log(isNaN(x)); // true

x = "123";
console.log(isNaN(x)); // false

x = 123 / 0;
console.log(x); // infinity
