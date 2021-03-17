const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor () {
    this.direct = true;
    if (arguments[0] == false) {
      this.direct = false;
    }
  }

  A = "A".charCodeAt(0);
  Z = "Z".charCodeAt(0);
  lengthAlphabet = 26;

  encrypt(str, key) {
    let shipherText = "";
    let A = this.A;
    let Z = this.Z;
    let lengthAlphabet = this.lengthAlphabet;
    let j = 0;
    let direct = this.direct;
   
    str = str.toUpperCase();
    key = key.toUpperCase();

    // if (direct) {
    //   str = str.toUpperCase();
    //   key = key.toUpperCase();
    // }
    // else {
    //   str = str.toUpperCase().split("").reverse().join("");;
    //   key = key.toUpperCase();
    // }

    for (let i = 0; i < str.length; i++) {
      let strIndex = str.charCodeAt(i);
      let keyIndex = key.charCodeAt(j);
      if (strIndex < A || strIndex> Z) {
        shipherText += str[i];
      }
      else {
        let index = (strIndex % A + keyIndex % A) % lengthAlphabet + A;
        shipherText += String.fromCharCode(index);
        j++;
        if (j >= key.length) {
          j %= key.length;
        }
      }
    }
    if (direct) {
      return shipherText;
    }
    else {
      shipherText = shipherText.split("").reverse().join("");
      return shipherText;
    }
  }

  
  decrypt(str, key) {
    let plainText = "";
    let A = this.A;
    let Z = this.Z;
    let lengthAlphabet = this.lengthAlphabet;
    let j = 0; 
    let direct = this.direct;

    if (direct) {
      str = str.toUpperCase();
      key = key.toUpperCase();
    }
    else {
      str = str.toUpperCase().split("").reverse().join("");;
      key = key.toUpperCase();
    }

    // str = str.toUpperCase();
    // key = key.toUpperCase();
    
    for (let i = 0; i < str.length; i++) {
      let strIndex = str.charCodeAt(i);
      let keyIndex = key.charCodeAt(j);
      if (strIndex < A || strIndex> Z) {
        plainText += str[i];
      }
      else {
        let index;
        if (strIndex < keyIndex) {
          index = strIndex + lengthAlphabet - keyIndex + A;
        }
        else {
          index = strIndex - keyIndex + A;
        }
        plainText += String.fromCharCode(index);
        j++;
        if (j >= key.length) {
          j %= key.length;
        }
      }
    }
    // if (direct) {
      return plainText;
    // }
    // return plainText.split("").reverse().join("");

  }
}

module.exports = VigenereCipheringMachine;
