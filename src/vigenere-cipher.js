const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir) {
    if( dir=== undefined) this.dir = true;
    else this.dir = dir;
  }
  encrypt( message, keys) {
    const key = keys.toUpperCase();
    const keylen = key.length;
    let ki = 0;

    let res = (''+message).toUpperCase().split('').map((m)=>{
      if(m.charCodeAt(0)<65 || m.charCodeAt(0)>90 )return m;
      const k = key.charCodeAt(ki%keylen);
      const en = String.fromCharCode(( m.charCodeAt(0) + k ) % 26 +65);
      ki++;
      return en;
    });
    // c =  ( m + k ) % 26;
    // m =  ( c - k + 26) mod 26;
   
    if(!this.dir) res = res.reverse();
    return res.join('');
  }    
  decrypt( message, keys) {
    const key = keys.toUpperCase();
    const keylen = key.length;
    let ki = 0;

    let res = (''+message).toUpperCase().split('').map((m)=>{
      if(m.charCodeAt(0)<65 || m.charCodeAt(0)>90 )return m;
      const k = key.charCodeAt(ki%keylen);
      const en = String.fromCharCode(( m.charCodeAt(0) - k +26) % 26 +65);
      ki++;
      return en;
    });
    // c =  ( m + k ) % 26;
    // m =  ( c - k + 26) mod 26;
    if(!this.dir) res = res.reverse();
    return res.join('');
  }
}

module.exports = VigenereCipheringMachine;
