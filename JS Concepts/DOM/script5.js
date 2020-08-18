const ol = document.querySelector("ol");
const olItem = document.createElement("li");
olItem.className = "new a-class";
olItem.id = "list-item";
olItem.setAttribute("title", "A new language");
// olItem.innerHTML = "Java";
olItem.appendChild(document.createTextNode("PHP"));
ol.appendChild(olItem);

const ul = document.querySelector("ul");
const ulItem = document.createElement("li");
const link = document.createElement("a");

link.setAttribute("href", "https://www.instagram.com");
link.appendChild(document.createTextNode("Instagram"));

ulItem.appendChild(link);
ulItem.setAttribute("title", "A new site");

ul.appendChild(ulItem);

const oldHeading = document.querySelector("h3");
const newHeading = document.createElement("h1");
newHeading.className = "sample-class";
newHeading.appendChild(document.createTextNode("New Languages"));

// const parent = oldHeading.parentElement;
const parent = document.querySelector(".container");
parent.replaceChild(newHeading, oldHeading);

const lists = document.querySelectorAll("li");
const list = document.querySelector("ul");

lists[3].remove();
lists[5].remove();
list.removeChild(lists[7]);

list.classList.add("new");
list.classList.remove("sample-class");
list.setAttribute("title", "A");

const attr = list.hasAttribute("title");
list.removeAttribute("title");

console.log(attr);
console.log(lists);
console.log(list);
