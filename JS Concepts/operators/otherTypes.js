let a;
console.log(a); // undefined

a = null;
console.log(a); // null

console.log(null == undefined); // true
console.log(null === undefined); // false

a = "";
console.log(a); // ""

console.log(a == undefined); // false
console.log(a == null); // false
console.log(a == NaN); // false

a = "abc" / 10;
console.log(a); // NaN

console.log(a == undefined); // false
console.log(a == null); // false
