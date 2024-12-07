const fs = require("fs");

const input = fs.readFileSync("./src/04.txt", "utf-8");

// const input = `MMMSXXMASM
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX`;

const search = "XMAS";
const lineArray = input.split("\n");
const lineArrayColumn = lineArray.map((line) => line.split(""));
let count = 0;
const wordArray = [];
for (let i = 0; i < lineArrayColumn.length; i++) {
  for (let j = 0; j < lineArrayColumn.length; j++) {
    // check the first letter
    if (lineArrayColumn[i][j] !== search[0]) continue;

    if (lineArrayColumn[i].length >= j + 3) {
      const horizontal = [
        lineArrayColumn[i][j],
        lineArrayColumn[i][j + 1] || "",
        lineArrayColumn[i][j + 2] || "",
        lineArrayColumn[i][j + 3] || "",
      ].join("");

      wordArray.push(horizontal);
    }

    if (j >= 3) {
      const reverseHorizontal = [
        lineArrayColumn[i][j],
        lineArrayColumn[i][j - 1] || "",
        lineArrayColumn[i][j - 2] || "",
        lineArrayColumn[i][j - 3] || "",
      ].join("");
      wordArray.push(reverseHorizontal);
    }
    if (lineArrayColumn[i + 3]) {
      const vertical = [
        lineArrayColumn[i][j],
        lineArrayColumn[i + 1][j] || "",
        lineArrayColumn[i + 2][j] || "",
        lineArrayColumn[i + 3][j] || "",
      ].join("");
      wordArray.push(vertical);
    }
    if (i >= 3) {
      const reverseVertical = [
        lineArrayColumn[i][j],
        lineArrayColumn[i - 1][j] || "",
        lineArrayColumn[i - 2][j] || "",
        lineArrayColumn[i - 3][j] || "",
      ].join("");
      wordArray.push(reverseVertical);
    }

    if (lineArrayColumn[i + 3] && lineArrayColumn[i].length >= j + 3) {
      const diagonalRight = [
        lineArrayColumn[i][j],
        lineArrayColumn[i + 1][j + 1] || "",
        lineArrayColumn[i + 2][j + 2] || "",
        lineArrayColumn[i + 3][j + 3] || "",
      ].join("");
      wordArray.push(diagonalRight);
    }

    if (i >= 3 && j >= 3) {
      const reverseDiagonalRight = [
        lineArrayColumn[i][j],
        lineArrayColumn[i - 1][j - 1] || "",
        lineArrayColumn[i - 2][j - 2] || "",
        lineArrayColumn[i - 3][j - 3] || "",
      ].join("");
      wordArray.push(reverseDiagonalRight);
    }

    if (lineArrayColumn[i + 3] && j >= 3) {
      const diagonalLeft = [
        lineArrayColumn[i][j],
        lineArrayColumn[i + 1][j - 1] || "",
        lineArrayColumn[i + 2][j - 2] || "",
        lineArrayColumn[i + 3][j - 3] || "",
      ].join("");
      wordArray.push(diagonalLeft);
    }

    if (i >= 3 && lineArrayColumn[i].length >= j + 3) {
      const reverseDiagonalLeft = [
        lineArrayColumn[i][j],
        lineArrayColumn[i - 1][j + 1] || "",
        lineArrayColumn[i - 2][j + 2] || "",
        lineArrayColumn[i - 3][j + 3] || "",
      ].join("");
      wordArray.push(reverseDiagonalLeft);
    }

    // console.log(horizontal, vertical, diagonalRight, diagonalLeft);
  }
}
console.log(wordArray);
wordArray.forEach((diagonal) => {
  if (diagonal == search) {
    count++;
  }
});

console.log(count);
