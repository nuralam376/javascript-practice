var language = {
  name: "JavaScript",
  estd: 1995,
  libraries: ["Angular", "Vue", "React"],
};

// var language2 = { ...language };
var language2 = _.cloneDeep(language);

language2.name = "Python";
language2.libraries.push("jQuery");

console.log(language);
console.log(language2);
