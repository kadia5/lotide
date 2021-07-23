

// const map1 = words.map(  => )

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const map = function(arr, callback) {
//   // empty for now :)
//   console.log('array: ', arr);
//   console.log('callback: ', callback);

//   const results = [];
//   return results;
// }

  const map = function(words, callback) {

    const results = [];

    for (let item of words) {
      results.push(callback(item))
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
    }
    return results;
  }
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);