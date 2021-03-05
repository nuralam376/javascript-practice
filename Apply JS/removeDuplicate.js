const str = "Bangladesh is a country";

let reverseStr = str.split("").reduce((newStr,char) => {
    return char + newStr;
},"");

console.log(reverseStr);

reverseStr = "";
for(let st of str)
{   
    reverseStr = st + reverseStr;
}

// console.log(reverseStr.split());