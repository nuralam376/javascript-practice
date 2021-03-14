async function testPromise() {
  return "Hello  World";
}

function testAwait() {
  return Promise.resolve("Hello");
}

console.log(testPromise());
console.log(testAwait());
