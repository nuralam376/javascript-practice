/**
 * 
 *  1.Date Object:
    a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
 * 
 */

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
}

const date = "2023-06-18";
const dayOfWeek = getDayOfWeek(date);
console.log("Day of week ", dayOfWeek);

// b. Implement the function to display the day of the week for the current date.

const currentDate = new Date();
const currentDayOfWeek = getDayOfWeek(currentDate);
console.log("Current day of week ", currentDayOfWeek);


/**
 * 
 * 2.Math Object:


a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations
 * 
 */

function getSquareRootOfNumbers(numbers) {
    const numbersSum = numbers.reduce((sum, number) => sum + Math.pow(number, 2), 0);
    const squareRootNumber = Math.sqrt(numbersSum);
    return squareRootNumber;
}

const numbers = [2,3,4];
const squareRootNumber = getSquareRootOfNumbers(numbers);
console.log("square root number ", squareRootNumber);

// b. Implement the function to display the square root of the sum of squares for an array of numbers.

function displaySquareRootOfNumbers(numbers) {
    const numbersSum = numbers.reduce((sum, number) => sum + Math.pow(number, 2), 0);
    const squareRootNumber = Math.sqrt(numbersSum);
    console.log("square root number ", squareRootNumber);
}

displaySquareRootOfNumbers(numbers);