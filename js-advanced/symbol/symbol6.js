// var title = "JavaScript";

// console.log(title.search(/Script/));
// console.dir(String);

class Product {
  constructor(title) {
    this.title = title;
  }

  [Symbol.search](string) {
    return string.indexOf(this.title) >= 0 ? "Found" : "Not Found";
  }
}

const laptop = new Product("Laptop");

console.log("HP Laptop".search(laptop));

console.log("javascript".search("script"));
