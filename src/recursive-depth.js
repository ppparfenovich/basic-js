const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let maxDepth = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let depth = 1;
        depth += this.calculateDepth(arr[i]);
        if (maxDepth < depth) {
          maxDepth = depth;
        }
      }
    }
    return maxDepth;
  }
};