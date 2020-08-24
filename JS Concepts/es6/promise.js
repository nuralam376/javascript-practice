const promise = new Promise((resolve, reject) => {
	let a = 1 + 11;

	setTimeout(() => {
		if (a == 2) {
			resolve("Success");
		} else {
			reject("Failed");
		}
	}, 4000);
});

promise
	.then((message) => console.log("I am from resolved ", message))
	.catch((error) => console.log("I am from reject ", error));

console.log("Doing....");
