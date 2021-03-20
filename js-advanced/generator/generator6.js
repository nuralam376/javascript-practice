const myAsyncIterator = {
  async *[Symbol.asyncIterator]() {
    yield "Hello";
    yield "Async";
    yield "Iterator";
  },
};

(async function () {
  for await (let x of myAsyncIterator) {
    console.log(x);
  }
})();
