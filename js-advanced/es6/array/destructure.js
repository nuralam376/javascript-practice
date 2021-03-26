const numbers = [1, 2, 3, 4, 5];

const [, , a, b] = numbers;

console.log(a, b);

const numbers2 = [1, 2, [3, 4, 5], 6];

const [, , [, c, d]] = numbers2;

console.log(c, d);

let f = 1,
  g = 2;

[f, g] = [g, f];

console.log(f, g);
