function bankAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}

const result = bankAccount(10000);

console.dir(result);
// console.log(balance);
