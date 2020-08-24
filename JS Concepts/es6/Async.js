async function getUsers() {
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
	let users = await response.json();
	return users;
}

getUsers().then((users) => console.log("Users: ", users));
