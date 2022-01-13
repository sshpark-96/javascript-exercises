const palindromes = function (str) {
    // take out any punctuation or space & Change all to lowercase
    let letter_only = (str.replace(/[^a-zA-Z]+/g, '')).toLowerCase();
    
    // check if it's a palindrome
    // 1) take string and split to array
    let str_arr = letter_only.split('');
    // 2) reverse the array and join to a new string
    let reversed = (str_arr.reverse()).join('');
    // 3) check if original and new are same
    if(letter_only === reversed){
        return true;
    } else {
        return false;
    }

};

palindromes("Hello, World!");

// Do not edit below this line
module.exports = palindromes;
