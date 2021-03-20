const takeOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Take Order from " + customer);
      // callback(customer);
    }, 2000);
  });
};

const processOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Process order for ${customer}`);
      // callback(customer);
    }, 2000);
  });
};

const completeOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Completed");
    }, 2000);
  });
};

// takeOrder("Abc", (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer, () => {
//       console.log("Done");
//     });
//   });
// });

async function* solution(customer) {
  yield await takeOrder(customer);
  yield await processOrder(customer);
  yield await completeOrder(customer);
}

const iterator = solution("Abc");

// iterator.next().then((value) => console.log(value.value));
// iterator.next().then((value) => console.log(value.value));
// iterator.next().then((value) => console.log(value.value));

const promises = [iterator.next(), iterator.next(), iterator.next()];

(async function () {
  for await (let p of promises) {
    console.log(p.value);
  }
})();
