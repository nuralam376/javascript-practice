const takeOrder = (customer, callback) => {
  console.log(`Take Order from ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Processing order from ${customer}`);

  setTimeout(() => {
    console.log("Cooking Completed");
    console.log("Processing Completed");
    callback(customer);
  }, 3000);

  console.log("Processing done");
};

const completeOrder = (customer) => {
  console.log(`Order completed for ${customer}`);
};

takeOrder("customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
