const ws = new WeakSet();

// ws.add("");
ws.add({ a: 1, b: 2 });

console.log(ws);

// for (let element of ws) {
//   console.log(element);
// }

class Test {
  constructor() {
    ws.add(this);
  }
  method() {
    if (!ws.has(this)) throw new Error("Create object first");
    return "Method";
  }
}

const test = new Test();
console.log(test.method());
// console.log(Test.prototype.method());
