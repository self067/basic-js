const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir) {
    this.dir = dir;
  }
  encrypt( message, key) {

    const m = ''+message.toUpperCase.split('').map((e)=>e);
//- 65 A

    // c =  ( m + k ) % 26;
    // m =  ( c - k + 26) mod 26;
  }    
  decrypt( message, key) {

  }
}

module.exports = VigenereCipheringMachine;
