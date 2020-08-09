function doSomething() {
	console.log("Doing....");
}

console.log(1);
doSomething();
setTimeout(doSomething);
setTimeout(function () {
	console.log("Done");
}, 1000);

setInterval(() => {
	console.log("Continue....");
}, 1000);
console.log(2);
console.log(3);
