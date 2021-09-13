import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
 
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    
    result += countCatsInRow(matrix[i]);

    // let el = matrix[i];

    // for (let j = 0; j < el.length; j++) {
    //   if (el[j] === '^^') {
    //     result++;
    //   }
    // }
  }
  return result;
}

function countCatsInRow(row) {
  let result = 0;

  for (let i = 0; i < row.length; i++) {
    if (row[i] === '^^') {
      result++;
    }
  }
  return result;
}