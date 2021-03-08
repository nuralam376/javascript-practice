function personMethods() {
  (eat = () => {
    console.log(`Person is eating`);
  }),
    (sleep = () => {
      console.log(`Person is sleeping`);
    });
}

let p = function (name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.eat = personMethods.eat;
  person.sleep = personMethods.sleep;
  return person;
};

let abc = p("abc", 30);
let def = p("def", 36);
console.dir(abc);
console.dir(def);
