const sumAll = function(num1, num2) {
    if((num1 < 0 || typeof num1 !== 'number') || 
        (num2 < 0 || typeof num2 !== 'number')) {
            return 'ERROR';
        } else {
        let minor;
        let major;
        
        if(num1 < num2) {
            minor = num1;
            major = num2;
        } else {
            minor = num2;
            major = num1;
        }

        if(num1 === num2) {
            return minor;
        } else {
            return major + sumAll(minor, major - 1);
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
