const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");

const createTask = function (task) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");

  input.type = "checkbox";
  label.innerText = task;

  li.appendChild(input);
  li.appendChild(label);

  return li;
};

const addTask = function (event) {
  event.preventDefault();
  const listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";

  bindIncompleteList(listItem, completeTask);
};

const completeTask = function () {};

const bindIncompleteList = function (listItem, checkboxClick) {
  const checkbox = listItem.querySelector("input[type='checkbox']");
  checkbox.onchange = checkboxClick;
};

form.addEventListener("submit", addTask);
