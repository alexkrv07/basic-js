import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  currentDepth = 0;
  depth = 1;

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
      this.depth = this.depth > this.currentDepth ? this.depth : this.currentDepth;
     return this.depth;
   } else if (arr.length === 0) {
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
}
