const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(sa) {
  if(!sa || typeof sa !== 'string' )  return false;
  const psa = parseFloat(sa);
 
  if( isNaN(psa) || psa<=0 || psa > 15) return false;
  
  return  Math.ceil(Math.log2(MODERN_ACTIVITY/psa) / (LN2 / HALF_LIFE_PERIOD));

};
