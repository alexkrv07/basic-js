const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  currentDepth = 0;
  depth = 1;

  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
       this.depth = this.depth > this.currentDepth ? this.depth : this.currentDepth;
      return this.depth;
    } else if (arr.length == 0) {
      this.currentDepth++;
      this.depth = this.depth > this.currentDepth ? this.depth : this.currentDepth;
      this.currentDepth--;
      return this.depth;
    } else {
      arr.forEach (element => {
        this.currentDepth++;
        this.calculateDepth(element);
        this.currentDepth--;
      });
      return this.depth;
    }
  }
};