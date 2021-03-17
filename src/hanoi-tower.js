const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  const secondsPerHour = 3600;
  let seconds = Math.floor((turns / turnsSpeed) * secondsPerHour);
  return { turns: turns, seconds: seconds };
};
