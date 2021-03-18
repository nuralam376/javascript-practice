const arr = [1, 2, 3];

console.log(arr.includes(2));
console.log(Array.prototype);
console.log(arr["includes"](2));

var includes = Symbol("includes example");
Array.prototype[includes] = () => {
  console.log("Symbol example");
};

arr[includes]();
