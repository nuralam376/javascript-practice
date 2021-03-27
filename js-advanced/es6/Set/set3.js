const set = new Set();

set.add({
  a: 1,
  b: 2,
});

set.add({
  a: 1,
  b: 2,
});

const object = {
  a: 2,
  b: 3,
};

set.add(object);
set.add(object);

console.log(set);
