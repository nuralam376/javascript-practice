const set = new Set([1, 2, 3, 1, 1]);

set.add("Hello");
set.add(11);
set.add(2);
console.log(set);
console.log(set.has(2));

// set.clear();
set.delete(2);

console.log(set);

const iter = set.entries();

console.log(iter.next());

for (let x of set.entries()) {
	console.log(x);
}

for (let x of set.keys()) {
	console.log(x);
}

for (let x of set.values()) {
	console.log(x);
}

let spread = [...set.entries()];
spread = [...set.keys()];
spread = [...set.values()];
console.log(spread);

for (let [x, y] of set.entries()) {
	console.log(x);
	console.log(y);
}
