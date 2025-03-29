const sumAll = function(num1, num2) {
    let sumOfNums = 0;

    // Determine if valid range
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) { return 'ERROR'; }

    // Start count from whichever number is smaller
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            sumOfNums += i;
        }
    }
    else {
        for (let i = num2; i <= num1; i++) {
            sumOfNums += i;
        }
    }

    return sumOfNums;
};

// Do not edit below this line
module.exports = sumAll;
