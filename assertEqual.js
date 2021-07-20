/* using .assert() method, good for bug catching
console.assert(1 === 1); // => nothing happens because true
console.assert(1 === 1.1); //=> prints out "Assertion failed" to the terminal*/


// FUNCTION IMPLEMENTATION
const sum = function(a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see i

const assertEqual = function(actual, expected) {
  return actual , expected;
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));