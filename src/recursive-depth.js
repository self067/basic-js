const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr, dep = 1 ) {
    // if( !Array.isArray(arr) || !arr.length) return dep;
    const r = [dep];
    arr.forEach(el => {
      if(Array.isArray(el)) r.push( this.calculateDepth( el, dep+1 ));
    });
    return Math.max(...r);
  }
};
