const sumAll = function(start, end) {
    //If it's not a number, cause error
    if (typeof(start) != "number" || typeof(end) != "number" ){
        return "ERROR";
    //if it's a negative, cause error
    } else if (start < 0 || end < 0){
        return "ERROR";
    }
    // When start number is greater than end number
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    // Sum of numbers between the 2 given
    let output = 0;
    for (let i = start; i <=end; i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
