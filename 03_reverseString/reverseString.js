const reverseString = function(str) {
    const words = str.split('');
    words.reverse();
    return words.join('');
};

// Do not edit below this line
module.exports = reverseString;
