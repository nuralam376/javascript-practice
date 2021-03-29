const newTask = document.querySelector("#new-task");
const form = document.querySelector("form.new-task-container");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");

const createTask = (task) => {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");

  label.innerText = task;
  input.type = "checkbox";

  listItem.appendChild(input);
  listItem.appendChild(label);

  return listItem;
};

const addTask = (event) => {
  event.preventDefault();
  const listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";

  bindIncompleteList(listItem, completeTask);
};

const completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkbox = listItem.querySelector("input[type = 'checkbox']");
  checkbox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItem(listItem, deleteTask);
};

const deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

const bindIncompleteList = (taskItem, checkboxClick) => {
  let checkbox = taskItem.querySelector("input[type = 'checkbox']");
  checkbox.onchange = checkboxClick;
};

const bindCompleteItem = function (taskItem, deleteBtnClick) {
  let deleteBtn = taskItem.querySelector(".delete");
  deleteBtn.onclick = deleteBtnClick;
};

for (let i = 0; i < todoUl.children.length; i++) {
  bindIncompleteList(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  console.log(completeUl.children);
  bindCompleteItem(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
