import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let result = [];

  for (let i = 0; i < row; i++) {
    result[i] = []
    for (let j = 0; j < col; j++) {
      result[i][j] = 0;
    }
  }

  for (let i = 0; i < row; i++) {
    
    for (let j = 0; j < col; j++) {
      if (i > 0 && matrix[i - 1][j]) {
        result[i][j]++;
      }
      if (i > 0 && j < col - 1 && matrix[i - 1][j + 1]) {
        result[i][j]++;
      }
      if (j < col - 1 && matrix[i][j + 1]) {
        result[i][j]++;
      }
      if (i < row - 1 && j < col - 1 && matrix[i + 1][j + 1]) {
        result[i][j]++;
      }
      if  (i < row - 1 && matrix[i + 1][j]) {
        result[i][j]++;
      }
      if (i < row - 1 && j > 0 && matrix[i + 1][j - 1]) {
        result[i][j]++;
      }
      if (j > 0 && matrix[i][j - 1]) {
        result[i][j]++;
      }
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
        result[i][j]++;
      }
    }
  }

  return result;
}
