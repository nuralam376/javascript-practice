const lists = document.querySelector("ul");
const list = document.querySelector("ul li:first-child");
let val = lists;

val = list;

val = lists.childNodes;

val = lists.childNodes[0];
val = lists.childNodes[1];
val = lists.childNodes[0].nodeName;
val = lists.childNodes[0].nodeType;

val = lists.children;
val = lists.children[0];
val = lists.children[1];
val = lists.children[1].children[0];
val = lists.children[1].children[0].href;

val = lists.firstChild;
val = lists.firstElementChild;
val = lists.lastChild;
val = lists.lastElementChild;
val = lists.childElementCount;

val = list.parentNode;
val = list.parentElement;

val = list.parentElement.parentElement;

val = list.nextSibling;
val = list.nextElementSibling;
val = list.nextElementSibling.nextElementSibling;

val = list.previousSibling;
val = list.previousElementSibling;
console.log(val);
