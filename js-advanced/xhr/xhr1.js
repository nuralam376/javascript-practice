const getData = document.querySelector("#get-data");

const getDataFromServer = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
};

getData.addEventListener("click", getDataFromServer);
