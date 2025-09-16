/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  
let letter = str.split("")
let vovelcount = 0 ;
for(let i = 0 ; i<letter.length; i++){
    if(letter[i] === 'a' || letter[i] === 'e' ||letter[i] === 'i' ||letter[i] === 'o' ||letter[i] === 'u'||
        letter[i] === 'A' || letter[i] === 'E' ||letter[i] === 'I' ||letter[i] === 'O' ||letter[i] === 'U'
    ){
        vovelcount = vovelcount + 1;
    }
  
}
          console.log(vovelcount);
}

countVowels("CHitRAnsh")