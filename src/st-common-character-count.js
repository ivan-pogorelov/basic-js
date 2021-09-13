import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let stringMain = s1.split('').sort().join('');
  let b = s2.split('').sort().join('');
  let count = 0;

  for (let i = 0; i < stringMain.length; i++) {
    
    for (let j = 0; j < b.length; j++) {
      if (stringMain[i] === b[j]) {
        count++;
        stringMain = stringMain.substring(1);
      } 
    }
    b = b.substring(1);
  }

  return count;
}
