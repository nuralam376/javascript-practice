const object = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 4,
};

// console.log(object);

// for (element of object) {
//   console.log(element);
// }
// console.log({ ...object });
// console.log([...object]);

Object.prototype[Symbol.iterator] = function () {
  let entries = Object.entries(this);
  let count = entries.length;
  let index = 0;
  return {
    next() {
      if (count > 0) {
        let result = { done: false, value: entries[index][1] };
        count--;
        index++;
        return result;
      }
      return { done: true };
    },
  };
};

for (element of object) {
  console.log(element);
}

function* generator(obj) {
  let entries = Object.entries(obj);

  for (let element of entries) {
    yield element[1];
  }
}

const iterator = generator(object);

console.log(iterator.next());
