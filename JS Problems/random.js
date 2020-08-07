let number = 2.49989;
var floor = Math.floor(number);

console.log(floor);

var ceil = Math.ceil(number);
console.log(ceil);

var round = Math.round(number);
console.log(round);

var random = Math.random() * 6;
var output = Math.round(random);
console.log(output);

for (var i = 0; i < 10; i++) {
	var rand = Math.round(Math.random() * i);
	console.log(rand);
}
