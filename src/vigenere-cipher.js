const CustomError = require("../extensions/custom-error");

const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

  constructor(mode) {
    this.mode = mode;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error;
    }

    let messageUp = message.toUpperCase(),
        keyUp = key.toUpperCase(),
        result = [];

    if (!this.mode) {
      message = message.split('').reverse();
    }

    for (let i = 0, j = 0; i < messageUp.length; i++) {
      if (abc.includes(messageUp[i])) {
        let cipherIndex = (abc.indexOf(messageUp[i]) + abc.indexOf(keyUp[j])) % 26;
        let cipher = abc[cipherIndex];
        result.push(cipher);
        j++;

        if (j == keyUp.length) {
          j = 0;
        }
      } else {
        result.push(messageUp[i]);
      }
    }
    return result.join('');
  }

  decrypt(cipher, key) {

    if (!cipher || !key) {
      throw new Error;
    }

    let cipherUp = cipher.toUpperCase(),
        keyUp = key.toUpperCase(),
        result = [];

    if (!this.mode) {
      cipher = cipher.split('').reverse();
    }

    for (let i = 0, j = 0; i < cipherUp.length; i++) {
      if (abc.includes(cipherUp[i])) {
        let messageIndex = (abc.indexOf(cipherUp[i]) - abc.indexOf(keyUp[j]) + 26) % 26;
        let message = abc[messageIndex];
        result.push(message);
        j++;
        
        if (j == keyUp.length) {
          j = 0;
        }
      } else {
        result.push(cipherUp[i]);
      }
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
