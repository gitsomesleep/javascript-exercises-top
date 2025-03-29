const repeatString = function(str, num) {

    if (num < 0)
        return "ERROR";

    let repStr = "";
    for(let i = 0; i < num; i++) {
        repStr += str;
    }
    
    return repStr;
};

// Do not edit below this line
module.exports = repeatString;
