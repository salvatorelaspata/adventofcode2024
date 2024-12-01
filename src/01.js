const fs = require("fs");
// const a = [3, 4, 2, 1, 3, 3];
// const b = [4, 3, 5, 3, 9, 3];
// read 01.json file
const data = fs.readFileSync("./src/01.json", "utf8");
// parse the data
const { a, b } = JSON.parse(data);

const sortedA = a.sort();
const sortedB = b.sort();

const minA = Math.min(...sortedA);
const minB = Math.min(...sortedB);

console.log({ minA, minB });

let totalDistance = 0;
for (let i = 0; i < sortedA.length; i++) {
  // console.log(sortedA[i], sortedB[i], Math.abs(sortedA[i] - sortedB[i]));
  totalDistance += Math.abs(sortedA[i] - sortedB[i]);
}

console.log({ totalDistance });

let totalCount = 0;
a.forEach((el) => {
  const count = b.filter((elB) => elB === el).length;
  // console.log({ el, count });
  totalCount += el * count;
});

console.log({ totalCount });
