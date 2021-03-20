// const numbers = [1, 2, 3];

// const iterator = numbers[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());

function* generator() {
  yield 1;
  yield 2;
  return "finished";
  yield 3;
  yield 4;
}

const iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* generator() {}

function* generator() {}
