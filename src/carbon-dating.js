const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || (typeof sampleActivity != "string")) {
    return false;
  }
  
  sampleActivity = Number.parseFloat(sampleActivity);
  if (Number.isNaN(sampleActivity)) {
    return false;
  }
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  const ln2 = Math.log(2); // натуральный логарифм от 2
  let age = Math.log(MODERN_ACTIVITY / sampleActivity) / (ln2 / HALF_LIFE_PERIOD);
  return Math.ceil(age);
};
