const div = document.createElement("div");

div.className = "todo";
div.setAttribute("id", "done");
div.textContent = "test";

const todos = document.querySelector(".todo-list");
const h2 = document.querySelector("h2");

// todos.insertBefore(div, h2);

// todos.append(div);
// todos.append("hello");

const a = todos.appendChild(div);
const b = todos.append(div);

console.log(a);
console.log(b);
todos.append(div, "Hello2");
todos.appendChild(div, "World");
