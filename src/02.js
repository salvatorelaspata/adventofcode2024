const fs = require("fs");

// read 02.txt file
const input = fs.readFileSync("./src/02.txt", "utf-8");
// const input = `7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9`;
const lines = input.split("\n");

let count = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const numbers = line.split(" ");
  const ascending = numbers.every((el, index, arr) => {
    if (index === 0) return true;
    return parseInt(arr[index - 1]) < parseInt(el);
  });
  const descending = numbers.every((el, index, arr) => {
    if (index === 0) return true;
    return parseInt(arr[index - 1]) > parseInt(el);
  });

  const safe = ascending || descending;
  // calculate the max distance betwen two adiacent numbers
  const safeMaxDisance = numbers.reduce((acc, el, index, arr) => {
    if (index === 0) return acc;
    const distance = Math.abs(arr[index - 1] - el);
    return Math.max(acc, distance);
  }, 0);

  if (safe && safeMaxDisance !== 0 && safeMaxDisance <= 3) count++;
}
console.log(count);
