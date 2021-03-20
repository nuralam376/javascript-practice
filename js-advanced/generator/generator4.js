function* sum(a, b) {
  const k = yield a + b;
  const m = yield a + b + k;

  yield a + b + k + m;
}

const iterator = sum(10, 20);

console.log(iterator.next());
console.log(iterator.next(25, 25));
console.log(iterator.next(25));
console.log(iterator.next());
