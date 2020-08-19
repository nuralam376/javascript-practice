let str = "Hello World";
let re = /hello/;

console.log(str); // Hello World
console.log(re); // /Hello/
console.log(re.source); // Hello

result = re.exec(str);
console.log(result); // null
re = /hello/i;
result = re.exec(str);
console.log(result); // ["Hello", index : 0]

str = "Again hello world again";
result = re.exec(str);
console.log(result); // ["Hello",index: 6]

result = re.test(str);
console.log(result); // true

result = str.match(re);
console.log(result); // ["Hello",index: 6]

str = "World";
result = str.search(re);
console.log(result); // -1

str = "Again hello world hello";
result = str.replace(re, "hi");
console.log(result); // Again hi world hello
