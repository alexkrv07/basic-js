const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let resArray = [];
  members.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach (current => {
        if (typeof current == "string") {
          resArray.push(current.trim().toUpperCase()[0]);
        }
      });
    }
    if (typeof element == "string") {
      resArray.push(element.trim().toUpperCase()[0]);
    }    
  });
  return resArray.sort().join("");
};
