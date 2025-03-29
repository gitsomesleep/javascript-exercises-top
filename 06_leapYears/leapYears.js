const leapYears = function(year) {
    // leap year must be divisible by four
    if (year % 4 !== 0) {
        return false;
    }

    // if divisible by 100, must also be divisible by 400
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    
    return true;
};

// Do not edit below this line
module.exports = leapYears;
