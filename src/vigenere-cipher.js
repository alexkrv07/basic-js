import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
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

    if (!str || !key) {
      throw new Error("Incorrect arguments!")
    }
    let shipherText = "";
    let A = this.A;
    let Z = this.Z;
    let lengthAlphabet = this.lengthAlphabet;
    let j = 0;
    let direct = this.direct;
   
    str = str.toUpperCase();
    key = key.toUpperCase();

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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(str, key) {

    if (!str || !key) {
      throw new Error("Incorrect arguments!")
    }
    let plainText = "";
    let A = this.A;
    let Z = this.Z;
    let lengthAlphabet = this.lengthAlphabet;
    let j = 0; 
    let direct = this.direct;

    str = str.toUpperCase();
    key = key.toUpperCase();
    
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
    if (direct) {
      return plainText;
    }
    return plainText.split("").reverse().join("")
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
