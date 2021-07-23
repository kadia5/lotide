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
  const results = {};
  console.log(sentence)

  for (let i = 0; i < sentence; i++) {
    console.log(item);
  
      if (results[item]) {
       results[item].push(i)
    } else {
      results[item] = 1;
    
  }
}
return results;

}

const result1 = letterPositions("lighthouse labs");
console.log(result1)
assertEqual(letterPositions("lighthouse labs").l,[0]);

// assertEqual(result1["l"], 2);
// assertEqual(result1["i"], 1);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 2);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS

console.log(result1)
