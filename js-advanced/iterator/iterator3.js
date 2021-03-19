// console.log([..."hello"]);

// console.dir(String);

String.prototype[Symbol.iterator] = function () {
  let count = this.length;
  return {
    next() {
      if (count > 0) {
        count--;
        return { done: false, value: "JS" };
      }
      return { done: true, value: undefined };
    },
  };
};

console.log([..."World"]);
