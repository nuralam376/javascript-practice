function message1() {
	console.log("Message1");
}

const message = () => {
	console.log("Message");
};

message();

const numbers = [1, 2, 3, 5, 1];

numbers.forEach(function (number) {
	console.log(number);
});

const printAll = (number) => {
	console.log(number);
};

numbers.forEach(printAll);

const square = numbers.map((num) => num * 2);

console.log(square);

const addition = (num) => num + num;

const add = numbers.map(addition);

console.log(add);
