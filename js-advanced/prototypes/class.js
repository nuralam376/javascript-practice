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
}

const abc = new Person("Abc", 25);
const def = new Person("Def", 35);

abc.play();
def.sleep();
