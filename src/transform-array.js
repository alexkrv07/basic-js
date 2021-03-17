const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error ("Argument is not array")
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


  } catch (error) {
    return error;    
  }
};
