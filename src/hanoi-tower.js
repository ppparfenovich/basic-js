const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let turnsPerSec = 3600 / turnsSpeed;

  let count = (2 ** disksNumber) - 1;
  let time = Math.floor(count * turnsPerSec);

  let game = {
    turns: count,
    seconds: time
  };

  return game;
};
