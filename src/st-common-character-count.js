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
  const temp1 = {};
  const temp2 = {};
  for (let i = 0; i < s1.length; i++) {
    if (!temp1[s1[i]]) {
      temp1[s1[i]] = 1;
    } else {
      temp1[s1[i]]++;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (!temp2[s2[i]]) {
      temp2[s2[i]] = 1;
    } else {
      temp2[s2[i]]++;
    }
  }

  let sum = 0;
  const key1 = Object.keys(temp1);
  const key2 = Object.keys(temp2);

  for (let i = 0; i < key1.length; i++) {
    if (key2.includes(key1[i])) {
      sum += temp1[key1[i]] < temp2[key1[i]] ? temp1[key1[i]] : temp2[key1[i]];
    }
  }
  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
