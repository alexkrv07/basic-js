const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options["repeatTimes"] || 0;
  let separator = options["separator"] || "+";
  let addition = options["addition"] || "";
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
};
  