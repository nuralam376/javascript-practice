// const items = document.getElementsByClassName("item");

// for (let i = 0; i < items.length; i++) {
// 	const item = items[i];
// 	item.addEventListener("click", function (event) {
// 		console.log(this);
// 		event.target.parentNode.removeChild(event.target);
// 	});
// }

const addNew = document.getElementById("addNew");
const ul = document.getElementById("my-list");

addNew.addEventListener("click", function () {
	const ul = document.getElementById("my-list");
	const li = document.createElement("li");
	li.innerText = "Brand New Item";
	ul.appendChild(li);
});

ul.addEventListener("click", function (event) {
	event.target.parentNode.removeChild(event.target);
});
