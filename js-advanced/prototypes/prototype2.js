function Person(name, age) {
  //   const this = Object.create(Person.prototype);
  this.name = name;
  this.age = age;

  //   this.test = function () {
  //     console.log("testing");
  //   };
  //   return this;
}

Person.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },
  sleep() {
    console.log(`${this.name} is sleeping`);
  },
  play() {
    console.log(`${this.name} is playing`);
  },
};

const abc = new Person("Abc", 30);
abc.play();
const def = new Person("Def", 40);
def.play();

console.dir(Person);
