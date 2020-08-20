const xmlHttpRequest = new XMLHttpRequest();

xmlHttpRequest.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		json_object(this.responseText);
	}
};

xmlHttpRequest.open("GET", "data.json", true);
xmlHttpRequest.send();

function json_object(data) {
	const persons = JSON.parse(data);

	let personData = persons.persons;

	for (person in personData) {
		let data = personData[person];

		for (let psn in data) {
			console.log(data[psn]);
		}
	}
}
