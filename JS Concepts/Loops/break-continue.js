for (let i = 0; i < 5; i++) {
	if (i == 3) {
		break;
	}
	console.log(i);
}

for (let i = 0; i <= 10; i++) {
	if (i % 2 == 1) {
		continue;
	}
	console.log(i);
}

let name = "BD is a country";
let numbers = [1, 2, 3, 1, 2, 9, 8, 7];

for (let i = 0; i < name.length; i++) {
	console.log(name[i]);
}

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
