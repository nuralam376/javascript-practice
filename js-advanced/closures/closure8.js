function apiFunction(url) {
  function myFunc(res) {
    console.log(res, url);
  }
  fetch(url).then((res) => myFunc(res));

  console.dir(myFunc);
}

apiFunction("https://jsonplaceholder.typicode.com");
