const processOrder = () => {
  console.log("Processing Start");
  setTimeout(() => {
    console.log("Cooking Complete");
  }, 3000);

  console.log("Processing complete");
};

console.log("Take Order");
processOrder();
console.log("Order Complete");
