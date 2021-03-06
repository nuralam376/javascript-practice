// for (var i = 0; i < 3; i++) {
//   var f = () => {
//     console.log(i);
//   };
//   f();
// }

for (var i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  };
  setTimeout(myFunc, 3000);
  console.log(i);
  console.dir(myFunc);
}

// console.log(i);
