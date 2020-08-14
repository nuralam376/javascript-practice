const number = parseInt(prompt("Enter a number:"));
let sum = 0;
let series = "";

for (let i = 1; i <= number; i++) {
	sum += i ** 2;
	series += (i ** 2).toString();
	if (i == number) break;
	series += " + ";
}

console.log(`${series} = ${sum}`);
