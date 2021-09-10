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

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  const tokens = {
    discardNext: "--discard-next",
    discardPrev: "--discard-prev",
    doubleNext: "--double-next",
    doublePrev: "--double-prev"
  }
  let result = [];
  let isPrevious = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case tokens["discardNext"]:
        i++;
        isPrevious = false;
        break;
      case tokens["discardPrev"]:
        if (isPrevious) {
          result.pop();
          isPrevious = false; 
        }
        break;
      case tokens["doubleNext"]:
        if ((i + 1) < arr.length) {
          result.push(arr[i + 1], arr[i + 1]);
          isPrevious = true;
          i++;
        }
        break;
      case tokens["doublePrev"]:
        if (isPrevious) {
          result.push(result[result.length - 1]);
        }
        break;      
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
