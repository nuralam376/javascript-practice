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

const completeTask = function () {
  const listItem = this.parentNode;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";
  listItem.appendChild(deleteBtn);

  completeUl.appendChild(listItem);

  const checkbox = listItem.querySelector("input[type='checkbox']");
  checkbox.remove();

  bindCompleteList(listItem, deleteTask);
};

const deleteTask = function () {
  const listItem = this.parentNode;
  listItem.remove();
};

const bindIncompleteList = function (listItem, checkboxClick) {
  const checkbox = listItem.querySelector("input[type='checkbox']");
  checkbox.onchange = checkboxClick;
};

const bindCompleteList = (listItem, deleteBtnClick) => {
  const deleteBtn = listItem.querySelector(".delete");
  deleteBtn.onclick = deleteBtnClick;
};

form.addEventListener("submit", addTask);

for (let i = 0; i < todoUl.children.length; i++) {
  bindIncompleteList(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteList(completeUl.children[i], deleteTask);
}
