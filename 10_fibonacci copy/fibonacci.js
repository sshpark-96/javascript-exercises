const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    fib_arr = [1, 1];
    for(let i = 1; i < num + 1; i++){
        let fib = fib_arr[i] + fib_arr[i-1];
        fib_arr.push(fib);
    }
    return fib_arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
