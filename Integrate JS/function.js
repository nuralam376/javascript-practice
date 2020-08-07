var name = "Abc";

function printName() {
	newName = "Def";
	console.log(name);
	console.log(newName);
}

printName();
console.log(newName);

(function () {
	user = "name";
	console.log("Printing...");
})();

console.log(user);
