let i = 0;

while (i < 5) {
	console.log(i);
	i++;
}

do {
	console.log("End", i);
	i++;
} while (i < 5);

i = 1;
let sum = 0;
let product = 1;

while (i < 10) {
	sum += i;
	product *= i;
	i++;
}

console.log("Sum", sum);
console.log("Product", product);
