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
  
};
const letterPositions = function(sentence) {
  let arr1 = []
  let arr2 =[]
  let arr3 =[]
  let arr4 =[]
  let arr5 =[]
  console.log(sentence)

  for (let value of sentence) {
    if (value === "hello") {
      return letterPositions.indexOf(a);
    
  }
  arr1.push("hello")
  arr2.push("hello")
  arr3.push("hello")
  arr4.push("hello")
  arr5.push("hello")  
}
}
// const result1 = letterPositions("hello");
// console.log(result1)
console.log(assertEqual(letterPositions("hello").e,[1]));

// assertEqual(result1["l"], 2);
// assertEqual(result1["i"], 1);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 2);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS

// console.log(letterPositions())
