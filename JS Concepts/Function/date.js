let date = new Date(); // 2020-08-15T12:08:51.550Z
let val = date;
val = date.getDay(); // 6
val = date.getMonth(); // 7
val = date.getFullYear(); // 2020

val = new Date("08-08-1998"); // 1998-08-07T18:00:00.000Z

val = new Date("09-19-1987 11:22:22"); // 1987-09-19T05:22:22.000Z

val = date.getHours(); // 18
val = date.getMinutes(); // 14
val = date.getSeconds(); // 22
val = date.getTime(); // 1597493678084
val = new Date(1597493678084); // 2020-08-15T12:14:38.084Z

val = new Date();
val.setMonth(2);
val.setYear(2021);
val.setDate(8);
val.setHours(19);

console.log(val);
