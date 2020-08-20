function loadJokes() {
	const xhr = new XMLHttpRequest();
	const numberOfJokes = document.getElementById("number").value;

	xhr.onprogress = function () {
		document.getElementById("output").innerHTML = "<h1>Loading.....</h1>";
	};

	xhr.onload = function () {
		if (this.readyState === 4) {
			let response = JSON.parse(this.responseText);
			let jokes = response.value;
			let output = "<ol>";
			jokes.forEach((joke) => {
				output += `<li>${joke.joke}</li>`;
			});

			output += "</ol>";

			document.getElementById("output").innerHTML = output;
		}
	};

	xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
	xhr.send();
}
