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
  encrypt(plainMsg, key) {
    function isUpperCase(letter) {
      let l = letter.charCodeAt();
      if (l >= 65 && l <= 90) {
        return true;
      } else {
        return false;
      }
    };

    function isLowerCase(letter) {
      let l = letter.charCodeAt();
      if (l >= 97 && l <= 122) {
        return true;
      } else {
        return false;
      }
    };

    let cypher = "";
    for (var i = 0, j = 0; i < plainMsg.length; i++) {
      let currentLetter = plainMsg[i];

      if (isUpperCase(currentLetter)) {
        var upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (isLowerCase(currentLetter)) {
        var lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
        cypher += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    return cypher.toUpperCase();
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
