const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let doubleArr = arr;
  let newArr = [];
  if (Array.isArray(doubleArr) !== true) {
    throw 'THROWN';
  }
  for (let i = 0; i < doubleArr.length; i++) {
    if (doubleArr[i] === '--double-prev') {
      newArr.push(doubleArr[i - 1])
    } else if (doubleArr[i] === '--double-next') {
      newArr.push(doubleArr[i + 1])
    } else if (doubleArr[i] === '--discard-prev') {
      newArr.pop()
    } else if (doubleArr[i] === '--discard-next') {
      i++
    }
  }
  return newArr
};
