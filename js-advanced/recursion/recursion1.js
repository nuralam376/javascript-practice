function printTotal(n) {
  if (n == 0) {
    return 0;
  }
  return printTotal(n - 1) + n;
}

console.log(printTotal(10000));

let n = 100000000000000000000000;
console.log((n * (n + 1)) / 2);

let total = 0;
for (let i = 0; i < n; i++) {
  total += i;
}

console.log(total);
