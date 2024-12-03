const fs = require("fs");

// read 03.txt file
const input = fs.readFileSync("./src/03.txt", "utf-8");

// const input =
//   "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// create regex to match the do()
// const doRegex = /do\(\)/g;
// const doMatches = input.match(doRegex);
// console.log(doMatches);
// const dontRegex = /don't\(\)/g;
// const dontMatches = input.match(dontRegex);
// console.log(dontMatches);
// create regex to match the mul(*,*)

const mulRegex = /mul\((\d+),(\d+)\)/g;
const matches = input.match(mulRegex);

const result = matches.reduce((acc, match) => {
  const [a, b] = match.match(/\d+/g);
  return acc + parseInt(a) * parseInt(b);
}, 0);

console.log({ result });

const _do = input.split("do()");
let doResult = 0;
for (let i = 0; i < _do.length; i++) {
  const _dont = _do[i].split("don't()");
  const _input = _dont[0];
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  const matches = _input.match(mulRegex);
  const result = matches.reduce((acc, match) => {
    const [a, b] = match.match(/\d+/g);
    return acc + parseInt(a) * parseInt(b);
  }, 0);
  doResult += result;
}
console.log({ doResult });
