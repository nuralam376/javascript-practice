const countries = ["Bangladesh", "USA", "UK"];
console.log(countries); // ["Bangladesh", "USA", "Uk"]
console.log(countries.length); // 3
console.log(countries[2]); // UK

countries[1] = "America";
console.log(countries); // ["Bangladesh", "America", "Uk"]

countries[countries.length] = "China";
console.log(countries); // ["Bangladesh", "America", "Uk", "China"]
console.log(countries[9]); // undefined

const country = countries.push("Japan", "Singapore");
console.log(country); // 6
console.log(countries); //["Bangladesh", "America", "Uk", "China", "Japan","Singapore"]

const removedCountry = countries.pop();
console.log(removedCountry); // Singapore
console.log(countries); // ["Bangladesh", "America", "Uk", "China", "Japan"]

const removedFirstCountry = countries.shift();
console.log(removedFirstCountry); // Bangladesh
console.log(countries); // ["America", "Uk", "China", "Japan"]

const addCountry = countries.unshift("Bangladesh", "Germany");
console.log(addCountry); // 6
console.log(countries); // ["Bangladesh", "Germany","America", "Uk", "China", "Japan"]

const numbers = [];
numbers.push(12);
numbers.push(15);
console.log(numbers); // [12,15]

let string = "Bangladesh";
let result = string.split();
console.log(result); // ["Bangladesh"]

result = string.split("");
console.log(result); // [ 'B', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h' ]

string = "Bangladesh is a country";
result = string.split(" ");
console.log(result); // [ 'Bangladesh', 'is', 'a', 'country' ]

result = string.concat(countries);
console.log(result); // Bangladesh is a countryBangladesh,Germany,America,UK,China,Japan

result = countries.concat(string);
console.log(result); //[ 'Bangladesh','Germany','America','UK','China','Japan','Bangladesh is a country' ]

result = countries.toString();
console.log(result); //Bangladesh,Germany,America,UK,China,Japan

result = countries.join();
console.log(result); // Bangladesh,Germany,America,UK,China,Japan

result = countries.join(" "); //Bangladesh Germany America UK China Japan
console.log(result);
console.log(countries); // [ 'Bangladesh', 'Germany', 'America', 'UK', 'China', 'Japan']

result = countries.sort();
console.log(result); //[ 'America', 'Bangladesh', 'China', 'Germany', 'Japan', 'UK']
console.log(countries); // [ 'America', 'Bangladesh', 'China', 'Germany', 'Japan', 'UK']

result = countries.reverse();
console.log(result); // [ 'UK', 'Japan', 'Germany', 'China', 'Bangladesh', 'America']
console.log(countries); // [ 'UK', 'Japan', 'Germany', 'China', 'Bangladesh', 'America']
