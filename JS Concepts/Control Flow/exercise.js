const number = prompt("Enter your number: ");
const numberInt = parseInt(number);
let grade = "";

if (numberInt < 100 && numberInt >= 80) {
	grade = "A+";
} else if (numberInt < 80 && numberInt >= 70) {
	grade = "A";
} else if (numberInt < 70 && numberInt >= 60) {
	grade = "A-";
} else if (numberInt < 60 && numberInt >= 50) {
	grade = "B";
} else if (numberInt < 50 && numberInt >= 40) {
	grade = "C";
} else if (numberInt < 40 && numberInt >= 33) {
	grade = "D";
} else if (numberInt < 33 && numberInt >= 0) {
	grade = "F";
} else {
	grade = "Invalid Input";
}

alert("Your grade is " + grade);
