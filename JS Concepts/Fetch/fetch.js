document.getElementById("get_Data").addEventListener("click", getData);

function getData() {
	fetch("http://api.icndb.com/jokes/random/jokes")
		.then((response) => response.json())
		.then((json) => console.log(json));
}
