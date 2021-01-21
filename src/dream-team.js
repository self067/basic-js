const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if( !Array.isArray( members)) return false;
  if( members.length === 0 ) return '';
  return members.filter((v)=> v && typeof v === 'string')
                .map((v)=> v.trim().toUpperCase()[0])
                .sort()
                .reduce((p,c)=>p+c);
};
