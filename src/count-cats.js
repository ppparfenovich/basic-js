const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    arr = arr.concat(matrix[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '^^') {
      count++;
    }
  }
  return count;
};
