let str;
let re;

re = /h[ea]llo/i;
re = /^[hea]llo/;
re = /[^ha]ello/;
re = /[A-Z]ello/;
re = /[0-9]ello$/;
re = /[A-Za-z][0-9]hello/;
re = /[^0-9]ello/;
re = /^[0-9]ello/;
re = /^[0-9][0-9][0-9]ello/;
re = /[0-9]/;

str = "el2lo";

console.log(re.exec(str));
testRe(re, str);

function testRe(re, str) {
	if (re.test(str)) {
		console.log(`${re} matches with ${str}`);
	} else {
		console.log(`${re} does not match with ${str}`);
	}
}
