const assertEqual = require('./assertEqual');

const tail = function(words){
  words = [...words]
   words.shift();
  return words;


}
//[1, 2, 3] === [1, 2, 3] // => false
//[1, 2, 3] == [1, 2, 3] // => false

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(eqArrays(tail([5,6,7]),[6,7]));


