globalThis.setTimeout(() => {
  console.log("Hello");
}, 2000);

let largest_number = Number.MAX_SAFE_INTEGER;
largest_number += 1;
largest_number += 1;
largest_number += 1;
largest_number = BigInt(largest_number) + 1n;
console.log(largest_number);

let javascript = {
  name: "JavaScript",
  estd: 1995,
  librarry: {
    react: {
      company: "FB",
    },
  },
};

console.log(javascript?.librarry?.react?.company);
