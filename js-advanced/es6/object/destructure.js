const obj = {
  name: "JavaScript",
  estd: 1995,
  libraries: {
    // name: "React",
  },
};

const { name } = obj;

console.log(name);

const {
  libraries: { name: x = "" },
} = obj;

console.log(x);
