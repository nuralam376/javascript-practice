const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const union = new Set([...a, ...b]);

console.log(union);

const intersection = new Set([...a].filter((x) => b.has(x)));

console.log(intersection);

const difference = new Set([...a].filter((x) => !b.has(x)));

console.log(difference);
