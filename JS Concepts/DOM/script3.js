let lists = document.getElementsByClassName("sample-class");
lists[0].style.background = "black";
lists[0].style.color = "white";
lists[0].style.padding = "25px";
lists[0].style.fontSize = "40px";

lists = document.getElementsByTagName("ol");
lists = document.querySelector("ol").getElementsByTagName("li");

const lis = Array.from(lists);

lis.forEach((li) => {
	li.style.color = "coral";
});

lists = document.querySelectorAll("ul li");

list = document.querySelector("ul li:nth-child(4)");
console.log(list);
