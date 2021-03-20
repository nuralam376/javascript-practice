function range(start, end, step) {
  let current = start;

  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result = { done: false, value: current };

          if (current <= end) {
            current += step;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
}

console.log([...range(1, 10, 2)]);

function* range2(start, end, step) {
  let current = start;

  while (current <= end) {
    yield current;
    current += step;
  }
}

console.log([...range2(2, 200, 4)]);
