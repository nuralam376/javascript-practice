function factoryWhile(num) {
	var i = 1;
	var fact = 1;

	while (i <= num) {
		fact *= i;
		i++;
	}
	return fact;
}

console.log(factoryWhile(10));
