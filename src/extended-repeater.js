const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let strPlusAddition = '';
  strPlusAddition = String(str);    //глобальный объект String 

  let addition = ''; 
  if (options.addition !== undefined) {
    addition = String(options.addition);
  }

  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  let additionSeparator = '|';
  if (options.additionSeparator !== undefined) {
    additionSeparator = String(options.additionSeparator);
  }

  for (let i = 1; i <= additionRepeatTimes; i++) {
    strPlusAddition = strPlusAddition + addition
    if (i < additionRepeatTimes) {
      strPlusAddition = strPlusAddition + additionSeparator;
    } 
  }

  let result = strPlusAddition;

  let repeatTimes = 1;
  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  }
  let separator = '+'; 
  if (options.separator !== undefined) {
    separator = String(options.separator);
  }

  for (let j = 1; j <= repeatTimes; j++) {
    if (j < repeatTimes) {
      result = result + separator + strPlusAddition;
    }
  }
  return result;
};
  