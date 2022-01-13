const ftoc = function(num) {
  let output = Math.round((num - 32) * (5/9) * 10) / 10;
   
  return output;
};

const ctof = function(num) {
  let output = Math.round(((num * (9/5)) + 32) * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
