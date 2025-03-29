const removeFromArray = function(arr, ...theArgs) {

    function passesTheFilter(item) {
        for (arg of theArgs) {
            if (arg === item)
                return false;
        }
        return true;
    }

    result = arr.filter(passesTheFilter);

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
