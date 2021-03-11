// const f = function () {};

// console.dir(f);

// Object.prototype.test = () => {
//   console.log("Testing");
// };

// f.test();

// console.dir(Object);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  Person.call(this, name, age);
  this.type = type;
  this.country = country;
}

Person.prototype = {
  play() {
    console.log(`${this.name} is playing`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

Cricketer.prototype.rest = function () {
  console.log(`${this.name} is resting`);
};

let abc = new Cricketer("Abc", 25, "Cricketer", "BD");
abc.play();
console.dir(abc);
console.dir(Cricketer);
abc.rest();
