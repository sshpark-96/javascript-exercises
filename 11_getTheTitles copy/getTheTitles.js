const getTheTitles = function(arr) {
    let output = [];
    for(let i in arr){     
        output.push(arr[i].title);
    }
    return output;
};


// Do not edit below this line
module.exports = getTheTitles;
