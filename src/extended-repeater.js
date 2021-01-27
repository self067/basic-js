const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let  res = '';
  let addstr = '';

  const separator = (options.separator)?options.separator:'+';
  const repeatTimes = (options.repeatTimes)?options.repeatTimes:0;

  const addition = options.addition; //)?options.addition:'';
  const additionSeparator = (options.additionSeparator)?options.additionSeparator:'|';
  const additionRepeatTimes = (options.additionRepeatTimes)?options.additionRepeatTimes:0;

  console.log(str, options);


  if( addition && additionRepeatTimes) { 
    addstr = addition;
    for( let i = 1; i < additionRepeatTimes; i++) 
      addstr += additionSeparator; // + addstr;
  }
console.log('addstr= ', addstr, ' ===');

  if( repeatTimes) { 
    res = str;
    for( let i = 1; i < repeatTimes; i++) 
      res += addstr + separator + str;
  }
  res += addstr;
  console.log(res);

  return res;
/*
	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`
*/
};
  