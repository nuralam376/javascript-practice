class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

const abc = new Cricketer("Abc", 25, "Cricketer", "BD");
abc.eat();
abc.play();

const def = new Person("Def", 35);
def.eat();
// def.play();

console.dir(abc);
