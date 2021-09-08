import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let repeatTimes = options["repeatTimes"] || 0;
  let separator = options["separator"] || "+";

  let addition = ("addition" in options) ? options["addition"] + "" : "";

  let additionRepeatTimes = options["additionRepeatTimes"] || 0;
  let additionSeparator = options["additionSeparator"] || "|";

  let createString = function (str, repeat, separator) {
    separator = separator + str;
    for (let i = 0; i < repeat; i++) {
      if (i > 0) {
        str = str + separator;
      }
    } 
    return str;
  } 

  let substring = createString(addition, additionRepeatTimes, additionSeparator);
  let result = str + substring;
  return  createString(result, repeatTimes, separator);
}
