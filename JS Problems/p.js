function reverseString(string) {
	var reverse = "";

	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		reverse = char + reverse;
	}
	return reverse;
}

var string = "Hello World";
var result = reverseString(string);
console.log(result);
