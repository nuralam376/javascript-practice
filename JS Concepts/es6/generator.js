function* genFunction() {
	yield 1;
	console.log("Hello");
	yield "Name";
	console.log("World");
	console.log("testing....");
	yield 2;
}

const iter = genFunction();
console.log(iter.next());
console.log(iter.next());
console.log("Outside testing....");
console.log(iter.next().value);
