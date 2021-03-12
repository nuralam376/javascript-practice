class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  play() {
    console.log(`${this.name} is playing`);
  }

  get getName() {
    return this.name;
  }

  set getName(value) {
    this.setName = value;
  }

  static isEqualAge(abc, def) {
    console.log("Age");
    return abc.age === def.age;
  }

  static age() {
    return this;
  }
}

const abc = new Person("Abc", 25);
const def = new Person("Def", 35);

// abc.play();
// def.sleep();
// console.log(abc.getName);
def.getName = "New Def";
// console.log(def.getName);
console.log(def);

console.log(Person.isEqualAge(abc, def));
console.log(Person.age());
