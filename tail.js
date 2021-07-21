const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  
};
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
// Test Case 1: Check the returned array elements
//console.log(assertEqual(result.length, 2)); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case 2: ...
// ...

