let str;
let re;

re = /el{2}/;
re = /el{2,3}o/;

str = "hellllo";

console.log(re.exec(str));
testRe(re, str);

function testRe(re, str) {
	if (re.test(str)) {
		console.log(`${re} matches with ${str}`);
	} else {
		console.log(`${re} does not match with ${str}`);
	}
}
