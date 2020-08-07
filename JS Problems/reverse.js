function reverseString(string) {
	var reverse = "";
	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		reverse = char + reverse;
	}
	console.log(reverse);
}

var string = "This is another text.";
reverseString(string);
