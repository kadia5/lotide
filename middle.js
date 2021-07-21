// FUNCTION IMPLEMENTATION
const eqArrays = function(arg1, arg2) { 
  if (arg1.length !== arg2.length ) {
    return false
  }
  for(let i = 0; i < arg1.length; i++ ){
    if (arg1[i] != arg2[i] ) {
      return false
    } 
  }
  return true;
}

const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  
}

const middle = function(words){
  // words = [...words]
  // if (words[i] === []) {
  //   return middle(i+1);
  if (words.length <= 2){

  return [];
  } else if (words.length % 2 ){
let middleIndex =  Math.floor(words.length / 2)
return [words[middleIndex]]

  }else {
    let middleIndex2 = Math.floor(words.length / 2) - 1
    let middleIndex3 = Math.floor(words.length / 2) 
    return [words[middleIndex2], words[middleIndex3]]
  }
  
}
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3,4]), [2, 3]), true);
assertEqual(eqArrays(middle([1]), []), true) // => []
// middle([1, 2]) // => []
// const middleEl = function (arr){
//       if (arr[i] !== undefined) {
//          return middle(i+1);
//       } else {
//          return array[Math.floor(i / 2)];
//      }
//   }
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//middle(words);
  //console.log(middle(0));
  


// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
