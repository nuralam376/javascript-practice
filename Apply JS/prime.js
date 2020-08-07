function checkPrime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return "Not a prime number";
		}
		return "Prime Number";
	}
}

var result = checkPrime(199);
console.log(result);
