import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  start: "(",
  end: ")",
  link: "~~",
  chain: [],
  whitespace: " ",

  getLength() {
    return this.chain.length; 
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {

    value = (!arguments.length) ? this.whitespace : this.whitespace + value + this.whitespace;
    this.chain.push(value);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {

    if (!Number.isInteger(position) || position < 0 || position > (this.chain.length - 1)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    function test(value, index, ar) {
      return index != position - 1;
    }
    
    this.chain  = this.chain.filter(test); 
    return this;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this; 
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let finish = "";
    for (let i in this.chain) { 
      finish += this.start + this.chain[i] + this.end; 

      if (i < (this.chain.length - 1)) {
        finish += this.link;
      }
    }
    this.chain = [];
    return finish;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
