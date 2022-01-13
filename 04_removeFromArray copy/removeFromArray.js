const removeFromArray = function(...args) {
    let arr = args[0];
    let output = [];
    arr.forEach(
        (item) => 
            {
                if(!args.includes(item)){
                    output.push(item);
            }
        }
    );
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
