import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  if (n.toString().length === 1) {
    return n;
  }
  let sum = 0;
  for (let i = 0; i < n.toString().length; i++) {
    sum += parseInt(n.toString()[i], 10);
  }
  return getSumOfDigits(sum);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
