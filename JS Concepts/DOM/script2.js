let val;

val = document.getElementById("document-title");
val.style.backgroundColor = "black";
val.style.color = "white";
val.style.padding = "25px";
val.style.display = "inline-block";

val.textContent = "PL";
val.innerText = "Languages";
val.innerHTML = "<i>PL</i>";

val = document.querySelector("ol");
val = document.querySelector("ol li");
val = document.querySelector("ol li:last-child");
val = document.querySelector("ol li:nth-child(even)");
val = document.querySelector("h3").id;

console.log(val);
