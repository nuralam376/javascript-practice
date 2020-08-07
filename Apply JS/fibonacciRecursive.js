function fibonacci(num) {
	if (num == 0) {
		return 0;
	} else if (num == 1) {
		return 1;
	}

	return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciSeries(num) {
	if (num == 0) {
		return [0];
	} else if (num == 1) {
		return [0, 1];
	} else {
		var fibo = fibonacciSeries(num - 1);
		var nextElement = fibo[num - 1] + fibo[num - 2];
		fibo.push(nextElement);
		return fibo;
	}
}

console.log(fibonacci(7));
console.log(fibonacciSeries(7));
