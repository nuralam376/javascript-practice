const array = ["abc", "def", "ghi"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const object = {
  name: "Abc",
  age: 25,
  country: "BD",
};

const entries = Object.entries(object);

for (let i = 0; i < entries.length; i++) {
  console.log(entries[i]);
}

for (let element of array) {
  console.log(element);
}

console.dir(array);
console.dir(object);
for (let element of object) {
  console.log(element);
}
