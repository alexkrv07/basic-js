import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const temp = [];
  const result = [];

  arr.forEach((element) => {
    if (element >= 0) {
      temp.push(element);
    }
  });

  temp.sort((a, b) => a - b);

  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(temp[j]);
      j++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
