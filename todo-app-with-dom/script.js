// const header = document.getElementById("header");
// header.style.fontSize = "50px";
// console.log(header.textContent);
// console.log(header.innerText);
// console.log(header.innerHTML);

// const items = document.getElementById("items");
// const item = items.getElementsByClassName("item");
// console.log(item);

// for (let i of item) {
//   i.style.color = "red";
// }

// console.dir(document);
// const tags = document.getElementsByTagName("li");

// for (let element of tags) {
//   element.style.color = "blue";
// }

// const header = document.querySelector("#header");
// header.style.fontSize = "88px";

// const item = document.querySelector("li:last-child");

// item.style.color = "red";

const items = document.querySelectorAll("li");

console.log(items);

for (let element of items) {
  element.style.color = "red";
}
