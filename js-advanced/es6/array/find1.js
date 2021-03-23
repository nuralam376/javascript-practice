class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  test() {
    console.log("test");
  }

  exampleArray() {
    let array = [1, 2, 3];
    // array.find(function () {
    //   this.test();
    // }, this);

    array.find(() => {
      this.test();
    });
  }
}

const std = new Student("Abc", 29);
std.exampleArray();
