const ftoc = function(temF) {
  let convTempC = (temF - 32) * (5 / 9);
  let rTempC = Math.round(convTempC * 10) / 10;
  return rTempC;
};

const ctof = function(temC) {
  let convTempF = temC * (9 / 5) + 32;
  let rTempF = Math.round(convTempF * 10) / 10;
  return rTempF;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
