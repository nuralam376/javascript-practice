// document.querySelector(".container").style.background = "red";

function message(e) {
	let val = e;
	val = e.target;
	val = this;
	val = e.timeStamp;
	val = e.type;

	val = e.clientX;
	val = e.clientY;

	val = e.offsetX;
	val = e.offsetY;

	document.querySelector(".container").style.background = `#${e.offsetX}`;
	document.querySelector("button").style.color = `#${e.offsetY}`;
}

// document.getElementById("sample-btn").addEventListener("click", message);
// document.querySelector(".container").addEventListener("mousemove", message);
document.getElementById("name").addEventListener("keyup", function (e) {
	document.getElementById("text").innerHTML = this.value;
});
