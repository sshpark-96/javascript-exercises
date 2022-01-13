const leapYears = function(year) {
    //Leap year:
    // 1) Divisible by 4
    // 2) But not years divisible by 100
    // 3) Unless they are divisible by 400

    if((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
