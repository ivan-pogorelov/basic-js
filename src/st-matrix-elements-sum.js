import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const sizeRow = matrix.length;
  const sizeCol = matrix[0].length;
  let result = 0;

  for (let i = 0; i < sizeCol; i++) {
    result += matrix[0][i];
  }

  for (let i = 1; i < sizeRow; i++) {
    
    for (let j = 0; j < sizeCol; j++) {
      if (matrix[i - 1][j] !== 0) {
        result += matrix[i][j];
      }
    }
  }
  
  return result;
}
