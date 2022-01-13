const caesar = function(str, shift) {
    arr = str.split('');
    
    // Checks if input is a letter in alphabet
    let is_letter = (num) => {
        if((num >= 65 && num <= 90) || (num >= 97 && num <= 122)){
            return true;
        } else {
            return false;
        }
    }

    let adjust_shift = (num) => {
        while(Math.abs(num) >= 26){
            if(num < 0){
                num += 26;
            } else if (num > 0){
                num -= 26;
            }
        }
        return num;
    }

    let checkIfUpper = (num) => {
        if(num >= 65 && num <= 90){
            return true;
        } else {
            return false;
        }
    }

    let wrap_letter = (code, uppercase) => {
        if(uppercase == true){
            if(code < 65){
                return (90 - (65 - code - 1));
            } else if(code > 90){
                return ((code - 90 - 1) + 65);
            } else {
                return code;
            }
        } else {
            if(code < 97){
                return (122 - (97 - code - 1));
            } else if(code > 122){
                return ((code - 122 - 1) + 97);
            } else {
                return code;
            }
        }
    }
    
    for(let i in arr){
        let letter = arr[i];
        //change letter to ascii code
        let code = letter.charCodeAt();
        // check if it's alphabet
        if(is_letter(code)){
            // adjust shift, so that it's within range (For very large values)
            shift = adjust_shift(shift);
            // determine if the letter is upper case or lower case
            let isUpper = checkIfUpper(code);
            // apply the shift
            let shifted_code = code + shift;
            // calculate where it will land
            let new_code = wrap_letter(shifted_code, isUpper);
            // replace old value with new
            arr[i] = String.fromCharCode(new_code);
        }
    }
    let output = arr.join('');
    return output;
};

// Do not edit below this line
module.exports = caesar;
