const getData = document.querySelector("#get-data");
const sendData = document.querySelector("#send-data");

const sendRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject("Not");
      }
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      reject("Something was wrong");
    };
  });
  return promise;
};

const getDataFromServer = () => {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendDataToServer = () => {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/users",
    JSON.stringify({
      name: "Abc",
    })
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

getData.addEventListener("click", getDataFromServer);
sendData.addEventListener("click", sendDataToServer);
