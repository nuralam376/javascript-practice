// Function Declaration
function add(num1, num2) {
	return num1 + num2;
}

const total = add(15, 17);
console.log(total);

// Function expression,statement
const doubleIt = (num) => num * 2;
const sum = (num1, num2) => num1 + num2;
const give5 = () => 5;
const calculation = (num1, num2) => {
	const sum = num1 + num2;
	const diff = num1 - num2;
	const total = sum * diff;
	return total;
};

const result = doubleIt(5);
const result2 = sum(5, 10);
const result3 = give5();
const result4 = calculation(4, 3);
console.log(result4);
