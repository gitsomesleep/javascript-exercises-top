const convertToCelsius = function(degreesF) {

  let degreesCelsius = ( degreesF - 32 ) * (5/9);

  // Round to 10ths place and return as a number rather than a string
  return parseFloat(degreesCelsius.toFixed(1));
};

const convertToFahrenheit = function(degreesC) {

  let degreesFahrenheit = degreesC * (9/5) + 32;

  // Round to 10ths place and return as a number rather than a string
  return parseFloat(degreesFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
