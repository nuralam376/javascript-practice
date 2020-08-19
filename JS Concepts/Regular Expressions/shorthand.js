let str;
let re;

re = /\w/; // alpha numeric character
re = /\W/;
re = /\w+/;
re = /\W+/;
re = /\d/; // digit
re = /\D/; // NOn digit
re = /\d+/;
re = /\D+/;
re = /\s/; //space
re = /\S/; // Non space
re = /hello\b/; //boundary

re = /x(?=yz)/;
re = /x(?!yz)/;

str = "hjhjkh1212k";
str = "&^%";
str = "hyyas";
str = "12121";
str = "12as";
str = " ";
str = "hello12";
str = "asqwbjqxyasas";
str = "asgajshjkaxyashjahs";

console.log(re.exec(str));

testRe(re, str);

function testRe(re, str) {
	if (re.test(str)) {
		console.log(`${str} matches with ${re}`);
	} else {
		console.log(`${str} does not match with ${re}`);
	}
}
