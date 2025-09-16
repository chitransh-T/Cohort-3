/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


// example : aabbcc , ababcc

function isAnagram(str1 , str2){
  let arraystr1 = str1.split("");
  let arraystr2 = str2.split("");

arraystr1.sort();
  arraystr2.sort();


  let newstr1 = sortedstr1.join("");
  let newstr2 = sortedstr2.join("");

  if(newstr1 == newstr2){
    return true;
  }else{
    return false;
  }

}

const res = isAnagram("aabbcc" , "ababcc");
console.log(res);