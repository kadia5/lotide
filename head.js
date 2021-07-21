const assertEqual = function(actual, expected) {
  if(actual === expected){
console.log(`Assertion Passed: ${actual} === ${expected}`);

  }else{
    console.log(`Assertion failed: ${actual} !== ${expected}`);
      }
  
};
const head = function(){
  let result = []
  return result
}
console.log(assertEqual(head([5,6,7]), 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");