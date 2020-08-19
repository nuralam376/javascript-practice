let str;
let re;

// Postal Code
re = /^[0-9]{4}/;
str = 4000;

// Phone
re = /^(\+88)?01[0-9]{9}$/;
str = "01927000000";

// Email
re = /^([A-Za-z0-9\.?])+[^\.]@([0-9a-zA-Z.\?])+$/;
str = "test.13@test.com";

console.log(re.test(str));
