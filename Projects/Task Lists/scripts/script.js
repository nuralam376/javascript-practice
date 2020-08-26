const form = document.querySelector("#task_form");
const taskInput = document.querySelector("#new_task");
const taskLists = document.querySelector("ul");
const clearTasks = document.getElementById("clear_tasks");
const filter = document.getElementById("filter_task");

form.addEventListener("submit", addTask);
taskLists.addEventListener("click", removeTask);
clearTasks.addEventListener("click", clearAllTasks);
filter.addEventListener("keyup", filterTasks);
document.addEventListener("DOMContentLoaded", getTasks);

function addTask(e) {
	e.preventDefault();

	if (taskInput.value == "") {
		alert("Task is empty");
		return;
	}

	setTasksLists(taskInput.value);
	storeTaskInLocalStorage(taskInput.value);
	taskInput.value = "";
}

function removeTask(e) {
	if (e.target.hasAttribute("href")) {
		if (confirm("Are you sure")) {
			const el = e.target.parentNode;
			el.remove();
			removeFromLocalStorage(el);
		}
	}
}

function clearAllTasks() {
	// taskLists.innerHTML = "";

	while (taskLists.firstChild) {
		taskLists.removeChild(taskLists.firstChild);
	}

	localStorage.clear();
}

function filterTasks() {
	const userText = filter.value.toLowerCase();

	document.querySelectorAll("li").forEach((item) => {
		const task = item.firstChild.textContent;

		if (task.toLowerCase().indexOf(userText) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}

function storeTaskInLocalStorage(task) {
	let tasks = getTasksFromLocalStorage();

	tasks.push(task);

	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
	let tasks = getTasksFromLocalStorage();

	tasks.forEach((task) => {
		setTasksLists(task);
	});
}

function getTasksFromLocalStorage() {
	let tasks;

	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	return tasks;
}

function setTasksLists(newTask) {
	const task = document.createElement("li");
	task.appendChild(document.createTextNode(newTask + " "));
	const link = document.createElement("a");
	link.setAttribute("href", "#");
	link.appendChild(document.createTextNode("X"));
	task.appendChild(link);
	taskLists.appendChild(task);
}

function removeFromLocalStorage(el) {
	let tasks = getTasksFromLocalStorage();

	let li = el;
	li.removeChild(li.lastChild);

	tasks.forEach((task, index) => {
		if (li.textContent.trim() === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem("tasks", JSON.stringify(tasks));
}
