function log(anything) {
  return console.log(anything);
}

const array = new Array();

array[0] = 5;

console.log(array);

const set = new Set();

set.add(5);
set.add(6);
set.delete(6);
set.add(5);
log(set.has(5));
set.clear();
set.add(5).add(6).delete(5);
set.clear();
log(set);
