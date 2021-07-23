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
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }

};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS

//callback taken as arg and passed into if as a funct
const takeUntil = function (arr, callback) {
  const newArr = [];
  for (const x of arr) {
    if (callback(x) === false)
      newArr.push(x)
  }
  return newArr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// // ...
// return data2.slice(1, 4)
console.log(results2);