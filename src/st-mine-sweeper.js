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
  // throw new NotImplementedError('Not implemented');
  function countMines(isMine) {
    if (isMine) {
      return 1;
    }
    return 0;
  }

  function count(arr, x, y) {
    let numberMines = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if ((i >= 0 && j >= 0) && (i < arr.length && j < arr.length)) {
          if (i !== x || j !== y) {
            numberMines += countMines(arr[i][j]);
          }
        }
      }
    }
    return numberMines;
  }

  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(count(matrix, i, j));
    }
  }

  return result;
  // remove line with error and write your code here
}
