function printName(name) {
	console.log("Hello " + name);
}

const printName2 = function (name) {
	console.log(`Hello ${name}`);
};

const printName3 = (name) => {
	console.log(`Hello ${name}`);
};

printName("Abc");
printName2("Def");
printName3("Lorem");
