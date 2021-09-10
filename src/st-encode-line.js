import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const temp = [];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (i === str.length - 1) {
      if (str[i] === str[i - 1]) {
        count++;
        temp.push(count);
      } else if (count !== 1) {
        temp.push(count);
        temp.push(str[i - 1]);
      } else {
        temp.push(str[i - 1]);
      }
      temp.push(str[i]);
    } else if (str[i] === str[i - 1]) {
      count++;
    } else if (count !== 1) {
      temp.push(count);
      count = 1;
      temp.push(str[i - 1]);
    } else {
      temp.push(str[i - 1]);
    }
  }
  return temp.join('');
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
