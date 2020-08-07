function printFullName(firstName, lastName) {
	console.log(arguments);

	let fullName = "";

	for (let i = 0; i < arguments.length; i++) {
		fullName += " " + arguments[i];
	}
	return fullName;
}

const name = printFullName("Abc", "Ghi", "Def", "Mno");
console.log(name);
