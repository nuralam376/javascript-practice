const ages = [12, 31, 23, 41];
const ages2 = [11, 22, 33, 44];
const ages3 = [23, 34, 56, 19, 28];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const abc = 650;
const def = 450;
const ghi = 120;

const result = Math.max(abc, def, ghi);
const result2 = Math.max(...ages);
console.log(result);
console.log(result2);
