const arr = [1, 2, 3];
const arr1 = ["a", "b", arr];

console.log(arr1); // ["a","b",[1,2,3]]

console.log(arr1[2][1]); // 2

const obj = {
	name: "Abc",
	age: 29,
	hobbies: [
		{
			prop1: [1, 2, 3],
		},
		{
			prop2: [1, 2, 4],
		},
	],
};

console.log(obj.hobbies[0].prop1[2]); // 3

const arr2 = [
	{
		prop1: {
			arr1: [1, 2, 3],
		},
	},
	{
		prop1: {
			arr2: [2, 3, 4],
		},
	},
];

console.log(arr2[0].prop1["arr1"][0]); // 1
