const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix) {
    return 0;
  }

  let numberCats = 0;
  let pattern = "^^";
  
  matrix.forEach(element => {
    element.forEach (carrent => {
      if (carrent == pattern) {
        numberCats++;
      }
    });
  });
  return numberCats;
};
