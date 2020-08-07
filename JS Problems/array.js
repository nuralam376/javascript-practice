var marks = [45, 81, 78, 89, 47, 57, 69];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
	var element = marks[i];
	if (element > max) {
		max = element;
	}
}

console.log("The highest value is ", max);
