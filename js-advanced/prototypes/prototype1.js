const personMethods = {};

const p = function (name, age) {
  // let person = Object.create(personMethods);
  let person = Object.create(p.prototype);

  person.name = name;
  person.age = age;

  // person.eat = personMethods.eat;
  // person.sleep = personMethods.sleep;
  // person.play = personMethods.play;

  return person;
};

p.prototype = {
  eat() {
    console.log(`Person is eating`);
  },

  sleep() {
    console.log(`Person is sleeping`);
  },

  play() {
    console.log(`Person is playing`);
  },
};

// const abc = p("Abc", 30);
const def = p("Def", 35);

console.dir(p);
console.dir(def);

// const captain = {
//   name: "Abc",
//   age: 30,
//   country: "BD",
// };

// const person = Object.create(captain);
// console.log(person);
// console.log(person.name);
// console.dir(person);

// function test() {}

// console.dir(test.prototype);
