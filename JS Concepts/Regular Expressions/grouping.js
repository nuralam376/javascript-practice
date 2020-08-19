let str;
let re;

re = /^[0-9]{5}/i;
re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;
re = /([0-9]x){3}/;

str = "01998291278";
str = "+8801918929192";
str = "2x3x8x";

console.log(re.exec(str));
testRe(re, str);

function testRe(re, str) {
	if (re.test(str)) {
		console.log(`${re} matches with ${str}`);
	} else {
		console.log(`${re} does not match with ${str}`);
	}
}
