const assertEqual = require('./assertEqual');

  
  

const eqArrays = function(arg1, arg2) { 
  if (arg1.length !== arg2.length ) {
    console.log(`Assertion failed: ${arg1} !== ${arg2}`);
    return false

  }
  for(let i = 0; i < arg1.length; i++ ){
    if (arg1[i] != arg2[i] ) {
      console.log(`Assertion failed: ${arg1} !== ${arg2}`);

      return false
    } 
  }
  console.log(`Assertion Passed: ${arg1} === ${arg2}`);
  return true;
}
const tail = function(words){
  words = [...words]
   words.shift();
  return words;


}
//[1, 2, 3] === [1, 2, 3] // => false
//[1, 2, 3] == [1, 2, 3] // => false

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(eqArrays(tail([5,6,7]),[6,7]));

module.exports = assertEqual;

