
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
  return true;
};
//
// const findKey = ({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma

// assertEqual(findKeys(findKey, { stars: 1 }, "Blue Hill"), true); // => 
const findKeyByValue = function () {
  let arr = []

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  }
  //for loop goes thru each pair key value
  // for in stores inside obj key doesnt matter what name
  for(let key in bestTVShowsByGenre) {
   //if adds the specific instance thats checked, runs when === returns value
      if (key === "drama") {
        return bestTVShowsByGenre[key]

      }
    }
return "can't find";
  }
  // console.log(Object.keys(bestTVShowsByGenre))
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  console.log(findKeyByValue());


