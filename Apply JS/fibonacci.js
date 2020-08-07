function fibonacci(num) {
	var fibo = [0, 1];

	for (var i = 2; i <= num; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2];
	}
	return fibo;
}

console.log(fibonacci(7));
