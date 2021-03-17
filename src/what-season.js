const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date)  {
    return "Unable todetermine the time of year!";
  }
  try {
    const testdate = new Date(date);
    if ('Invalid Date' == testdate ) {
      throw new Error('Not implemented');
    }
      
    const seasons = {
      spring: "spring",
      summer: "summer",
      autumn: "autumn",
      winter: "winter"
    };
    switch (testdate .getMonth()) {
      case 0: 
      case 1: 
      case 11: 
        return seasons["winter"];
      case 2:
      case 3:
      case 4: 
        return seasons["spring"];
      case 5:
      case 6:
      case 7: 
       return seasons["summer"];
      case 8:
      case 9:
      case 10: 
        return seasons["autumn"];
  }
  }
  catch(e) {
    return "Error";
  }
};
