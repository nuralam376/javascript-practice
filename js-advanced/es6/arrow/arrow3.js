const textData = document.querySelector("#text-data");

function show() {
  console.log(this.value);
  setTimeout(() => {
    console.log(`Second - ${this.value}`);
  }, 2000);
}

textData.addEventListener("keyup", () => {
  console.log(this);
});
