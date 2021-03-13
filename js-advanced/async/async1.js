const processOrder = () => {
  console.log("Processing start");

  const currentTime = new Date().getTime();

  while (currentTime + 3000 > new Date().getTime());

  console.log("processing Completed");
};

console.log("Take Order from customer");
processOrder();
console.log("Order Completed");
