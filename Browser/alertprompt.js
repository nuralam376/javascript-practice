const age = prompt("What is your age?");

if (age > 18) {
	const isConfirm = confirm("Are you sure?");

	if (isConfirm) {
		alert("Allowed");
	} else {
		alert("Not Allowed");
	}
} else {
	alert("Not allowed");
}
