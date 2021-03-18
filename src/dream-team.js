const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let resArray = [];
  members.forEach(element => {
    
    if (typeof element == "string") {
      resArray.push(element.trim().toUpperCase()[0]);
    }    
  });
  return resArray.sort().join("");
};
