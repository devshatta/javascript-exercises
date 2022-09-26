const ftoc = function(temF) {
  let convTempC = (temF - 32) * (5 / 9);
  let rTempC = Math.round(convTempC * 10) / 10;
  return rTempC;
};

// const ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10;
//  };

const ctof = function(temC) {
  let convTempF = temC * (9 / 5) + 32;
  let rTempF = Math.round(convTempF * 10) / 10;
  return rTempF;

};

// const ctof = function(c) {
//   return Math.round(((c * 9/5) + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
