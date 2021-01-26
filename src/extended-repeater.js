const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  console.log(str, options);
  let  res = '';
  let addstr = '';

  if( options.additionRepeatTimes) { 
    addstr = addition;
    for( let i = 0; i < options.additionRepeatTimes; i++) 
      addstr += options.additionSeparator + addstr;
  }


  if( options.repeatTimes) { 
    res = str;
    for( let i = 1; i < options.repeatTimes; i++) 
      res += addstr + options.separator + str;
  }
  return res;
  // for( let i = )
/*
	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`
*/
};
  