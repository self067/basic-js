const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
  if(!date) return 'Unable to determine the time of year!';
  if( !(date instanceof Date) ||  typeof date.getMonth !== 'function' || Object.prototype.toString.call(date) !== '[object Date]') throw Error;
  const m = date.getMonth();
  if( isNaN( m)) throw Error;

  // Object.prototype.toString.call(date) === '[object Date]';
  // date instanceof Date
  // typeof date.getMonth === 'function'
  
  switch(m) {
    case 11:
    case 0:
    case 1: return 'winter';
    case 2:
    case 3:
    case 4: return 'spring';
    case 5:
    case 6:
    case 7: return 'summer';
    case 8:
    case 9:
    case 10: return 'autumn';

    default: return null;
  }
};
