const name1 = "Abc";
const name2 = "Def";

function modifier(string, ...values) {
  console.log(string);
  console.log(values);
  const m = string.reduce((prev, current) => {
    return prev + current + (values.length ? "Mr. " + values.shift() : "");
  }, "");
  return m;
}

console.log(modifier`We have ${name1} and ${name2} in our team`);
