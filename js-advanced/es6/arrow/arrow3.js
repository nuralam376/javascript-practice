const getData = document.querySelector("#get-data");

function show() {
  console.log(this.value);
}

getData.addEventListener("click", show);
