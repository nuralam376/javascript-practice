function welcomeGuest(name, greetHandler) {
	greetHandler(name);
}

function greetMorning(name) {
	console.log("Good Morning ", name);
}

function greetAfterNoon(name) {
	console.log("Good Afternoon ", name);
}

function greetEvening(name) {
	console.log("Good Evening ", name);
}

welcomeGuest("Abc", greetMorning);
welcomeGuest("Def", greetEvening);
welcomeGuest("Abc", function (name) {
	console.log(name);
});
