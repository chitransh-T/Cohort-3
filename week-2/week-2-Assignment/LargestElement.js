/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function largestElement(number){
  let max = number[0];

  for(let i = 1; i<number.length; i++){
    if(number[i]>max){
      max  = number[i]
    }
  }
  return max;
}

console.log(largestElement([3,7,2,9,1]));