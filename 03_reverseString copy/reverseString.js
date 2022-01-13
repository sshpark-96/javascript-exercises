const reverseString = function(str) {
    let output = '';
    for(let i = str.length-1; i >= 0; i--){
        output += str.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
