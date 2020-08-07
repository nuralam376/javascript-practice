function setCount() {
	let count = 0;

	return function () {
		count++;
		return count;
	};
}

const count1 = setCount();
console.log(count1());
const count2 = setCount();
console.log(count2());
console.log(count2());
console.log(count1());
console.log(count2());
console.log(count1());
