const map = new Map([
	["first", 10],
	["second", 20],
]);

map.set("third", 20);
console.log(map);
console.log(map.size);
console.log(map.has("first"));
console.log(map.get("third"));

for (let x of map) {
	console.log(x);
}

for (let x of map.entries()) {
	console.log(x);
}

for (let x of map.keys()) {
	console.log(x);
}

for (let x of map.values()) {
	console.log(x);
}

map.forEach((x, y) => {
	console.log(x, y);
});

for (let [x, y] of map.entries()) {
	console.log(x);
	console.log(y);
}
