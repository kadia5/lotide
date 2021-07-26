// test/assertEqualTest.js

const assertEqual = require('../assertEqual');
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false