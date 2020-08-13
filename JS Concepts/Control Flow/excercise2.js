console.log(
	"Choose an operation:\n1.Add\n2.Subtract\n3.Multiplication\n4.Division"
);

const num1 = prompt("Enter a number");
const num2 = prompt("Enter another number");
const operation = prompt("Enter operation from console");

const num1Int = parseInt(num1);
const num2Int = parseInt(num2);
const operationInt = parseInt(operation);

const num1Check = isNaN(num1Int);
const num2Check = isNaN(num2Int);
const operationCheck = isNaN(operationInt);
let result = null;

if (num1Check || num2Check || operationCheck) {
	alert("Invalid Input");
} else {
	switch (operationInt) {
		case 1:
			result = num1Int + num2Int;
			break;
		case 2:
			result = num1Int - num2Int;
			break;
		case 3:
			result = num1Int * num2Int;
			break;
		case 4:
			result = num1Int / num2Int;
			break;
		default:
			result = null;
			break;
	}
}

if (result == null) {
	alert("No result");
} else {
	alert("Result : " + result);
}
