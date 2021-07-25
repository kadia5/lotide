// FUNCTION IMPLEMENTATION
const eqArrays = function (arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false
  }
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] != arg2[i]) {
      return false
    }
  }
  return true;
}

const assertEqual = function (actual, expected) {

  // passed eq arrays into if statement so arguments are passed down
  if (eqArrays(actual, expected)) {

    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};

const letterPositions = function (sentence) {

  // let arr = []
  let result = {}
  for (let i = 0; i < sentence.length; i++) {
    // i = 0,1,2,3, etc but sentence[i] = any letter in the loop/that item in that index
    if (sentence[i] === " ") {
      continue

    } else if (!result[sentence[i]]) {
      result[sentence[i]] = [i]

      //   // console.log(letterPositions.push(sentence[i]))

    } else {
      result[sentence[i]].push(i)
      // }
      //blue [ ] access key/create one thats sentence[i] - specify
      // i makes things dynamic, # specifies a specific letter posit.
      // result[sentence[i]] = [i]
    }
  }
  return result

};
console.log(letterPositions("lighthouse labs"))
assertEqual(letterPositions("lighthouse in the house").i, [1, 11]);


// const result1 = letterPositions("hello");
// console.log(result1)

// assertEqual(result1["l"], 2);
// assertEqual(result1["i"], 1);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 2);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS

// console.log(letterPositions())
