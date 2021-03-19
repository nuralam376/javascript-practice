const array = ["Abc", "Def", "Ghi"];

const iterator = array[Symbol.iterator]();

console.dir(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
