const date = new Date();
console.log(date);

const start = new Date();
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
	sum++;
}
const end = new Date();

console.log("Time elapsed", end - start);
