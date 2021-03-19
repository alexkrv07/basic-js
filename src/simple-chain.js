const CustomError = require("../extensions/custom-error");

const chainMaker = {
  start: "(",
  end: ")",
  link: "~~",
  chain: [],
  whitespace: " ",


  getLength() {
    return this.chain.length; 
  },

  addLink(value) {
    value = (!arguments.length) ? this.whitespace : this.whitespace + value + this.whitespace;
    this.chain.push(value);
    return this;
  },

  removeLink(position) {

    if (!Number.isInteger(position) || position < 0 || position > (this.chain.length - 1)) {
      throw new Error("Invalid position");
    }

    function test(value, index, ar) {
      return index != position - 1;
    }
    
    this.chain  = this.chain.filter(test); 
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;    
  },

  finishChain() {
    let finish = "";
    for (let i in this.chain) { 
      finish += this.start + this.chain[i] + this.end; 

      if (i < (this.chain.length - 1)) {
        finish += this.link;
      }
    }
    return finish;
  }
};

module.exports = chainMaker;
