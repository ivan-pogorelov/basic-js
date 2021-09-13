import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    for (let j = 1; j < arr.length; j++) {
      result.push(arr[j]);
    }
    return result;
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--double-next') {
        if (i === arr.length - 1) {
          break;
        }
      result.push(arr[i + 1])
    } else if (arr[i] === '--discard-prev') {
      result.pop();
      result.push(arr[i + 1]);
      i++
    } else if (arr[i] === '--discard-next') {
      i+=2;
      if (arr[i] === '--double-prev') {}
    } else if (arr[i] === '--double-prev') {
      result.push(arr[i - 1]);
    } else {
      result.push(arr[i])
    }
  }
  return result;
}
