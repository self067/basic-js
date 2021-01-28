const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let  res = '';
  let addstr = '';

  const separator = (options.separator)?options.separator:'+';
  const repeatTimes = (options.repeatTimes)?options.repeatTimes:("repeatTimes" in options)?1:0;

  const addition = ''+options.addition; //)?options.addition:'';
  const additionSeparator = (options.additionSeparator)?options.additionSeparator:'|';
  const additionRepeatTimes = (options.additionRepeatTimes)?options.additionRepeatTimes: ("additionRepeatTimes" in options)?1:0;

  // console.log(str, options, repeatTimes, additionRepeatTimes);

  if( addition && additionRepeatTimes) { 
    addstr = addition;
    for( let i = 1; i < additionRepeatTimes; i++) 
      addstr += additionSeparator + addition; // + addstr;
  }
// console.log('addstr= ', addstr, ' ===');

  if( repeatTimes) { 
    res = ''+str;
    for( let i = 1; i < repeatTimes; i++) 
      res += addstr + separator + str;
  }
  res += addstr;
  // console.log(res);

  return res;

};
  