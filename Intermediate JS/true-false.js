// Falsy - 0, false,"",undefined,null,NaN
// Truthy - "0","false"

let name = NaN;

if (name) {
	console.log("Condition is true");
} else {
	console.log("Condition is false");
}
