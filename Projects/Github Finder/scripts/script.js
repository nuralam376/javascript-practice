const usernameInput = document.getElementById("username");
const search = document.getElementById("search");
const ui = new UI();

search.addEventListener("click", function () {
	const username = usernameInput.value;

	if (username.trim() == "") {
		this.clearProfile();
		alert("Username cannot be empty");
	} else {
		fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((json) => {
				if (json.message == "Not Found") {
					ui.clearProfile();
					ui.showAlert("User not found", "alert alert-danger");
				} else {
					ui.showProfile(json);
				}
			})
			.catch((error) => {
				ui.clearProfile();
				alert("Something went wrong");
				console.log("Error ", error);
			});
	}
});
