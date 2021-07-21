const without = (source, itemsToRemove) => {
  let filteredArray = [];

 
  if (eqArrays(source, itemsToRemove)) {
    return filteredArray;
  }
  for (item of source) {
    if (!(itemsToRemove.includes(item))) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}; 

const eqArrays = function(arg1, arg2) { 
  if (arg1.length !== arg2.length ) {
    return false
  }
  for(let i = 0; i < arg1.length; i++ ){
    if (arg1[i] !== arg2[i] ) {
      return false
    } 
  }
  return true;
}

const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log([actual] !== [expected]);
      }
  
};
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS
console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]