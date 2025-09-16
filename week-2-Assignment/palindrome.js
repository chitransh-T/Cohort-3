/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindorome(letter){
    let lowerletter = letter.toLowerCase();

    let reversedletter = lowerletter.split("").reverse("").join("");

    if(lowerletter != reversedletter ){
        return false;
    }else{
       return true
    }
}

console.log(isPalindorome("Level"))