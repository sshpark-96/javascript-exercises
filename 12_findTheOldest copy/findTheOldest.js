const findTheOldest = function(arr) {
    let highest_age = 0, oldest, y1, y2;
    for(let i in arr){
        y1 = arr[i].yearOfBirth;
        if(!arr[i].yearOfDeath){
            y2 = new Date().getFullYear();
        } else {
            y2 = arr[i].yearOfDeath;
        }
        if((y2-y1) > highest_age){
            highest_age = y2 - y1;
            oldest = arr[i];
        } 
    }
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
