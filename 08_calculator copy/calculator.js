const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  let output = 0;
	arr.forEach((num) => {
    output += num;
  });
  return output;
};

const multiply = function(arr) {
  let output;
	arr.forEach((num,index) => {
    if(index == 0){
      output = num;
    } else {
      output *= num;
    }
  });
  return output;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	if(num == 0){
    return 1
  } 
  let output = num;
  for(i = num-1; i > 0; i--){
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
