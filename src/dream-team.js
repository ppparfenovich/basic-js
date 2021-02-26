const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let wrongType = true;
  let emptyArr = true;
  if (Array.isArray(members) !== true) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    let nameArr = members[i];
    if (typeof(nameArr) !== 'string') {
      wrongType = false;
      continue;
    }
    nameArr = nameArr.trim().toUpperCase();
    arr.push(nameArr[0]);
    if (arr === []) {
      emptyArr = false;
    }
  }
  let dreamteam = arr.sort().join('');
  return dreamteam || wrongType || emptyArr;
};
