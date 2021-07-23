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
}n

// const sum = function(a, b) {
//   return a + b;
// };
// // TEST CODE
// console.log(assert(sum(1, 2) === 3));
// console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see i
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  console.log("lights", arr1);

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const key of arr1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// // TEST CODE
// console.log(assertEqual("Lighthouse Labs"+ "Bootcamp"));
// console.log(assertEqual(1, 1));

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false