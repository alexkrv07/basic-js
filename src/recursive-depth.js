const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  currentDepth = 0;
  depth = 0;

  calculateDepth(arr) {

    if (!Array.isArray(arr) || arr.length == 0) {
      this.currentDepth++;
      if (this.currentDepth > this.depth) {
        this.depth = this.currentDepth;  
        this.currentDepth--;
        return this.depth;
      }
      this.currentDepth--
      return this.depth;
    }
      arr.forEach(element => { 
        if (!Array.isArray(element) || element.length == 0) {
          this.currentDepth++;
          if (this.currentDepth > this.depth) {
            this.depth = this.currentDepth;  
            this.currentDepth--;
            return this.depth;
          }
          this.currentDepth--;
          return this.depth;
        }
        else {
          this.currentDepth++;
          return this.calculateDepth(element);
        }
      }); 
      return this.depth;
  }
};