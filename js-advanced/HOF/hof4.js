const languages = ["JavaScript", "Python", "PHP", "C"];

function mapArray(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const newArray = mapArray(languages, function (lang) {
  return lang.length;
});

console.log(newArray);
