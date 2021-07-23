
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
  return true;
};

// const findKey = ({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma

// assertEqual(findKeys(findKey, { stars: 1 }, "Blue Hill"), true); // => 
const findKey = function(obj, callback){
  for(let key in obj) {
    //if adds the specific instance thats checked, runs when === returns value
    if(callback(obj[key])){
      return key;
    }
     }
}
//dont run function inside the function in this case
//first make name a class-or itll print name is not defined
//below findKey is executing but not named/defined
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) )// => "noma"
//callback funct returns true or false based on condit or doesnt return anything
  //for loop goes thru each pair key value
  // for in stores inside obj key doesnt matter what name

return "undefined";
console.log(findKey());
  // console.log(Object.keys(bestTVShowsByGenre))
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  // console.log(findKey());


