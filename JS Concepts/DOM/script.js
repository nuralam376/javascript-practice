let val;

val = this;
val = window;
val = window.document;
val = document;
val = document.head;
val = document.doctype;
val = document.body;
val = document.title;
val = document.all;
val = document.all[2];
val = document.all[7];
val = document.all.length;
val = document.domain;
val = document.URL;
val = document.charset;

val = document.forms;
val = document.forms[0];
val = document.forms[0].action;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute("src");

let links = document.links;
links = Array.from(links);

links.forEach((link) => console.log(link));

console.log(document.contentType);
