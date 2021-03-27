const set = new Set();

set.add(5);
set.add(6);

for (let element of set) {
  console.log(element);
}

const array = [1, 2, 3, 4, 5, 6, 5];

const set2 = new Set(array);

console.log(set2);
console.log([...new Set(array)]);
console.log(Array.from(new Set(array)));
