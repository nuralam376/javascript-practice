function curriedLog(date, importance, message) {
  return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${importance} ${message}`;
}

const curry = _.curry(curriedLog);

console.log(curry(new Date(), "High", "Some Debug"));
console.log(curry(new Date())("Low")("Debug message"));

const multiple = (a) => (b) => (c) => a * b * c;

console.log(multiple(1)(2)(3));
