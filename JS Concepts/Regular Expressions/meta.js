let str;
let re;

// literal
re = /hello/;
re = /hello/i;

//meta
re = /^hello/i;
re = /world$/;
re = /^hello$/;
re = /h.llo/;
re = /h*llo/;
re = /he?a?llo/;
re = /he\?llo/;

str = "Hello World";
str = "Hello";
str = "Again hello world";
str = "hello world again";
str = "hello world";
str = "hello";
str = "hillo";
str = "haello";
str = "he?llo";

console.log(re.exec(str));
console.log(re, str);

reTest(re, str);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${re} matches with ${str}`);
	} else {
		console.log(`${re} does not match with ${str}`);
	}
}
